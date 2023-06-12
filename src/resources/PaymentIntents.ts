// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const PaymentIntents = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/payment_intents',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/payment_intents/{intent}',
  }),

  update: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/payment_intents/{intent}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/payment_intents',
    methodType: 'list',
  }),

  applyCustomerBalance: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/payment_intents/{intent}/apply_customer_balance',
  }),

  cancel: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/payment_intents/{intent}/cancel',
  }),

  capture: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/payment_intents/{intent}/capture',
  }),

  confirm: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/payment_intents/{intent}/confirm',
  }),

  incrementAuthorization: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/payment_intents/{intent}/increment_authorization',
  }),

  search: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/payment_intents/search',
    methodType: 'search',
  }),

  verifyMicrodeposits: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/payment_intents/{intent}/verify_microdeposits',
  }),
});
