// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const TaxRates = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/tax_rates',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/tax_rates/{tax_rate}',
    }),

    update: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/tax_rates/{tax_rate}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/tax_rates',
        methodType: 'list',
    }),
});
