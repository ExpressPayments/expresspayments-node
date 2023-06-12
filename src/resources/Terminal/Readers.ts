// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const Readers = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/terminal/readers',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/terminal/readers/{reader}',
  }),

  update: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/terminal/readers/{reader}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/terminal/readers',
    methodType: 'list',
  }),

  del: expressPlatbyMethod({
    method: 'DELETE',
    fullPath: '/v1/terminal/readers/{reader}',
  }),

  cancelAction: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/terminal/readers/{reader}/cancel_action',
  }),

  processPaymentIntent: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/terminal/readers/{reader}/process_payment_intent',
  }),

  processSetupIntent: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/terminal/readers/{reader}/process_setup_intent',
  }),

  refundPayment: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/terminal/readers/{reader}/refund_payment',
  }),

  setReaderDisplay: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/terminal/readers/{reader}/set_reader_display',
  }),
});
