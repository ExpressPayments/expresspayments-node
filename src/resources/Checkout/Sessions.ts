// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const Sessions = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/checkout/sessions',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/checkout/sessions/{session}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/checkout/sessions',
        methodType: 'list',
    }),

    expire: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/checkout/sessions/{session}/expire',
    }),

    listLineItems: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/checkout/sessions/{session}/line_items',
        methodType: 'list',
    }),
});
