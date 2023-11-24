// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../../../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const ReceivedCredits = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/received_credits',
    }),
});
