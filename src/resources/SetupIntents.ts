// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const SetupIntents = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/setup_intents',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/setup_intents/{intent}',
  }),

  update: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/setup_intents/{intent}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/setup_intents',
    methodType: 'list',
  }),

  cancel: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/setup_intents/{intent}/cancel',
  }),

  confirm: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/setup_intents/{intent}/confirm',
  }),

  verifyMicrodeposits: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/setup_intents/{intent}/verify_microdeposits',
  }),
});
