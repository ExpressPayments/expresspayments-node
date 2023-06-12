// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const Sources = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/sources',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/sources/{source}',
  }),

  update: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/sources/{source}',
  }),

  listSourceTransactions: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/sources/{source}/source_transactions',
    methodType: 'list',
  }),

  verify: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/sources/{source}/verify',
  }),
});
