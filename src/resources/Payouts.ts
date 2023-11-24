// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../ExpressPaymentsResource';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const Payouts = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/payouts',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/payouts/{payout}',
    }),

    update: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/payouts/{payout}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/payouts',
        methodType: 'list',
    }),

    cancel: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/payouts/{payout}/cancel',
    }),

    reverse: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/payouts/{payout}/reverse',
    }),
});
