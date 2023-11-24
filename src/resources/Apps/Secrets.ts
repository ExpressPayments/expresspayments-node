// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const Secrets = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/apps/secrets',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/apps/secrets',
        methodType: 'list',
    }),

    deleteWhere: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/apps/secrets/delete',
    }),

    find: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/apps/secrets/find',
    }),
});
