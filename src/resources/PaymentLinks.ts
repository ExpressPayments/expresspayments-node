// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const PaymentLinks = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/payment_links',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/payment_links/{payment_link}',
    }),

    update: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/payment_links/{payment_link}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/payment_links',
        methodType: 'list',
    }),

    listLineItems: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/payment_links/{payment_link}/line_items',
        methodType: 'list',
    }),
});
