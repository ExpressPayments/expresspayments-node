# Checking webhook signatures

Verify the events that ExpressPlatby sends to your webhook endpoints. Additional details in the
ExpressPlatby [docs](https://expressplatby.cz/docs/webhooks/signatures).

Available examples:

- [`express`](./express) - Express 4
- [`koa`](./koa) - Koa 2
- [`nextjs`](./nextjs) - NextJS 13

### Requirements

You’ll need the following:

- [Node.js](http://nodejs.org) >=14.0.0
- ExpressPlatby account to accept payments ([sign up](https://dashboard.expressplatby.cz/register) for free).
- [ExpressPlatby CLI](https://github.com/expressplatby/expressplatby-cli) or [ngrok](https://ngrok.com/) to tunnel
  requests to your local server.

### Install and run

In the sample directory (`cd examples/webhook-signing/express`).

Install dependencies:

    npm install

Update `.env` with your own [ExpressPlatby API keys](https://dashboard.expressplatby.cz/account/apikeys).

Next, follow [these installation steps](https://github.com/expressplatby/expressplatby-cli#installation) to install the
ExpressPlatby CLI which we'll use for webhook forwarding.

After the installation has finished, authenticate the CLI with your ExpressPlatby account:

    expressplatby login

To start the webhook forwarding run:

    expressplatby listen --forward-to localhost:3000/webhook

The ExpressPlatby CLI will let you know that webhook forwarding is ready and output your webhook signing secret:

    > Ready! Your webhook signing secret is whsec_xxx

Copy the webhook signing secret (`whsec_xxx`) to your `.env` file.

In a separate terminal window, start the local sample server:

    `./main.ts`

In another separate terminal window, trigger an event, for example:

    expressplatby trigger payment_intent.succeeded

You should now see some webhook event details being logged to your Node.js console.

## Developing

To add a new example:

1. Create a new sub-folder using the server library name
2. Copy `package.json` from one of the existing samples. Remove extra dependencies.
3. Create a `main.ts` file with sample server code and run `chmod +x main.ts` so it's directly executable.
4. The `main.ts` has to follow some rules:
5. Written in typescript using `import .. from ..` import syntax.
6. Must have `#!/usr/bin/env -S npm run-script run` header to be directly run-able.
7. Must print `Webhook endpoint available at <url>` when the server is started.
8. Must return `{"received":true}` and 200 status code for `charge.succeeded` event.
9. Test your example
10. `cd examples/webhook-signing/test`
11. `./main.ts ../<your test directory>`
12. Add a test to `/tests/Integration.spec.ts`
