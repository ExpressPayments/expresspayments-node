// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const Customers = ExpressPlatbyResource.extend({
  fundCashBalance: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/customers/{customer}/fund_cash_balance',
  }),
});
