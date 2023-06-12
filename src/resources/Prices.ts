// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const Prices = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/prices',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/prices/{price}',
  }),

  update: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/prices/{price}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/prices',
    methodType: 'list',
  }),

  search: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/prices/search',
    methodType: 'search',
  }),
});
