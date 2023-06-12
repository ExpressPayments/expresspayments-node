// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const Reviews = ExpressPlatbyResource.extend({
  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/reviews/{review}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/reviews',
    methodType: 'list',
  }),

  approve: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/reviews/{review}/approve',
  }),
});
