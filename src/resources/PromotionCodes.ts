// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const PromotionCodes = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/promotion_codes',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/promotion_codes/{promotion_code}',
  }),

  update: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/promotion_codes/{promotion_code}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/promotion_codes',
    methodType: 'list',
  }),
});
