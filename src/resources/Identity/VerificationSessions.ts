// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const VerificationSessions = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/identity/verification_sessions',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/identity/verification_sessions/{session}',
    }),

    update: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/identity/verification_sessions/{session}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/identity/verification_sessions',
        methodType: 'list',
    }),

    cancel: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/identity/verification_sessions/{session}/cancel',
    }),

    redact: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/identity/verification_sessions/{session}/redact',
    }),
});
