// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../ExpressPlatbyResource.js';

const expressPlatbyMethod = ExpressPlatbyResource.method;

export const ApplicationFees = ExpressPlatbyResource.extend({
    retrieve: expressPlatbyMethod({
        method: 'GET',
        fullPath: '/v1/application_fees/{id}',
    }),

    list: expressPlatbyMethod({
        method: 'GET',
        fullPath: '/v1/application_fees',
        methodType: 'list',
    }),

    createRefund: expressPlatbyMethod({
        method: 'POST',
        fullPath: '/v1/application_fees/{id}/refunds',
    }),

    listRefunds: expressPlatbyMethod({
        method: 'GET',
        fullPath: '/v1/application_fees/{id}/refunds',
        methodType: 'list',
    }),

    retrieveRefund: expressPlatbyMethod({
        method: 'GET',
        fullPath: '/v1/application_fees/{fee}/refunds/{id}',
    }),

    updateRefund: expressPlatbyMethod({
        method: 'POST',
        fullPath: '/v1/application_fees/{fee}/refunds/{id}',
    }),
});
