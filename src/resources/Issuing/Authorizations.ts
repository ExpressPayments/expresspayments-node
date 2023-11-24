// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const Authorizations = ExpressPaymentsResource.extend({
    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/issuing/authorizations/{authorization}',
    }),

    update: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/issuing/authorizations/{authorization}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/issuing/authorizations',
        methodType: 'list',
    }),

    approve: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/issuing/authorizations/{authorization}/approve',
    }),

    decline: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/issuing/authorizations/{authorization}/decline',
    }),
});
