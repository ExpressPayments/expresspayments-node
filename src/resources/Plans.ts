// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../ExpressPaymentsResource';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const Plans = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/plans',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/plans/{plan}',
    }),

    update: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/plans/{plan}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/plans',
        methodType: 'list',
    }),

    del: expressPaymentsMethod({
        method: 'DELETE',
        fullPath: '/v1/plans/{plan}',
    }),
});
