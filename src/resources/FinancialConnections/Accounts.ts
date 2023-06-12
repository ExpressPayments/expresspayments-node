// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const Accounts = ExpressPlatbyResource.extend({
  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/financial_connections/accounts/{account}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/financial_connections/accounts',
    methodType: 'list',
  }),

  disconnect: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/financial_connections/accounts/{account}/disconnect',
  }),

  listOwners: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/financial_connections/accounts/{account}/owners',
    methodType: 'list',
  }),

  refresh: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/financial_connections/accounts/{account}/refresh',
  }),
});
