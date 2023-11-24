// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const ReceivedDebits = ExpressPaymentsResource.extend({
    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/treasury/received_debits/{id}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/treasury/received_debits',
        methodType: 'list',
    }),
});
