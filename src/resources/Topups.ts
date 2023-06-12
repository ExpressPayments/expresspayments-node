// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const Topups = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/topups',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/topups/{topup}',
  }),

  update: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/topups/{topup}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/topups',
    methodType: 'list',
  }),

  cancel: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/topups/{topup}/cancel',
  }),
});
