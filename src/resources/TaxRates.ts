// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const TaxRates = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/tax_rates',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/tax_rates/{tax_rate}',
  }),

  update: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/tax_rates/{tax_rate}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/tax_rates',
    methodType: 'list',
  }),
});
