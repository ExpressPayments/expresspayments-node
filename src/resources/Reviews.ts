// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const Reviews = ExpressPaymentsResource.extend({
    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/reviews/{review}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/reviews',
        methodType: 'list',
    }),

    approve: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/reviews/{review}/approve',
    }),
});
