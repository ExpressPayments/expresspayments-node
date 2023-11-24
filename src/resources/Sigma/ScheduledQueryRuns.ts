// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../../ExpressPaymentsResource';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const ScheduledQueryRuns = ExpressPaymentsResource.extend({
    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/sigma/scheduled_query_runs/{scheduled_query_run}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/sigma/scheduled_query_runs',
        methodType: 'list',
    }),
});
