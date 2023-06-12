// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const ReportRuns = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/reporting/report_runs',
  }),

  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/reporting/report_runs/{report_run}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/reporting/report_runs',
    methodType: 'list',
  }),
});
