import DefaultExpressPayments, {ExpressPayments} from 'expresspayments';

const expressPayments = new ExpressPayments(process.argv[2], {
    apiVersion: '2023-11-01',
    host: process.env.EP_MOCK_HOST || 'localhost',
    port: process.env.EP_MOCK_PORT || 12111,
    protocol: 'http',
});
const defaultExpressPayments = new DefaultExpressPayments(process.argv[2], {
    apiVersion: '2023-11-01',
    host: process.env.EP_MOCK_HOST || 'localhost',
    port: process.env.EP_MOCK_PORT || 12111,
    protocol: 'http',
});

try {
    throw new expressPayments.errors.ExpressPaymentsError({
        charge: 'foo',
        unknown_prop: 'bar',
    } as any);
} catch (e) {
    if (e instanceof expressPayments.errors.ExpressPaymentsError) {
        console.log('Caught ExpressPaymentsError');
    } else {
        throw e;
    }
}

async function exampleFunction(
    args: ExpressPayments.PaymentIntentCreateParams
) {
    try {
        const pi: ExpressPayments.PaymentIntent = await expressPayments.paymentIntents.create(
            args
        );
    } catch (e) {
        if (
            e instanceof
            expressPayments.errors.ExpressPaymentsInvalidRequestError
        ) {
            console.log('Caught ExpressPaymentsInvalidRequestError');
        } else {
            throw e;
        }
    }
}

exampleFunction({
    currency: 'usd',
    amount: 2000,
    confirm: true,
    payment_method: 'pm_card_visa',
});
