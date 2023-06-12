// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const ScheduledQueryRuns = ExpressPlatbyResource.extend({
  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/sigma/scheduled_query_runs/{scheduled_query_run}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/sigma/scheduled_query_runs',
    methodType: 'list',
  }),
});
