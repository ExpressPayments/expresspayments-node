// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../../../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const OutboundTransfers = ExpressPlatbyResource.extend({
  fail: expressPlatbyMethod({
    method: 'POST',
    fullPath:
      '/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/fail',
  }),

  post: expressPlatbyMethod({
    method: 'POST',
    fullPath:
      '/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/post',
  }),

  returnOutboundTransfer: expressPlatbyMethod({
    method: 'POST',
    fullPath:
      '/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/return',
  }),
});
