// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const ReportTypes = ExpressPaymentsResource.extend({
    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/reporting/report_types/{report_type}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/reporting/report_types',
        methodType: 'list',
    }),
});
