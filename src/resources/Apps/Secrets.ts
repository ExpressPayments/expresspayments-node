// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../../ExpressPlatbyResource.js';

const expressPlatbyMethod = ExpressPlatbyResource.method;

export const Secrets = ExpressPlatbyResource.extend({
    create: expressPlatbyMethod({
        method: 'POST',
        fullPath: '/v1/apps/secrets',
    }),

    list: expressPlatbyMethod({
        method: 'GET',
        fullPath: '/v1/apps/secrets',
        methodType: 'list',
    }),

    deleteWhere: expressPlatbyMethod({
        method: 'POST',
        fullPath: '/v1/apps/secrets/delete',
    }),

    find: expressPlatbyMethod({
        method: 'GET',
        fullPath: '/v1/apps/secrets/find',
    }),
});
