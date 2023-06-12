// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../ExpressPlatbyResource.js';

const expressPlatbyMethod = ExpressPlatbyResource.method;

export const TaxCodes = ExpressPlatbyResource.extend({
    retrieve: expressPlatbyMethod({
        method: 'GET',
        fullPath: '/v1/tax_codes/{id}',
    }),

    list: expressPlatbyMethod({
        method: 'GET',
        fullPath: '/v1/tax_codes',
        methodType: 'list',
    }),
});
