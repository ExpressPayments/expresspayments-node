// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const Configurations = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/terminal/configurations',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/terminal/configurations/{configuration}',
    }),

    update: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/terminal/configurations/{configuration}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/terminal/configurations',
        methodType: 'list',
    }),

    del: expressPaymentsMethod({
        method: 'DELETE',
        fullPath: '/v1/terminal/configurations/{configuration}',
    }),
});
