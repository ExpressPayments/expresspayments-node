// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const ShippingRates = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/shipping_rates',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/shipping_rates/{shipping_rate_token}',
  }),

  update: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/shipping_rates/{shipping_rate_token}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/shipping_rates',
    methodType: 'list',
  }),
});
