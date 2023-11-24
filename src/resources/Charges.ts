// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../ExpressPaymentsResource';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const Charges = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/charges',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/charges/{charge}',
    }),

    update: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/charges/{charge}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/charges',
        methodType: 'list',
    }),

    capture: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/charges/{charge}/capture',
    }),

    search: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/charges/search',
        methodType: 'search',
    }),
});
