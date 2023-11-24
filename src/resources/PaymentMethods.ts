// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const PaymentMethods = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/payment_methods',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/payment_methods/{payment_method}',
    }),

    update: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/payment_methods/{payment_method}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/payment_methods',
        methodType: 'list',
    }),

    attach: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/payment_methods/{payment_method}/attach',
    }),

    detach: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/payment_methods/{payment_method}/detach',
    }),
});
