// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const TestClocks = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/test_clocks',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/test_helpers/test_clocks/{test_clock}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/test_helpers/test_clocks',
    methodType: 'list',
  }),

  del: expressPlatbyMethod({
    method: 'DELETE',
    fullPath: '/v1/test_helpers/test_clocks/{test_clock}',
  }),

  advance: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/test_clocks/{test_clock}/advance',
  }),
});
