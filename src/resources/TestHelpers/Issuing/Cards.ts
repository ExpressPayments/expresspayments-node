// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../../../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const Cards = ExpressPlatbyResource.extend({
  deliverCard: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/issuing/cards/{card}/shipping/deliver',
  }),

  failCard: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/issuing/cards/{card}/shipping/fail',
  }),

  returnCard: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/issuing/cards/{card}/shipping/return',
  }),

  shipCard: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/issuing/cards/{card}/shipping/ship',
  }),
});
