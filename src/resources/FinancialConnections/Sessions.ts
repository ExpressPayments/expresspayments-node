// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const Sessions = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/financial_connections/sessions',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/financial_connections/sessions/{session}',
  }),
});
