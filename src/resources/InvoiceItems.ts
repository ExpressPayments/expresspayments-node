// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const InvoiceItems = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/invoiceitems',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/invoiceitems/{invoiceitem}',
  }),

  update: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/invoiceitems/{invoiceitem}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/invoiceitems',
    methodType: 'list',
  }),

  del: expressPlatbyMethod({
    method: 'DELETE',
    fullPath: '/v1/invoiceitems/{invoiceitem}',
  }),
});
