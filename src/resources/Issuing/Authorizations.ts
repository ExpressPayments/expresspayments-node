// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const Authorizations = ExpressPlatbyResource.extend({
  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/issuing/authorizations/{authorization}',
  }),

  update: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/issuing/authorizations/{authorization}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/issuing/authorizations',
    methodType: 'list',
  }),

  approve: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/issuing/authorizations/{authorization}/approve',
  }),

  decline: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/issuing/authorizations/{authorization}/decline',
  }),
});
