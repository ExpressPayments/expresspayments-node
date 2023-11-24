import DefaultExpressPayments, {ExpressPayments} from 'expresspayments';
import assert from 'assert';

assert(ExpressPayments.PACKAGE_VERSION);
assert(ExpressPayments.USER_AGENT);

assert(ExpressPayments.HttpClient);
assert(ExpressPayments.HttpClient.CONNECTION_CLOSED_ERROR_CODES);
assert(ExpressPayments.HttpClient.TIMEOUT_ERROR_CODE);
assert(ExpressPayments.HttpClient.makeTimeoutError);

assert(ExpressPayments.HttpClientResponse);
assert(ExpressPayments.createFetchHttpClient);
assert(ExpressPayments.createNodeHttpClient);

assert(ExpressPayments.CryptoProvider);
assert(ExpressPayments.createNodeCryptoProvider);
assert(ExpressPayments.createSubtleCryptoProvider);

assert(ExpressPayments.errors);
assert(ExpressPayments.errors.generate);
assert(ExpressPayments.errors.ExpressPaymentsError);
assert(ExpressPayments.errors.ExpressPaymentsCardError);
assert(ExpressPayments.errors.ExpressPaymentsInvalidRequestError);
assert(ExpressPayments.errors.ExpressPaymentsAPIError);
assert(ExpressPayments.errors.ExpressPaymentsAuthenticationError);
assert(ExpressPayments.errors.ExpressPaymentsPermissionError);
assert(ExpressPayments.errors.ExpressPaymentsRateLimitError);
assert(ExpressPayments.errors.ExpressPaymentsConnectionError);
assert(ExpressPayments.errors.ExpressPaymentsSignatureVerificationError);
assert(ExpressPayments.errors.ExpressPaymentsIdempotencyError);
assert(ExpressPayments.errors.ExpressPaymentsInvalidGrantError);
assert(ExpressPayments.errors.ExpressPaymentsUnknownError);

assert(ExpressPayments.ExpressPaymentsResource);
assert(ExpressPayments.ExpressPaymentsResource.method);
assert(ExpressPayments.ExpressPaymentsResource.extend);
assert(ExpressPayments.ExpressPaymentsResource.MAX_BUFFERED_REQUEST_METRICS);

assert(ExpressPayments.webhooks);
assert(ExpressPayments.resources);

const expressPayments = new ExpressPayments(process.argv[2], {
    host: process.env.EP_MOCK_HOST || 'localhost',
    port: process.env.EP_MOCK_PORT || 12111,
    protocol: 'http',
});
const defaultExpressPayments = new DefaultExpressPayments(process.argv[2], {
    host: process.env.EP_MOCK_HOST || 'localhost',
    port: process.env.EP_MOCK_PORT || 12111,
    protocol: 'http',
});

assert(expressPayments._platformFunctions);
assert(expressPayments._api);
assert(expressPayments._enableTelemetry);
assert(expressPayments._prevRequestMetrics);
assert(expressPayments._requestSender);
assert(expressPayments.VERSION);
assert(expressPayments.errors);
assert(expressPayments.webhookEndpoints);
assert(expressPayments.webhooks);
assert(expressPayments._emitter);
assert(expressPayments.on);
assert(expressPayments.off);
assert(expressPayments.once);

try {
    throw new expressPayments.errors.ExpressPaymentsError({
        charge: 'foo',
        unknown_prop: 'bar',
    });
} catch (e) {
    if (e instanceof expressPayments.errors.ExpressPaymentsError) {
        console.log('Caught ExpressPaymentsError');
    } else {
        throw e;
    }
}

async function exampleFunction(args) {
    try {
        await expressPayments.paymentIntents.create(args);
    } catch (e) {
        if (
            e instanceof expressPayments.errors.ExpressPaymentsInvalidRequestError
        ) {
            console.log('Caught ExpressPaymentsInvalidRequestError');
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
