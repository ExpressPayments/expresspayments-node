// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../../ExpressPaymentsResource.js';
const expressPaymentsMethod = ExpressPaymentsResource.method;

export const ValueListItems = ExpressPaymentsResource.extend({
  create: expressPaymentsMethod({
    method: 'POST',
    fullPath: '/v1/radar/value_list_items',
  }),

  retrieve: expressPaymentsMethod({
    method: 'GET',
    fullPath: '/v1/radar/value_list_items/{item}',
  }),

  list: expressPaymentsMethod({
    method: 'GET',
    fullPath: '/v1/radar/value_list_items',
    methodType: 'list',
  }),

  del: expressPaymentsMethod({
    method: 'DELETE',
    fullPath: '/v1/radar/value_list_items/{item}',
  }),
});
