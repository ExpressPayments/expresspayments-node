// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const BalanceTransactions = ExpressPlatbyResource.extend({
  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/balance_transactions/{id}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/balance_transactions',
    methodType: 'list',
  }),
});
