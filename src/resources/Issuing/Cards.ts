// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../../ExpressPaymentsResource';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const Cards = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/issuing/cards',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/issuing/cards/{card}',
    }),

    update: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/issuing/cards/{card}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/issuing/cards',
        methodType: 'list',
    }),
});
