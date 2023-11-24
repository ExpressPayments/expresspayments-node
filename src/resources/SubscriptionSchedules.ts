// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../ExpressPaymentsResource';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const SubscriptionSchedules = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/subscription_schedules',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/subscription_schedules/{schedule}',
    }),

    update: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/subscription_schedules/{schedule}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/subscription_schedules',
        methodType: 'list',
    }),

    cancel: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/subscription_schedules/{schedule}/cancel',
    }),

    release: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/subscription_schedules/{schedule}/release',
    }),
});
