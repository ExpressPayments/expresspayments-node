// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const VerificationReports = ExpressPlatbyResource.extend({
  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/identity/verification_reports/{report}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/identity/verification_reports',
    methodType: 'list',
  }),
});
