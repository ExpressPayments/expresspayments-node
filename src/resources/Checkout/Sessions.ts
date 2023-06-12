// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const Sessions = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/checkout/sessions',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/checkout/sessions/{session}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/checkout/sessions',
    methodType: 'list',
  }),

  expire: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/checkout/sessions/{session}/expire',
  }),

  listLineItems: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/checkout/sessions/{session}/line_items',
    methodType: 'list',
  }),
});
