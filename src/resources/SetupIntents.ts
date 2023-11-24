// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../ExpressPaymentsResource';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const SetupIntents = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/setup_intents',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/setup_intents/{intent}',
    }),

    update: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/setup_intents/{intent}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/setup_intents',
        methodType: 'list',
    }),

    cancel: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/setup_intents/{intent}/cancel',
    }),

    confirm: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/setup_intents/{intent}/confirm',
    }),

    verifyMicrodeposits: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/setup_intents/{intent}/verify_microdeposits',
    }),
});
