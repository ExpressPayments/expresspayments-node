// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../ExpressPaymentsResource';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const Refunds = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/refunds',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/refunds/{refund}',
    }),

    update: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/refunds/{refund}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/refunds',
        methodType: 'list',
    }),

    cancel: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/refunds/{refund}/cancel',
    }),
});
