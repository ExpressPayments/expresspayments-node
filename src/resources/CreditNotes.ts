// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const CreditNotes = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/credit_notes',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/credit_notes/{id}',
  }),

  update: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/credit_notes/{id}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/credit_notes',
    methodType: 'list',
  }),

  listLineItems: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/credit_notes/{credit_note}/lines',
    methodType: 'list',
  }),

  listPreviewLineItems: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/credit_notes/preview/lines',
    methodType: 'list',
  }),

  preview: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/credit_notes/preview',
  }),

  voidCreditNote: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/credit_notes/{id}/void',
  }),
});
