// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const Payouts = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/payouts',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/payouts/{payout}',
  }),

  update: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/payouts/{payout}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/payouts',
    methodType: 'list',
  }),

  cancel: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/payouts/{payout}/cancel',
  }),

  reverse: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/payouts/{payout}/reverse',
  }),
});
