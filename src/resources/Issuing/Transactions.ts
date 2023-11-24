// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const Transactions = ExpressPaymentsResource.extend({
    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/issuing/transactions/{transaction}',
    }),

    update: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/issuing/transactions/{transaction}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/issuing/transactions',
        methodType: 'list',
    }),
});
