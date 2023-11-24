// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../../../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const Cards = ExpressPaymentsResource.extend({
    deliverCard: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/cards/{card}/shipping/deliver',
    }),

    failCard: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/cards/{card}/shipping/fail',
    }),

    returnCard: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/cards/{card}/shipping/return',
    }),

    shipCard: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/cards/{card}/shipping/ship',
    }),
});
