// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const ExchangeRates = ExpressPlatbyResource.extend({
  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/exchange_rates/{rate_id}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/exchange_rates',
    methodType: 'list',
  }),
});
