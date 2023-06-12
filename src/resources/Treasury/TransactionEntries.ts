// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const TransactionEntries = ExpressPlatbyResource.extend({
  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/treasury/transaction_entries/{id}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/treasury/transaction_entries',
    methodType: 'list',
  }),
});
