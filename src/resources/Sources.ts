// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const Sources = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/sources',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/sources/{source}',
    }),

    update: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/sources/{source}',
    }),

    listSourceTransactions: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/sources/{source}/source_transactions',
        methodType: 'list',
    }),

    verify: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/sources/{source}/verify',
    }),
});
