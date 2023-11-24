// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../ExpressPaymentsResource';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const Tokens = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/tokens',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/tokens/{token}',
    }),
});
