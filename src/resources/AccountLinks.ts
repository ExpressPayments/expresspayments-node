// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const AccountLinks = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/account_links',
  }),
});
