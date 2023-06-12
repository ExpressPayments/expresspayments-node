// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const Subscriptions = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/subscriptions',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/subscriptions/{subscription_exposed_id}',
  }),

  update: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/subscriptions/{subscription_exposed_id}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/subscriptions',
    methodType: 'list',
  }),

  cancel: expressPlatbyMethod({
    method: 'DELETE',
    fullPath: '/v1/subscriptions/{subscription_exposed_id}',
  }),

  del: expressPlatbyMethod({
    method: 'DELETE',
    fullPath: '/v1/subscriptions/{subscription_exposed_id}',
  }),

  deleteDiscount: expressPlatbyMethod({
    method: 'DELETE',
    fullPath: '/v1/subscriptions/{subscription_exposed_id}/discount',
  }),

  resume: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/subscriptions/{subscription}/resume',
  }),

  search: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/subscriptions/search',
    methodType: 'search',
  }),
});
