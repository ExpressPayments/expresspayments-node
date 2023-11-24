// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const ReceivedCredits = ExpressPaymentsResource.extend({
    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/treasury/received_credits/{id}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/treasury/received_credits',
        methodType: 'list',
    }),
});
