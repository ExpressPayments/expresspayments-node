// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const VerificationReports = ExpressPaymentsResource.extend({
    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/identity/verification_reports/{report}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/identity/verification_reports',
        methodType: 'list',
    }),
});
