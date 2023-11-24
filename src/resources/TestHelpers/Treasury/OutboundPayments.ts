// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../../../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const OutboundPayments = ExpressPaymentsResource.extend({
    fail: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/outbound_payments/{id}/fail',
    }),

    post: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/outbound_payments/{id}/post',
    }),

    returnOutboundPayment: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/outbound_payments/{id}/return',
    }),
});
