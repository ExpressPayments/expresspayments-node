// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const OutboundPayments = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/treasury/outbound_payments',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/treasury/outbound_payments/{id}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/treasury/outbound_payments',
    methodType: 'list',
  }),

  cancel: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/treasury/outbound_payments/{id}/cancel',
  }),
});
