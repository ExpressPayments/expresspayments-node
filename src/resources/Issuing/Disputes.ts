// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const Disputes = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/issuing/disputes',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/issuing/disputes/{dispute}',
  }),

  update: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/issuing/disputes/{dispute}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/issuing/disputes',
    methodType: 'list',
  }),

  submit: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/issuing/disputes/{dispute}/submit',
  }),
});
