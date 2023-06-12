// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const VerificationSessions = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/identity/verification_sessions',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/identity/verification_sessions/{session}',
  }),

  update: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/identity/verification_sessions/{session}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/identity/verification_sessions',
    methodType: 'list',
  }),

  cancel: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/identity/verification_sessions/{session}/cancel',
  }),

  redact: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/identity/verification_sessions/{session}/redact',
  }),
});
