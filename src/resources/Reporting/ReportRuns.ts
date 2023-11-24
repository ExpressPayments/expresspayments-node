// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const ReportRuns = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/reporting/report_runs',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/reporting/report_runs/{report_run}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/reporting/report_runs',
        methodType: 'list',
    }),
});
