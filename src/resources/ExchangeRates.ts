// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const ExchangeRates = ExpressPaymentsResource.extend({
    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/exchange_rates/{rate_id}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/exchange_rates',
        methodType: 'list',
    }),
});
