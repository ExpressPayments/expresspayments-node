// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../ExpressPaymentsResource';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const WebhookEndpoints = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/webhook_endpoints',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/webhook_endpoints/{webhook_endpoint}',
    }),

    update: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/webhook_endpoints/{webhook_endpoint}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/webhook_endpoints',
        methodType: 'list',
    }),

    del: expressPaymentsMethod({
        method: 'DELETE',
        fullPath: '/v1/webhook_endpoints/{webhook_endpoint}',
    }),
});
