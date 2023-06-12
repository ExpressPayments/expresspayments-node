// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const DebitReversals = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/treasury/debit_reversals',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/treasury/debit_reversals/{debit_reversal}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/treasury/debit_reversals',
    methodType: 'list',
  }),
});
