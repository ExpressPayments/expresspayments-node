// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../../ExpressPaymentsResource.js';
const expressPaymentsMethod = ExpressPaymentsResource.method;

export const ConnectionTokens = ExpressPaymentsResource.extend({
  create: expressPaymentsMethod({
    method: 'POST',
    fullPath: '/v1/terminal/connection_tokens',
  }),
});
