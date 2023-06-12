// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const SubscriptionSchedules = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/subscription_schedules',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/subscription_schedules/{schedule}',
  }),

  update: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/subscription_schedules/{schedule}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/subscription_schedules',
    methodType: 'list',
  }),

  cancel: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/subscription_schedules/{schedule}/cancel',
  }),

  release: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/subscription_schedules/{schedule}/release',
  }),
});
