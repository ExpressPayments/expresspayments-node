// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const FileLinks = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/file_links',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/file_links/{link}',
  }),

  update: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/file_links/{link}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/file_links',
    methodType: 'list',
  }),
});
