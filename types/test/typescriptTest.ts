/**
 * This file does not exist to be executed, just compiled,
 * so that we can ensure that the definition files
 * only reference names that exist,
 * and to perform a basic sanity check that types are exported as intended.
 */

///<reference types=".." />
import ExpressPayments from "expresspayments";
// Test NodeHttpClient request processing.
import {Agent} from 'http';

let expressPayments = new ExpressPayments('sk_test_123', {
    apiVersion: '2023-11-01',
});

// @ts-ignore lazily ignore apiVersion requirement.
expressPayments = new ExpressPayments('sk_test_123');

expressPayments = new ExpressPayments('sk_test_123', {
    // @ts-ignore ignore specific apiVersion.
    apiVersion: '2023-11-01',
});

expressPayments = new ExpressPayments('sk_test_123', {
    // @ts-ignore ignore default apiVersion.
    apiVersion: null,
});

// Check config object.
expressPayments = new ExpressPayments('sk_test_123', {
    apiVersion: '2023-11-01',
    typescript: true,
    maxNetworkRetries: 1,
    timeout: 1000,
    host: 'api.example.com',
    port: 123,
    telemetry: true,
    httpClient: ExpressPayments.createNodeHttpClient(),
    appInfo: {
        name: 'my-wordpress-plugin',
    },
});

(async (): Promise<void> => {
    const params: ExpressPayments.CustomerCreateParams = {
        description: 'test',
    };
    const opts: ExpressPayments.RequestOptions = {
        apiVersion: '2023-11-01',
    };
    const customer: ExpressPayments.Customer = await expressPayments.customers.create(
        params,
        opts
    );

    const address: ExpressPayments.Address | null | undefined =
        customer.address;

    if (!address) return;
    const city: string | null = address.city;

    // Check no opts:
    await expressPayments.customers.create(params);

    // Check multiple dispatch:
    let product = await expressPayments.products.retrieve('prod_123', opts);
    product = await expressPayments.products.retrieve(
        'prod_123',
        {expand: []},
        opts
    );

    const charge: ExpressPayments.Charge = await expressPayments.charges.retrieve(
        'ch_123',
        {
            expand: ['customer'],
        }
    );

    // Ignore null case.
    if (!charge.customer) throw Error('guard');

    // Check you can cast an expandable field to the object:
    const cusEmail:
        | string
        | null = (charge.customer as ExpressPayments.Customer).email;
    // Check you can cast an expandable field to a string:
    const btId: string = charge.balance_transaction as string;

    // Check you can deal with deleted:
    if (
        typeof charge.customer !== 'string' &&
        // Not sure why `!charge.customer.deleted` doesn't work, it seems to in a playground:
        // https://www.typescriptlang.org/play/index.html#code/JYOwLgpgTgZghgYwgAgGIHt3IN4ChnJwBcyAzmFKAOYDc+yADpQgNYA2AnieZSLfXABGiFtwrVkAH2QgArmzZSZsgLaDodAmA4MIJAOQxM+zcgAmENhEhmA-CQBu6YGboBfXKEixEKACKW1hBmGFh4Wjp6yIbGphZWNiQUshDuuLjausgAsnAc6qHIALxomEoBCcGh6RYIbHBQKAjoIOTIAB4kufkQ1Z4wyAAUAITtAHTxQWYAlDj0za1ghGK8VMUdY3C4Hri19Y3IC21cpVjSFVOF0jwS0nIK6cADgxzIAGRvyJkQ6AOvw0USvobnx9O9PsMOBNAjZZuFDi02sQyOI+OsoVsPEA
        // Might be a complexity limit with our resources: https://github.com/microsoft/TypeScript/pull/30779/files#diff-c3ed224e4daa84352f7f1abcd23e8ccaR13219
        !('deleted' in charge.customer)
    ) {
        const created: number = charge.customer.created;
    }
    const r = Math.random() - 0.5;
    // Okay, this is how I hope people can deal with deleted:
    const maybeCoupon:
        | ExpressPayments.Coupon
        | ExpressPayments.DeletedCoupon = await (r
        ? expressPayments.coupons.retrieve('25_off')
        : expressPayments.coupons.del('25_off'));
    if (maybeCoupon.deleted) {
        const d: true = maybeCoupon.deleted;
    } else {
        // Here, TS knows it's a full Coupon.
        const created: number = maybeCoupon.created;
    }

    for await (const customer of expressPayments.customers.list()) {
        const {id} = customer as ExpressPayments.Customer;
        if (id === 'hi') {
            break;
        }
    }

    const cusList: ExpressPayments.ApiList<ExpressPayments.Customer> = await expressPayments.customers.list();

    const aThousandCustomers: Array<ExpressPayments.Customer> = await expressPayments.customers
        .list()
        .autoPagingToArray({limit: 1000});

    const nothing: void = await expressPayments.customers
        .list()
        .autoPagingEach((customer: ExpressPayments.Customer) => {
            if (customer.id === 'one') {
                return false;
            }
            if (customer.id === 'two') {
                return Promise.resolve(false);
            }
            if (customer.id === 'three') {
                return Promise.resolve();
            }
            return undefined;
        });

    // @ts-expect-error
    (await expressPayments.invoices.retrieveUpcoming()).id;
    (await expressPayments.invoices.retrieve('')).id;

    try {
        await expressPayments.paymentIntents.create({
            amount: 100,
            currency: 'USD',
        });
    } catch (err) {
        if (err instanceof expressPayments.errors.ExpressPaymentsCardError) {
            const declineCode: string = err.decline_code;
        }
        if (err instanceof ExpressPayments.errors.ExpressPaymentsCardError) {
            const declineCode: string = err.decline_code;
        }
    }

    {
        const custs = await expressPayments.customers.list();
        const lr = custs.lastResponse;
        const requestId: string = lr.requestId;
        const statusCode: number = lr.statusCode;
        const apiVersion: string | undefined = lr.apiVersion;
        const idempotencyKey: string | undefined = lr.idempotencyKey;
        const headers = lr.headers;
        const header: string | undefined = headers['request-id'];
    }

    {
        const cust = await expressPayments.customers.retrieve('foo');
        const lr = cust.lastResponse;
        const requestId: string = lr.requestId;
        const statusCode: number = lr.statusCode;
        const apiVersion: string | undefined = lr.apiVersion;
        const idempotencyKey: string | undefined = lr.idempotencyKey;
        const headers = lr.headers;
        const header: string | undefined = lr.headers['request-id'];
    }
    {
        const acct = await expressPayments.accounts.createExternalAccount(
            'foo',
            {
                ['external_account']: 'foo',
            }
        );
        if (acct.object === 'card') {
            const rid: string = acct.lastResponse.requestId;
        }
    }
})();

const Foo = ExpressPayments.ExpressPaymentsResource.extend({
    foo: ExpressPayments.ExpressPaymentsResource.method({
        method: 'create',
        path: 'foo',
    }),
    fooFullPath: ExpressPayments.ExpressPaymentsResource.method({
        method: 'create',
        fullPath: '/v1/full/path',
    }),
    search: ExpressPayments.ExpressPaymentsResource.method({
        method: 'create',
        fullPath: 'foo',
        methodType: 'search',
    }),
    customer: ExpressPayments.ExpressPaymentsResource.method<
        ExpressPayments.Customer
    >({method: 'POST'}),
});
const fooClient = new Foo(expressPayments);
const searchResponse: ExpressPayments.Response<object> = fooClient.search();
const customerResponse: ExpressPayments.Response<ExpressPayments.Customer> = fooClient.customer();

const maxBufferedRequestMetrics: number =
    ExpressPayments.ExpressPaymentsResource.MAX_BUFFERED_REQUEST_METRICS;

async (): Promise<void> => {
    const client = ExpressPayments.createNodeHttpClient(new Agent());

    const response = await client.makeRequest(
        'api.epayments.network',
        '443',
        '/test',
        'POST',
        {
            'EP-Account': 'account',
            'Content-Length': 123,
        },
        'requestdata',
        'https',
        80000
    );

    const stream: ExpressPayments.ExpressPaymentsStreamResponse = response.toStream(
        () => {
            return;
        }
    );
    stream.setEncoding('utf8');

    const jsonResponse: object = await response.toJSON();
};

// Test FetchHttpClient request processing.
async (): Promise<void> => {
    const client = ExpressPayments.createFetchHttpClient();

    const response = await client.makeRequest(
        'api.epayments.network',
        '443',
        '/test',
        'POST',
        {
            'EP-Account': 'account',
            'Content-Length': 123,
        },
        'requestdata',
        'https',
        80000
    );

    const stream = response.toStream(() => {
        return;
    });

    const results = await stream.getReader().read();

    const jsonResponse: object = await response.toJSON();
};

// Tests asynchronous webhook processing.
async (): Promise<void> => {
    const cryptoProvider = ExpressPayments.createSubtleCryptoProvider();

    const event = await expressPayments.webhooks.constructEventAsync(
        'body',
        'signature',
        'secret',
        undefined,
        cryptoProvider
    );

    const event2 = await expressPayments.events.retrieve(event.id);
};

// Can reference error types
let rawError: ExpressPayments.ExpressPaymentsRawError;

let newError: ExpressPayments.errors.ExpressPaymentsError;

const instanceofCheck1 =
    {} instanceof ExpressPayments.errors.ExpressPaymentsError;
const instanceofCheck2 =
    {} instanceof ExpressPayments.errors.ExpressPaymentsAPIError;
const instanceofCheck5 =
    {} instanceof expressPayments.errors.ExpressPaymentsError;
const instanceofCheck6 =
    {} instanceof expressPayments.errors.ExpressPaymentsAPIError;

ExpressPayments.errors.generate({
    type: 'card_error',
});
expressPayments.errors.generate({
    type: 'card_error',
});
ExpressPayments.errors.ExpressPaymentsError.generate({
    type: 'card_error',
});

expressPayments.accounts.retrieve('123', {
    host: 'my_host',
});
expressPayments.files.create({
    purpose: 'dispute_evidence',
    file: {
        data: Buffer.from('File'),
        name: 'minimal.pdf',
        type: 'application/octet-stream',
    },
    file_link_data: {create: true},
});
