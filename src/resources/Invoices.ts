// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../ExpressPaymentsResource';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const Invoices = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/invoices',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/invoices/{invoice}',
    }),

    update: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/invoices/{invoice}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/invoices',
        methodType: 'list',
    }),

    del: expressPaymentsMethod({
        method: 'DELETE',
        fullPath: '/v1/invoices/{invoice}',
    }),

    finalizeInvoice: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/invoices/{invoice}/finalize',
    }),

    listLineItems: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/invoices/{invoice}/lines',
        methodType: 'list',
    }),

    listUpcomingLines: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/invoices/upcoming/lines',
        methodType: 'list',
    }),

    markUncollectible: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/invoices/{invoice}/mark_uncollectible',
    }),

    pay: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/invoices/{invoice}/pay',
    }),

    retrieveUpcoming: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/invoices/upcoming',
    }),

    search: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/invoices/search',
        methodType: 'search',
    }),

    sendInvoice: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/invoices/{invoice}/send',
    }),

    voidInvoice: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/invoices/{invoice}/void',
    }),
});
