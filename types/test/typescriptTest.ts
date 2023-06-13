/**
 * This file does not exist to be executed, just compiled,
 * so that we can ensure that the definition files
 * only reference names that exist,
 * and to perform a basic sanity check that types are exported as intended.
 */

///<reference types=".." />
import ExpressPlatby from 'expressplatby';
// Test NodeHttpClient request processing.
import {Agent} from 'http';

let expressPlatby = new ExpressPlatby('sk_test_123', {
    apiVersion: '2023-06-01',
});

// @ts-ignore lazily ignore apiVersion requirement.
expressPlatby = new ExpressPlatby('sk_test_123');

expressPlatby = new ExpressPlatby('sk_test_123', {
    // @ts-ignore ignore specific apiVersion.
    apiVersion: '2022-12-31',
});

expressPlatby = new ExpressPlatby('sk_test_123', {
    // @ts-ignore ignore default apiVersion.
    apiVersion: null,
});

// Check config object.
expressPlatby = new ExpressPlatby('sk_test_123', {
    apiVersion: '2023-06-01',
    typescript: true,
    maxNetworkRetries: 1,
    timeout: 1000,
    host: 'api.example.com',
    port: 123,
    telemetry: true,
    httpClient: ExpressPlatby.createNodeHttpClient(),
    appInfo: {
        name: 'my-wordpress-plugin',
    },
});

(async (): Promise<void> => {
    const params: ExpressPlatby.CustomerCreateParams = {
        description: 'test',
    };
    const opts: ExpressPlatby.RequestOptions = {
        apiVersion: '2023-06-01',
    };
    const customer: ExpressPlatby.Customer = await expressPlatby.customers.create(
        params,
        opts
    );

    const address: ExpressPlatby.Address | null | undefined = customer.address;

    if (!address) return;
    const city: string | null = address.city;

    // Check no opts:
    await expressPlatby.customers.create(params);

    // Check multiple dispatch:
    let product = await expressPlatby.products.retrieve('prod_123', opts);
    product = await expressPlatby.products.retrieve(
        'prod_123',
        {expand: []},
        opts
    );

    const charge: ExpressPlatby.Charge = await expressPlatby.charges.retrieve(
        'ch_123',
        {
            expand: ['customer'],
        }
    );

    // Ignore null case.
    if (!charge.customer) throw Error('guard');

    // Check you can cast an expandable field to the object:
    const cusEmail: string | null = (charge.customer as ExpressPlatby.Customer)
        .email;
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
        | ExpressPlatby.Coupon
        | ExpressPlatby.DeletedCoupon = await (r
        ? expressPlatby.coupons.retrieve('25_off')
        : expressPlatby.coupons.del('25_off'));
    if (maybeCoupon.deleted) {
        const d: true = maybeCoupon.deleted;
    } else {
        // Here, TS knows it's a full Coupon.
        const created: number = maybeCoupon.created;
    }

    for await (const customer of expressPlatby.customers.list()) {
        const {id} = customer as ExpressPlatby.Customer;
        if (id === 'hi') {
            break;
        }
    }

    const cusList: ExpressPlatby.ApiList<ExpressPlatby.Customer> = await expressPlatby.customers.list();

    const aThousandCustomers: Array<ExpressPlatby.Customer> = await expressPlatby.customers
        .list()
        .autoPagingToArray({limit: 1000});

    const nothing: void = await expressPlatby.customers
        .list()
        .autoPagingEach((customer: ExpressPlatby.Customer) => {
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
    (await expressPlatby.invoices.retrieveUpcoming()).id;
    (await expressPlatby.invoices.retrieve('')).id;

    try {
        await expressPlatby.paymentIntents.create({
            amount: 100,
            currency: 'USD',
        });
    } catch (err) {
        if (err instanceof expressPlatby.errors.ExpressPlatbyCardError) {
            const declineCode: string = err.decline_code;
        }
        if (err instanceof ExpressPlatby.errors.ExpressPlatbyCardError) {
            const declineCode: string = err.decline_code;
        }
    }

    {
        const custs = await expressPlatby.customers.list();
        const lr = custs.lastResponse;
        const requestId: string = lr.requestId;
        const statusCode: number = lr.statusCode;
        const apiVersion: string | undefined = lr.apiVersion;
        const idempotencyKey: string | undefined = lr.idempotencyKey;
        const headers = lr.headers;
        const header: string | undefined = headers['request-id'];
    }

    {
        const cust = await expressPlatby.customers.retrieve('foo');
        const lr = cust.lastResponse;
        const requestId: string = lr.requestId;
        const statusCode: number = lr.statusCode;
        const apiVersion: string | undefined = lr.apiVersion;
        const idempotencyKey: string | undefined = lr.idempotencyKey;
        const headers = lr.headers;
        const header: string | undefined = lr.headers['request-id'];
    }
    {
        const acct = await expressPlatby.accounts.createExternalAccount('foo', {
            ['external_account']: 'foo',
        });
        if (acct.object === 'card') {
            const rid: string = acct.lastResponse.requestId;
        }
    }
})();

const Foo = ExpressPlatby.ExpressPlatbyResource.extend({
    foo: ExpressPlatby.ExpressPlatbyResource.method({
        method: 'create',
        path: 'foo',
    }),
    fooFullPath: ExpressPlatby.ExpressPlatbyResource.method({
        method: 'create',
        fullPath: '/v1/full/path',
    }),
    search: ExpressPlatby.ExpressPlatbyResource.method({
        method: 'create',
        fullPath: 'foo',
        methodType: 'search',
    }),
    customer: ExpressPlatby.ExpressPlatbyResource.method<
        ExpressPlatby.Customer
    >({method: 'POST'}),
});
const fooClient = new Foo(expressPlatby);
const searchResponse: ExpressPlatby.Response<object> = fooClient.search();
const customerResponse: ExpressPlatby.Response<ExpressPlatby.Customer> = fooClient.customer();

const maxBufferedRequestMetrics: number =
    ExpressPlatby.ExpressPlatbyResource.MAX_BUFFERED_REQUEST_METRICS;

async (): Promise<void> => {
    const client = ExpressPlatby.createNodeHttpClient(new Agent());

    const response = await client.makeRequest(
        'api.expressplatby.cz',
        '443',
        '/test',
        'POST',
        {
            'ExpressPlatby-Account': 'account',
            'Content-Length': 123,
        },
        'requestdata',
        'https',
        80000
    );

    const stream: ExpressPlatby.ExpressPlatbyStreamResponse = response.toStream(
        () => {
            return;
        }
    );
    stream.setEncoding('utf8');

    const jsonResponse: object = await response.toJSON();
};

// Test FetchHttpClient request processing.
async (): Promise<void> => {
    const client = ExpressPlatby.createFetchHttpClient();

    const response = await client.makeRequest(
        'api.expressplatby.cz',
        '443',
        '/test',
        'POST',
        {
            'ExpressPlatby-Account': 'account',
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
    const cryptoProvider = ExpressPlatby.createSubtleCryptoProvider();

    const event = await expressPlatby.webhooks.constructEventAsync(
        'body',
        'signature',
        'secret',
        undefined,
        cryptoProvider
    );

    const event2 = await expressPlatby.events.retrieve(event.id);
};

// Can reference error types
let rawError: ExpressPlatby.ExpressPlatbyRawError;

let newError: ExpressPlatby.errors.ExpressPlatbyError;

const instanceofCheck1 = {} instanceof ExpressPlatby.errors.ExpressPlatbyError;
const instanceofCheck2 =
    {} instanceof ExpressPlatby.errors.ExpressPlatbyAPIError;
const instanceofCheck5 = {} instanceof expressPlatby.errors.ExpressPlatbyError;
const instanceofCheck6 =
    {} instanceof expressPlatby.errors.ExpressPlatbyAPIError;

ExpressPlatby.errors.generate({
    type: 'card_error',
});
expressPlatby.errors.generate({
    type: 'card_error',
});
ExpressPlatby.errors.ExpressPlatbyError.generate({
    type: 'card_error',
});

expressPlatby.accounts.retrieve('123', {
    host: 'my_host',
});
expressPlatby.files.create({
    purpose: 'dispute_evidence',
    file: {
        data: Buffer.from('File'),
        name: 'minimal.pdf',
        type: 'application/octet-stream',
    },
    file_link_data: {create: true},
});
