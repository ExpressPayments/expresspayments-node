// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const InboundTransfers = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/treasury/inbound_transfers',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/treasury/inbound_transfers/{id}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/treasury/inbound_transfers',
    methodType: 'list',
  }),

  cancel: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/treasury/inbound_transfers/{inbound_transfer}/cancel',
  }),
});
