// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../ExpressPaymentsResource';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const CreditNotes = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/credit_notes',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/credit_notes/{id}',
    }),

    update: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/credit_notes/{id}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/credit_notes',
        methodType: 'list',
    }),

    listLineItems: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/credit_notes/{credit_note}/lines',
        methodType: 'list',
    }),

    listPreviewLineItems: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/credit_notes/preview/lines',
        methodType: 'list',
    }),

    preview: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/credit_notes/preview',
    }),

    voidCreditNote: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/credit_notes/{id}/void',
    }),
});
