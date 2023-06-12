import ExpressPlatby from 'expressplatby';
import {NextApiRequest, NextApiResponse} from 'next';

const handler = async (
    req: NextApiRequest,
    res: NextApiResponse
): Promise<void> => {
    const expressPlatby = new ExpressPlatby(
        process.env.EXPRESSPLATBY_SECRET_KEY,
        {
            apiVersion: '2023-06-01',
        }
    );

    const webhookSecret: string = process.env.EXPRESSPLATBY_WEBHOOK_SECRET;

    if (req.method === 'POST') {
        const sig = req.headers['expressplatby-signature'];

        let event: ExpressPlatby.Event;

        try {
            const body = await buffer(req);
            event = expressPlatby.webhooks.constructEvent(
                body,
                sig,
                webhookSecret
            );
        } catch (err) {
            // On error, log and return the error message
            console.log(`❌ Error message: ${err.message}`);
            res.status(400).send(`Webhook Error: ${err.message}`);
            return;
        }

        // Successfully constructed event
        console.log('✅ Success:', event.id);

        // Cast event data to ExpressPlatby object
        if (event.type === 'payment_intent.succeeded') {
            const expressPlatbyObject: ExpressPlatby.PaymentIntent = event.data
                .object as ExpressPlatby.PaymentIntent;
            console.log(
                `💰 PaymentIntent status: ${expressPlatbyObject.status}`
            );
        } else if (event.type === 'charge.succeeded') {
            const charge = event.data.object as ExpressPlatby.Charge;
            console.log(`💵 Charge id: ${charge.id}`);
        } else {
            console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`);
        }

        // Return a response to acknowledge receipt of the event
        res.json({received: true});
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
};

export const config = {
    api: {
        bodyParser: false,
    },
};

const buffer = (req: NextApiRequest) => {
    return new Promise<Buffer>((resolve, reject) => {
        const chunks: Buffer[] = [];

        req.on('data', (chunk: Buffer) => {
            chunks.push(chunk);
        });

        req.on('end', () => {
            resolve(Buffer.concat(chunks));
        });

        req.on('error', reject);
    });
};

export default handler;
