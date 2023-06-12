// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const FinancialAccounts = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/treasury/financial_accounts',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/treasury/financial_accounts/{financial_account}',
  }),

  update: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/treasury/financial_accounts/{financial_account}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/treasury/financial_accounts',
    methodType: 'list',
  }),

  retrieveFeatures: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/treasury/financial_accounts/{financial_account}/features',
  }),

  updateFeatures: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/treasury/financial_accounts/{financial_account}/features',
  }),
});
