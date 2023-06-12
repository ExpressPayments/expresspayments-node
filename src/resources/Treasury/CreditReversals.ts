// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const CreditReversals = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/treasury/credit_reversals',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/treasury/credit_reversals/{credit_reversal}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/treasury/credit_reversals',
    methodType: 'list',
  }),
});
