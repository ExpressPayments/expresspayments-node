// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../ExpressPaymentsResource';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const Quotes = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/quotes',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/quotes/{quote}',
    }),

    update: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/quotes/{quote}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/quotes',
        methodType: 'list',
    }),

    accept: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/quotes/{quote}/accept',
    }),

    cancel: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/quotes/{quote}/cancel',
    }),

    finalizeQuote: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/quotes/{quote}/finalize',
    }),

    listComputedUpfrontLineItems: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/quotes/{quote}/computed_upfront_line_items',
        methodType: 'list',
    }),

    listLineItems: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/quotes/{quote}/line_items',
        methodType: 'list',
    }),

    pdf: expressPaymentsMethod({
        host: 'files.epayments.network',
        method: 'GET',
        fullPath: '/v1/quotes/{quote}/pdf',
        streaming: true,
    }),
});
