// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../ExpressPaymentsResource';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const InvoiceItems = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/invoiceitems',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/invoiceitems/{invoiceitem}',
    }),

    update: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/invoiceitems/{invoiceitem}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/invoiceitems',
        methodType: 'list',
    }),

    del: expressPaymentsMethod({
        method: 'DELETE',
        fullPath: '/v1/invoiceitems/{invoiceitem}',
    }),
});
