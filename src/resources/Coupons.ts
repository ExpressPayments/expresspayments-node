// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../ExpressPlatbyResource.js';

const expressPlatbyMethod = ExpressPlatbyResource.method;

export const Coupons = ExpressPlatbyResource.extend({
    create: expressPlatbyMethod({
        method: 'POST',
        fullPath: '/v1/coupons',
    }),

    retrieve: expressPlatbyMethod({
        method: 'GET',
        fullPath: '/v1/coupons/{coupon}',
    }),

    update: expressPlatbyMethod({
        method: 'POST',
        fullPath: '/v1/coupons/{coupon}',
    }),

    list: expressPlatbyMethod({
        method: 'GET',
        fullPath: '/v1/coupons',
        methodType: 'list',
    }),

    del: expressPlatbyMethod({
        method: 'DELETE',
        fullPath: '/v1/coupons/{coupon}',
    }),
});
