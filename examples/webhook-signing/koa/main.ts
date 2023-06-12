#!/usr/bin/env -S npm run-script run

import ExpressPlatby from 'expressplatby';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import env from 'dotenv';
import {AddressInfo} from 'net';

const app = new Koa();

env.config();
const webhookSecret = process.env.EXPRESSPLATBY_WEBHOOK_SECRET;

const expressPlatby = new ExpressPlatby(process.env.EXPRESSPLATBY_SECRET_KEY, {
    apiVersion: '2023-06-01',
});

const handleWebhook = async (ctx: Koa.ParameterizedContext, next: Koa.Next) => {
    const sig = ctx.request.headers['expressplatby-signature'];
    let event;

    try {
        event = expressPlatby.webhooks.constructEvent(
            ctx.request.rawBody,
            sig,
            webhookSecret
        );
    } catch (err) {
        // On error, log and return the error message
        console.log(`❌ Error message: ${err.message}`);
        ctx.response.status = 400;
        ctx.body = `Webhook Error: ${err.message}`;
        return await next();
    }

    // Successfully constructed event
    console.log('✅ Success:', event.id);

    // Cast event data to ExpressPlatby object
    if (event.type === 'payment_intent.succeeded') {
        const expressPlatbyObject = event.data.object;
        console.log(`💰 PaymentIntent status: ${expressPlatbyObject.status}`);
    } else if (event.type === 'charge.succeeded') {
        const charge = event.data.object;
        console.log(`💵 Charge id: ${charge.id}`);
    } else {
        console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`);
    }

    // Return a response to acknowledge receipt of the event
    ctx.response.body = JSON.stringify({received: true});
    ctx.response.set('Content-Type', 'application/json');
    return await next();
};

app.use(bodyParser({enableTypes: ['json']}));
app.use(async (ctx, next) => {
    if (ctx.request.path === '/webhook') {
        return handleWebhook(ctx, next);
    }
    const name = ctx.request.body?.['name'] ?? 'world';
    ctx.body = `hello ${name}, you hit ${ctx.request.path}`;
});

const server = app.listen();

console.log(
    `Webhook endpoint available at http://localhost:${
        (<AddressInfo>server.address()).port
    }/webhook`
);
