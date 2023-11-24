// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const Transactions = ExpressPaymentsResource.extend({
    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/tax/transactions/{transaction}',
    }),

    createFromCalculation: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/tax/transactions/create_from_calculation',
    }),

    createReversal: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/tax/transactions/create_reversal',
    }),

    listLineItems: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/tax/transactions/{transaction}/line_items',
        methodType: 'list',
    }),
});
