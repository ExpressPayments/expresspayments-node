// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const Transactions = ExpressPlatbyResource.extend({
  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/tax/transactions/{transaction}',
  }),

  createFromCalculation: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/tax/transactions/create_from_calculation',
  }),

  createReversal: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/tax/transactions/create_reversal',
  }),

  listLineItems: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/tax/transactions/{transaction}/line_items',
    methodType: 'list',
  }),
});
