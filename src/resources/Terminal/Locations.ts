// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const Locations = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/terminal/locations',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/terminal/locations/{location}',
  }),

  update: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/terminal/locations/{location}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/terminal/locations',
    methodType: 'list',
  }),

  del: expressPlatbyMethod({
    method: 'DELETE',
    fullPath: '/v1/terminal/locations/{location}',
  }),
});
