// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../ExpressPaymentsResource';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const SubscriptionItems = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/subscription_items',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/subscription_items/{item}',
    }),

    update: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/subscription_items/{item}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/subscription_items',
        methodType: 'list',
    }),

    del: expressPaymentsMethod({
        method: 'DELETE',
        fullPath: '/v1/subscription_items/{item}',
    }),

    createUsageRecord: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/subscription_items/{subscription_item}/usage_records',
    }),

    listUsageRecordSummaries: expressPaymentsMethod({
        method: 'GET',
        fullPath:
            '/v1/subscription_items/{subscription_item}/usage_record_summaries',
        methodType: 'list',
    }),
});
