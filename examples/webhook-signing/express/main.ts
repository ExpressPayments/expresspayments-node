#!/usr/bin/env -S npm run-script run

import ExpressPlatby from 'expressplatby';
import express from 'express';
import env from 'dotenv';
import {AddressInfo} from 'net';

env.config();

const expressPlatby = new ExpressPlatby(process.env.EXPRESSPLATBY_SECRET_KEY, {
    apiVersion: '2023-06-01',
});

const webhookSecret: string = process.env.EXPRESSPLATBY_SECRET_KEY;

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
    // ExpressPlatby requires the raw body to construct the event
    express.raw({type: 'application/json'}),
    (req: express.Request, res: express.Response): void => {
        const sig = req.headers['expressplatby-signature'];

        let event: ExpressPlatby.Event;

        try {
            event = expressPlatby.webhooks.constructEvent(
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
    }
);

const server = app.listen();
console.log(
    `Webhook endpoint available at http://localhost:${
        (<AddressInfo>server.address()).port
    }/webhook`
);
