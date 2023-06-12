// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const PaymentMethods = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/payment_methods',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/payment_methods/{payment_method}',
  }),

  update: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/payment_methods/{payment_method}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/payment_methods',
    methodType: 'list',
  }),

  attach: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/payment_methods/{payment_method}/attach',
  }),

  detach: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/payment_methods/{payment_method}/detach',
  }),
});
