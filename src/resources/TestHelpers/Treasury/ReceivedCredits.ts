// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../../../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const ReceivedCredits = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/treasury/received_credits',
  }),
});
