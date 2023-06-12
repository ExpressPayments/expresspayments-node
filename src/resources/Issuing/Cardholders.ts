// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const Cardholders = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/issuing/cardholders',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/issuing/cardholders/{cardholder}',
  }),

  update: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/issuing/cardholders/{cardholder}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/issuing/cardholders',
    methodType: 'list',
  }),
});
