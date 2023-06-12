// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../ExpressPlatbyResource.js';

const expressPlatbyMethod = ExpressPlatbyResource.method;

export const Tokens = ExpressPlatbyResource.extend({
    create: expressPlatbyMethod({
        method: 'POST',
        fullPath: '/v1/tokens',
    }),

    retrieve: expressPlatbyMethod({
        method: 'GET',
        fullPath: '/v1/tokens/{token}',
    }),
});
