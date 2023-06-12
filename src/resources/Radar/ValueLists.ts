// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const ValueLists = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/radar/value_lists',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/radar/value_lists/{value_list}',
  }),

  update: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/radar/value_lists/{value_list}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/radar/value_lists',
    methodType: 'list',
  }),

  del: expressPlatbyMethod({
    method: 'DELETE',
    fullPath: '/v1/radar/value_lists/{value_list}',
  }),
});
