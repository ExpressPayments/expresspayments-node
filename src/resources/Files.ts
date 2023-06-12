// File generated from our OpenAPI spec

import {multipartRequestDataProcessor} from '../multipart.js';
import {ExpressPlatbyResource} from '../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const Files = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/files',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    host: 'files.expressplatby.cz',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/files/{file}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/files',
    methodType: 'list',
  }),

  requestDataProcessor: multipartRequestDataProcessor,
});
