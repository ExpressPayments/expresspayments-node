// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const Cardholders = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/issuing/cardholders',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/issuing/cardholders/{cardholder}',
    }),

    update: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/issuing/cardholders/{cardholder}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/issuing/cardholders',
        methodType: 'list',
    }),
});
