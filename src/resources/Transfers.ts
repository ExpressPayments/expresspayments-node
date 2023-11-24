// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const Transfers = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/transfers',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/transfers/{transfer}',
    }),

    update: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/transfers/{transfer}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/transfers',
        methodType: 'list',
    }),

    createReversal: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/transfers/{id}/reversals',
    }),

    listReversals: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/transfers/{id}/reversals',
        methodType: 'list',
    }),

    retrieveReversal: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/transfers/{transfer}/reversals/{id}',
    }),

    updateReversal: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/transfers/{transfer}/reversals/{id}',
    }),
});
