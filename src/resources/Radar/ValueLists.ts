// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const ValueLists = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/radar/value_lists',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/radar/value_lists/{value_list}',
    }),

    update: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/radar/value_lists/{value_list}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/radar/value_lists',
        methodType: 'list',
    }),

    del: expressPaymentsMethod({
        method: 'DELETE',
        fullPath: '/v1/radar/value_lists/{value_list}',
    }),
});
