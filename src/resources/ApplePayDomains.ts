// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const ApplePayDomains = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/apple_pay/domains',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/apple_pay/domains/{domain}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/apple_pay/domains',
    methodType: 'list',
  }),

  del: expressPlatbyMethod({
    method: 'DELETE',
    fullPath: '/v1/apple_pay/domains/{domain}',
  }),
});
