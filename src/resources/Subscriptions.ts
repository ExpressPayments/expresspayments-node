// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../ExpressPaymentsResource';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const Subscriptions = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/subscriptions',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/subscriptions/{subscription_exposed_id}',
    }),

    update: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/subscriptions/{subscription_exposed_id}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/subscriptions',
        methodType: 'list',
    }),

    cancel: expressPaymentsMethod({
        method: 'DELETE',
        fullPath: '/v1/subscriptions/{subscription_exposed_id}',
    }),

    del: expressPaymentsMethod({
        method: 'DELETE',
        fullPath: '/v1/subscriptions/{subscription_exposed_id}',
    }),

    deleteDiscount: expressPaymentsMethod({
        method: 'DELETE',
        fullPath: '/v1/subscriptions/{subscription_exposed_id}/discount',
    }),

    resume: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/subscriptions/{subscription}/resume',
    }),

    search: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/subscriptions/search',
        methodType: 'search',
    }),
});
