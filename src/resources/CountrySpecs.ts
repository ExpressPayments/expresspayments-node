// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const CountrySpecs = ExpressPlatbyResource.extend({
  retrieve: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/country_specs/{country}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/country_specs',
    methodType: 'list',
  }),
});
