// File generated from our OpenAPI spec

import {multipartRequestDataProcessor} from '../multipart.js';
import {ExpressPaymentsResource} from '../ExpressPaymentsResource';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const Files = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/files',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        host: 'files.epayments.network',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/files/{file}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/files',
        methodType: 'list',
    }),

    requestDataProcessor: multipartRequestDataProcessor,
});
