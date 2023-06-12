// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const ReceivedDebits = ExpressPlatbyResource.extend({
  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/treasury/received_debits/{id}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/treasury/received_debits',
    methodType: 'list',
  }),
});
