// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const Transactions = ExpressPaymentsResource.extend({
    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/treasury/transactions/{id}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/treasury/transactions',
        methodType: 'list',
    }),
});
