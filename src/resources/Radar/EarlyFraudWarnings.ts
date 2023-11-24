// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const EarlyFraudWarnings = ExpressPaymentsResource.extend({
    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/radar/early_fraud_warnings/{early_fraud_warning}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/radar/early_fraud_warnings',
        methodType: 'list',
    }),
});
