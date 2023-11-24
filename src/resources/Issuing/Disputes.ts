// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const Disputes = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/issuing/disputes',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/issuing/disputes/{dispute}',
    }),

    update: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/issuing/disputes/{dispute}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/issuing/disputes',
        methodType: 'list',
    }),

    submit: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/issuing/disputes/{dispute}/submit',
    }),
});
