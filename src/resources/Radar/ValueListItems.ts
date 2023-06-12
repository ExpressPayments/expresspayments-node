// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const ValueListItems = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/radar/value_list_items',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/radar/value_list_items/{item}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/radar/value_list_items',
    methodType: 'list',
  }),

  del: expressPlatbyMethod({
    method: 'DELETE',
    fullPath: '/v1/radar/value_list_items/{item}',
  }),
});
