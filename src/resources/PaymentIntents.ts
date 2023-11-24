// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../ExpressPaymentsResource';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const PaymentIntents = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/payment_intents',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/payment_intents/{intent}',
    }),

    update: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/payment_intents/{intent}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/payment_intents',
        methodType: 'list',
    }),

    applyCustomerBalance: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/payment_intents/{intent}/apply_customer_balance',
    }),

    cancel: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/payment_intents/{intent}/cancel',
    }),

    capture: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/payment_intents/{intent}/capture',
    }),

    confirm: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/payment_intents/{intent}/confirm',
    }),

    incrementAuthorization: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/payment_intents/{intent}/increment_authorization',
    }),

    search: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/payment_intents/search',
        methodType: 'search',
    }),

    verifyMicrodeposits: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/payment_intents/{intent}/verify_microdeposits',
    }),
});
