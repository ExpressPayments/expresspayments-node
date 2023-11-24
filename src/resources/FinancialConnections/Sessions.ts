// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const Sessions = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/financial_connections/sessions',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/financial_connections/sessions/{session}',
    }),
});
