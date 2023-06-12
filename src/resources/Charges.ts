// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const Charges = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/charges',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/charges/{charge}',
  }),

  update: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/charges/{charge}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/charges',
    methodType: 'list',
  }),

  capture: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/charges/{charge}/capture',
  }),

  search: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/charges/search',
    methodType: 'search',
  }),
});
