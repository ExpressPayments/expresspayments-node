#!/usr/bin/env -S npm run-script run

import ExpressPayments from 'expresspayments';
import express from 'express';
import env from 'dotenv';
import {AddressInfo} from 'net';

env.config();

const expressPayments = new ExpressPayments(process.env.EP_SECRET_KEY, {
    apiVersion: '2023-11-01',
});

const webhookSecret: string = process.env.EP_SECRET_KEY;

const app = express();

// Use JSON parser for all non-webhook routes
app.use(
    (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ): void => {
        if (req.originalUrl === '/webhook') {
            next();
        } else {
            express.json()(req, res, next);
        }
    }
);

app.post(
    '/webhook',
    // ExpressPayments requires the raw body to construct the event
    express.raw({type: 'application/json'}),
    (req: express.Request, res: express.Response): void => {
        const sig = req.headers['ep-signature'];

        let event: ExpressPayments.Event;

        try {
            event = expressPayments.webhooks.constructEvent(
                req.body,
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

        // Cast event data to ExpressPayments object
        if (event.type === 'payment_intent.succeeded') {
            const expressPaymentsObject: ExpressPayments.PaymentIntent = event
                .data.object as ExpressPayments.PaymentIntent;
            console.log(
                `💰 PaymentIntent status: ${expressPaymentsObject.status}`
            );
        } else if (event.type === 'charge.succeeded') {
            const charge = event.data.object as ExpressPayments.Charge;
            console.log(`💵 Charge id: ${charge.id}`);
        } else {
            console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`);
        }

        // Return a response to acknowledge receipt of the event
        res.json({received: true});
    }
);

const server = app.listen();
console.log(
    `Webhook endpoint available at http://localhost:${
        (<AddressInfo>server.address()).port
    }/webhook`
);
