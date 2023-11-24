// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const Mandates = ExpressPaymentsResource.extend({
    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/mandates/{mandate}',
    }),
});
