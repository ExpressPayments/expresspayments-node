// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const Plans = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/plans',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/plans/{plan}',
  }),

  update: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/plans/{plan}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/plans',
    methodType: 'list',
  }),

  del: expressPlatbyMethod({
    method: 'DELETE',
    fullPath: '/v1/plans/{plan}',
  }),
});
