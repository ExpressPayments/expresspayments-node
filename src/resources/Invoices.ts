// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const Invoices = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/invoices',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/invoices/{invoice}',
  }),

  update: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/invoices/{invoice}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/invoices',
    methodType: 'list',
  }),

  del: expressPlatbyMethod({
    method: 'DELETE',
    fullPath: '/v1/invoices/{invoice}',
  }),

  finalizeInvoice: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/invoices/{invoice}/finalize',
  }),

  listLineItems: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/invoices/{invoice}/lines',
    methodType: 'list',
  }),

  listUpcomingLines: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/invoices/upcoming/lines',
    methodType: 'list',
  }),

  markUncollectible: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/invoices/{invoice}/mark_uncollectible',
  }),

  pay: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/invoices/{invoice}/pay',
  }),

  retrieveUpcoming: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/invoices/upcoming',
  }),

  search: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/invoices/search',
    methodType: 'search',
  }),

  sendInvoice: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/invoices/{invoice}/send',
  }),

  voidInvoice: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/invoices/{invoice}/void',
  }),
});
