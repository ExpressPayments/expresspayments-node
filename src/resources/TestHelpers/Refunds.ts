// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const Refunds = ExpressPaymentsResource.extend({
    expire: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/refunds/{refund}/expire',
    }),
});
