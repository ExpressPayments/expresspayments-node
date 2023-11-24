// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const Locations = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/terminal/locations',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/terminal/locations/{location}',
    }),

    update: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/terminal/locations/{location}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/terminal/locations',
        methodType: 'list',
    }),

    del: expressPaymentsMethod({
        method: 'DELETE',
        fullPath: '/v1/terminal/locations/{location}',
    }),
});
