// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const Quotes = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/quotes',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/quotes/{quote}',
  }),

  update: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/quotes/{quote}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/quotes',
    methodType: 'list',
  }),

  accept: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/quotes/{quote}/accept',
  }),

  cancel: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/quotes/{quote}/cancel',
  }),

  finalizeQuote: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/quotes/{quote}/finalize',
  }),

  listComputedUpfrontLineItems: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/quotes/{quote}/computed_upfront_line_items',
    methodType: 'list',
  }),

  listLineItems: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/quotes/{quote}/line_items',
    methodType: 'list',
  }),

  pdf: expressPlatbyMethod({
    host: 'files.expressplatby.cz',
    method: 'GET',
    fullPath: '/v1/quotes/{quote}/pdf',
    streaming: true,
  }),
});
