// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const Cards = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/issuing/cards',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/issuing/cards/{card}',
  }),

  update: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/issuing/cards/{card}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/issuing/cards',
    methodType: 'list',
  }),
});
