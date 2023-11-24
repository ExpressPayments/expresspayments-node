// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const CountrySpecs = ExpressPaymentsResource.extend({
    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/country_specs/{country}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/country_specs',
        methodType: 'list',
    }),
});
