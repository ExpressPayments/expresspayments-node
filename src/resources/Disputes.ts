// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const Disputes = ExpressPlatbyResource.extend({
  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/disputes/{dispute}',
  }),

  update: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/disputes/{dispute}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/disputes',
    methodType: 'list',
  }),

  close: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/disputes/{dispute}/close',
  }),
});
