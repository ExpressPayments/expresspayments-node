// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../ExpressPlatbyResource.js';

const expressPlatbyMethod = ExpressPlatbyResource.method;

export const Products = ExpressPlatbyResource.extend({
    create: expressPlatbyMethod({
        method: 'POST',
        fullPath: '/v1/products',
    }),

    retrieve: expressPlatbyMethod({
        method: 'GET',
        fullPath: '/v1/products/{id}',
    }),

    update: expressPlatbyMethod({
        method: 'POST',
        fullPath: '/v1/products/{id}',
    }),

    list: expressPlatbyMethod({
        method: 'GET',
        fullPath: '/v1/products',
        methodType: 'list',
    }),

    del: expressPlatbyMethod({
        method: 'DELETE',
        fullPath: '/v1/products/{id}',
    }),

    search: expressPlatbyMethod({
        method: 'GET',
        fullPath: '/v1/products/search',
        methodType: 'search',
    }),
});
