// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const Configurations = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/billing_portal/configurations',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/billing_portal/configurations/{configuration}',
  }),

  update: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/billing_portal/configurations/{configuration}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/billing_portal/configurations',
    methodType: 'list',
  }),
});
