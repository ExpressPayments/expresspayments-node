// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../../../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const OutboundPayments = ExpressPlatbyResource.extend({
  fail: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/treasury/outbound_payments/{id}/fail',
  }),

  post: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/treasury/outbound_payments/{id}/post',
  }),

  returnOutboundPayment: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/treasury/outbound_payments/{id}/return',
  }),
});
