import DefaultExpressPlatby, {ExpressPlatby} from 'expressplatby';
import assert from 'assert';

assert(ExpressPlatby.PACKAGE_VERSION);
assert(ExpressPlatby.USER_AGENT);

assert(ExpressPlatby.HttpClient);
assert(ExpressPlatby.HttpClient.CONNECTION_CLOSED_ERROR_CODES);
assert(ExpressPlatby.HttpClient.TIMEOUT_ERROR_CODE);
assert(ExpressPlatby.HttpClient.makeTimeoutError);

assert(ExpressPlatby.HttpClientResponse);
assert(ExpressPlatby.createFetchHttpClient);
assert(ExpressPlatby.createNodeHttpClient);

assert(ExpressPlatby.CryptoProvider);
assert(ExpressPlatby.createNodeCryptoProvider);
assert(ExpressPlatby.createSubtleCryptoProvider);

assert(ExpressPlatby.errors);
assert(ExpressPlatby.errors.generate);
assert(ExpressPlatby.errors.ExpressPlatbyError);
assert(ExpressPlatby.errors.ExpressPlatbyCardError);
assert(ExpressPlatby.errors.ExpressPlatbyInvalidRequestError);
assert(ExpressPlatby.errors.ExpressPlatbyAPIError);
assert(ExpressPlatby.errors.ExpressPlatbyAuthenticationError);
assert(ExpressPlatby.errors.ExpressPlatbyPermissionError);
assert(ExpressPlatby.errors.ExpressPlatbyRateLimitError);
assert(ExpressPlatby.errors.ExpressPlatbyConnectionError);
assert(ExpressPlatby.errors.ExpressPlatbySignatureVerificationError);
assert(ExpressPlatby.errors.ExpressPlatbyIdempotencyError);
assert(ExpressPlatby.errors.ExpressPlatbyInvalidGrantError);
assert(ExpressPlatby.errors.ExpressPlatbyUnknownError);

assert(ExpressPlatby.ExpressPlatbyResource);
assert(ExpressPlatby.ExpressPlatbyResource.method);
assert(ExpressPlatby.ExpressPlatbyResource.extend);
assert(ExpressPlatby.ExpressPlatbyResource.MAX_BUFFERED_REQUEST_METRICS);

assert(ExpressPlatby.webhooks);
assert(ExpressPlatby.resources);

const expressPlatby = new ExpressPlatby(process.argv[2], {
    host: process.env.EXPRESSPLATBY_MOCK_HOST || 'localhost',
    port: process.env.EXPRESSPLATBY_MOCK_PORT || 12111,
    protocol: 'http',
});
const defaultExpressPlatby = new DefaultExpressPlatby(process.argv[2], {
    host: process.env.EXPRESSPLATBY_MOCK_HOST || 'localhost',
    port: process.env.EXPRESSPLATBY_MOCK_PORT || 12111,
    protocol: 'http',
});

assert(expressPlatby._platformFunctions);
assert(expressPlatby._api);
assert(expressPlatby._enableTelemetry);
assert(expressPlatby._prevRequestMetrics);
assert(expressPlatby._requestSender);
assert(expressPlatby.VERSION);
assert(expressPlatby.errors);
assert(expressPlatby.webhookEndpoints);
assert(expressPlatby.webhooks);
assert(expressPlatby._emitter);
assert(expressPlatby.on);
assert(expressPlatby.off);
assert(expressPlatby.once);

try {
    throw new expressPlatby.errors.ExpressPlatbyError({
        charge: 'foo',
        unknown_prop: 'bar',
    });
} catch (e) {
    if (e instanceof expressPlatby.errors.ExpressPlatbyError) {
        console.log('Caught ExpressPlatbyError');
    } else {
        throw e;
    }
}

async function exampleFunction(args) {
    try {
        await expressPlatby.paymentIntents.create(args);
    } catch (e) {
        if (
            e instanceof expressPlatby.errors.ExpressPlatbyInvalidRequestError
        ) {
            console.log('Caught ExpressPlatbyInvalidRequestError');
        } else {
            throw e;
        }
    }
}

exampleFunction({
    // The required parameter currency is missing
    amount: 2000,
    confirm: true,
    payment_method: 'pm_card_visa',
});
