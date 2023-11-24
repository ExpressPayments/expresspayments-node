// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../ExpressPaymentsResource';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const Prices = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/prices',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/prices/{price}',
    }),

    update: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/prices/{price}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/prices',
        methodType: 'list',
    }),

    search: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/prices/search',
        methodType: 'search',
    }),
});
