#!/usr/bin/env -S npm run-script run

import {serveListener} from 'https://deno.land/std@0.116.0/http/server.ts';
import 'https://deno.land/x/dotenv/load.ts';

import ExpressPayments from 'npm:expresspayments@^2.0.1';

const expressPayments = ExpressPayments(Deno.env.get('EXPRESSPAYMENTS_API_KEY'));

// Must specify hostname explicitly, see https://github.com/denoland/deno/issues/5144
const server = Deno.listen({hostname: '127.0.0.1', port: 0});
const {port} = server.addr;
console.log(`Webhook endpoint available at http://127.0.0.1:${port}/`);

// This handler will be called for every incoming request.
async function handler(request) {
    const signature = request.headers.get('ExpressPayments-Signature');

    // First step is to verify the event. The .text() method must be used as the
    // verification relies on the raw request body rather than the parsed JSON.
    const body = await request.text();
    let event;
    try {
        event = await expressPayments.webhooks.constructEventAsync(
            body,
            signature,
            Deno.env.get('EXPRESSPAYMENTS_WEBHOOK_SECRET'),
            undefined
        );
    } catch (err) {
        console.log(`❌ Error message: ${err.message}`);
        return new Response(err.message, {status: 400});
    }

    // Successfully constructed event
    console.log('✅ Success:', event.id);

    // Cast event data to ExpressPayments object
    if (event.type === 'payment_intent.succeeded') {
        const ExpressPaymentsObject = event.data.object;
        console.log(`💰 PaymentIntent status: ${ExpressPaymentsObject.status}`);
    } else if (event.type === 'charge.succeeded') {
        const charge = event.data.object;
        console.log(`💵 Charge id: ${charge.id}`);
    } else {
        console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`);
    }

    return new Response(JSON.stringify({received: true}), {status: 200});
}

await serveListener(server, handler);
