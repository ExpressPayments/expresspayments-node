// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const Coupons = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/coupons',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/coupons/{coupon}',
    }),

    update: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/coupons/{coupon}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/coupons',
        methodType: 'list',
    }),

    del: expressPaymentsMethod({
        method: 'DELETE',
        fullPath: '/v1/coupons/{coupon}',
    }),
});
