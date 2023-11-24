// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../ExpressPaymentsResource';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const Topups = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/topups',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/topups/{topup}',
    }),

    update: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/topups/{topup}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/topups',
        methodType: 'list',
    }),

    cancel: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/topups/{topup}/cancel',
    }),
});
