// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const EarlyFraudWarnings = ExpressPlatbyResource.extend({
  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/radar/early_fraud_warnings/{early_fraud_warning}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/radar/early_fraud_warnings',
    methodType: 'list',
  }),
});
