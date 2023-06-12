// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const Refunds = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/refunds',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/refunds/{refund}',
  }),

  update: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/refunds/{refund}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/refunds',
    methodType: 'list',
  }),

  cancel: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/refunds/{refund}/cancel',
  }),
});
