// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../ExpressPaymentsResource';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const BalanceTransactions = ExpressPaymentsResource.extend({
    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/balance_transactions/{id}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/balance_transactions',
        methodType: 'list',
    }),
});
