// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const SetupAttempts = ExpressPlatbyResource.extend({
  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/setup_attempts',
    methodType: 'list',
  }),
});
