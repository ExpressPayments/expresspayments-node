// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const ApplePayDomains = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/apple_pay/domains',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/apple_pay/domains/{domain}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/apple_pay/domains',
        methodType: 'list',
    }),

    del: expressPaymentsMethod({
        method: 'DELETE',
        fullPath: '/v1/apple_pay/domains/{domain}',
    }),
});
