// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../../../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const Readers = ExpressPlatbyResource.extend({
  presentPaymentMethod: expressPlatbyMethod({
    method: 'POST',
    fullPath:
      '/v1/test_helpers/terminal/readers/{reader}/present_payment_method',
  }),
});
