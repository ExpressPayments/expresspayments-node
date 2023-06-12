// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../ExpressPlatbyResource.js';

const expressPlatbyMethod = ExpressPlatbyResource.method;

export const Transfers = ExpressPlatbyResource.extend({
    create: expressPlatbyMethod({
        method: 'POST',
        fullPath: '/v1/transfers',
    }),

    retrieve: expressPlatbyMethod({
        method: 'GET',
        fullPath: '/v1/transfers/{transfer}',
    }),

    update: expressPlatbyMethod({
        method: 'POST',
        fullPath: '/v1/transfers/{transfer}',
    }),

    list: expressPlatbyMethod({
        method: 'GET',
        fullPath: '/v1/transfers',
        methodType: 'list',
    }),

    createReversal: expressPlatbyMethod({
        method: 'POST',
        fullPath: '/v1/transfers/{id}/reversals',
    }),

    listReversals: expressPlatbyMethod({
        method: 'GET',
        fullPath: '/v1/transfers/{id}/reversals',
        methodType: 'list',
    }),

    retrieveReversal: expressPlatbyMethod({
        method: 'GET',
        fullPath: '/v1/transfers/{transfer}/reversals/{id}',
    }),

    updateReversal: expressPlatbyMethod({
        method: 'POST',
        fullPath: '/v1/transfers/{transfer}/reversals/{id}',
    }),
});
