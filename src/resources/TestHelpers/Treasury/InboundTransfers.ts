// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../../../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const InboundTransfers = ExpressPlatbyResource.extend({
  fail: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/treasury/inbound_transfers/{id}/fail',
  }),

  returnInboundTransfer: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/treasury/inbound_transfers/{id}/return',
  }),

  succeed: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/treasury/inbound_transfers/{id}/succeed',
  }),
});
