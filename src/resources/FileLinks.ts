// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../ExpressPaymentsResource';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const FileLinks = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/file_links',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/file_links/{link}',
    }),

    update: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/file_links/{link}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/file_links',
        methodType: 'list',
    }),
});
