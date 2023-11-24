// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../../../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const InboundTransfers = ExpressPaymentsResource.extend({
    fail: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/inbound_transfers/{id}/fail',
    }),

    returnInboundTransfer: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/inbound_transfers/{id}/return',
    }),

    succeed: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/inbound_transfers/{id}/succeed',
    }),
});
