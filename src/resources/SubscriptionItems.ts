// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const SubscriptionItems = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/subscription_items',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/subscription_items/{item}',
  }),

  update: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/subscription_items/{item}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/subscription_items',
    methodType: 'list',
  }),

  del: expressPlatbyMethod({
    method: 'DELETE',
    fullPath: '/v1/subscription_items/{item}',
  }),

  createUsageRecord: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/subscription_items/{subscription_item}/usage_records',
  }),

  listUsageRecordSummaries: expressPlatbyMethod({
    method: 'GET',
    fullPath:
      '/v1/subscription_items/{subscription_item}/usage_record_summaries',
    methodType: 'list',
  }),
});
