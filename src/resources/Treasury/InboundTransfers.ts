// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const InboundTransfers = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/treasury/inbound_transfers',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/treasury/inbound_transfers/{id}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/treasury/inbound_transfers',
        methodType: 'list',
    }),

    cancel: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/treasury/inbound_transfers/{inbound_transfer}/cancel',
    }),
});
