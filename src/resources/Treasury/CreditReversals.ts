// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const CreditReversals = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/treasury/credit_reversals',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/treasury/credit_reversals/{credit_reversal}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/treasury/credit_reversals',
        methodType: 'list',
    }),
});
