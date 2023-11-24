// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const SetupAttempts = ExpressPaymentsResource.extend({
    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/setup_attempts',
        methodType: 'list',
    }),
});
