// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const DebitReversals = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/treasury/debit_reversals',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/treasury/debit_reversals/{debit_reversal}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/treasury/debit_reversals',
        methodType: 'list',
    }),
});
