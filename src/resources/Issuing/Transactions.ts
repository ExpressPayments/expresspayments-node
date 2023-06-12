// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const Transactions = ExpressPlatbyResource.extend({
  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/issuing/transactions/{transaction}',
  }),

  update: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/issuing/transactions/{transaction}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/issuing/transactions',
    methodType: 'list',
  }),
});
