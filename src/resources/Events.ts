// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../ExpressPaymentsResource';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const Events = ExpressPaymentsResource.extend({
    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/events/{id}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/events',
        methodType: 'list',
    }),
});
