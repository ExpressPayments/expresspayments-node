// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../ExpressPaymentsResource';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const Disputes = ExpressPaymentsResource.extend({
    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/disputes/{dispute}',
    }),

    update: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/disputes/{dispute}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/disputes',
        methodType: 'list',
    }),

    close: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/disputes/{dispute}/close',
    }),
});
