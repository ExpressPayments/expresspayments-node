// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const PaymentLinks = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/payment_links',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/payment_links/{payment_link}',
  }),

  update: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/payment_links/{payment_link}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/payment_links',
    methodType: 'list',
  }),

  listLineItems: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/payment_links/{payment_link}/line_items',
    methodType: 'list',
  }),
});
