// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const Events = ExpressPlatbyResource.extend({
  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/events/{id}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/events',
    methodType: 'list',
  }),
});
