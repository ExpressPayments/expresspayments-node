// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../../../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const OutboundTransfers = ExpressPaymentsResource.extend({
    fail: expressPaymentsMethod({
        method: 'POST',
        fullPath:
            '/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/fail',
    }),

    post: expressPaymentsMethod({
        method: 'POST',
        fullPath:
            '/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/post',
    }),

    returnOutboundTransfer: expressPaymentsMethod({
        method: 'POST',
        fullPath:
            '/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/return',
    }),
});
