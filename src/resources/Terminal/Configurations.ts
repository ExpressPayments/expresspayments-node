// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const Configurations = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/terminal/configurations',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/terminal/configurations/{configuration}',
  }),

  update: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/terminal/configurations/{configuration}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/terminal/configurations',
    methodType: 'list',
  }),

  del: expressPlatbyMethod({
    method: 'DELETE',
    fullPath: '/v1/terminal/configurations/{configuration}',
  }),
});
