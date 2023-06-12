// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const WebhookEndpoints = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/webhook_endpoints',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/webhook_endpoints/{webhook_endpoint}',
  }),

  update: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/webhook_endpoints/{webhook_endpoint}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/webhook_endpoints',
    methodType: 'list',
  }),

  del: expressPlatbyMethod({
    method: 'DELETE',
    fullPath: '/v1/webhook_endpoints/{webhook_endpoint}',
  }),
});
