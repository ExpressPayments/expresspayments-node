// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../ExpressPaymentsResource';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const ShippingRates = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/shipping_rates',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/shipping_rates/{shipping_rate_token}',
    }),

    update: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/shipping_rates/{shipping_rate_token}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/shipping_rates',
        methodType: 'list',
    }),
});
