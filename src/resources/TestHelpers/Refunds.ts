// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const Refunds = ExpressPlatbyResource.extend({
  expire: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/refunds/{refund}/expire',
  }),
});
