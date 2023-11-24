// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const Readers = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/terminal/readers',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/terminal/readers/{reader}',
    }),

    update: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/terminal/readers/{reader}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/terminal/readers',
        methodType: 'list',
    }),

    del: expressPaymentsMethod({
        method: 'DELETE',
        fullPath: '/v1/terminal/readers/{reader}',
    }),

    cancelAction: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/terminal/readers/{reader}/cancel_action',
    }),

    processPaymentIntent: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/terminal/readers/{reader}/process_payment_intent',
    }),

    processSetupIntent: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/terminal/readers/{reader}/process_setup_intent',
    }),

    refundPayment: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/terminal/readers/{reader}/refund_payment',
    }),

    setReaderDisplay: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/terminal/readers/{reader}/set_reader_display',
    }),
});
