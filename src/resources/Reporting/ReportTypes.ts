// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const ReportTypes = ExpressPlatbyResource.extend({
  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/reporting/report_types/{report_type}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/reporting/report_types',
    methodType: 'list',
  }),
});
