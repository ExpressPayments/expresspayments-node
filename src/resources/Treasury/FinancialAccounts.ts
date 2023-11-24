// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const FinancialAccounts = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/treasury/financial_accounts',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/treasury/financial_accounts/{financial_account}',
    }),

    update: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/treasury/financial_accounts/{financial_account}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/treasury/financial_accounts',
        methodType: 'list',
    }),

    retrieveFeatures: expressPaymentsMethod({
        method: 'GET',
        fullPath:
            '/v1/treasury/financial_accounts/{financial_account}/features',
    }),

    updateFeatures: expressPaymentsMethod({
        method: 'POST',
        fullPath:
            '/v1/treasury/financial_accounts/{financial_account}/features',
    }),
});
