import DefaultExpressPlatby, {ExpressPlatby} from 'expressplatby';

const expressPlatby = new ExpressPlatby(process.argv[2], {
    apiVersion: '2023-06-01',
    host: process.env.EXPRESSPLATBY_MOCK_HOST || 'localhost',
    port: process.env.EXPRESSPLATBY_MOCK_PORT || 12111,
    protocol: 'http',
});
const defaultExpressPlatby = new DefaultExpressPlatby(process.argv[2], {
    apiVersion: '2023-06-01',
    host: process.env.EXPRESSPLATBY_MOCK_HOST || 'localhost',
    port: process.env.EXPRESSPLATBY_MOCK_PORT || 12111,
    protocol: 'http',
});

try {
    throw new expressPlatby.errors.ExpressPlatbyError({
        charge: 'foo',
        unknown_prop: 'bar',
    } as any);
} catch (e) {
    if (e instanceof expressPlatby.errors.ExpressPlatbyError) {
        console.log('Caught ExpressPlatbyError');
    } else {
        throw e;
    }
}

async function exampleFunction(args: ExpressPlatby.PaymentIntentCreateParams) {
    try {
        const pi: ExpressPlatby.PaymentIntent = await expressPlatby.paymentIntents.create(
            args
        );
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
    currency: 'usd',
    amount: 2000,
    confirm: true,
    payment_method: 'pm_card_visa',
});
