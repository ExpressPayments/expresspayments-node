// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

export const Customers = ExpressPlatbyResource.extend({
    create: expressPlatbyMethod({
        method: 'POST',
        fullPath: '/v1/customers',
    }),

    retrieve: expressPlatbyMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}',
    }),

    update: expressPlatbyMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}',
    }),

    list: expressPlatbyMethod({
        method: 'GET',
        fullPath: '/v1/customers',
        methodType: 'list',
    }),

    del: expressPlatbyMethod({
        method: 'DELETE',
        fullPath: '/v1/customers/{customer}',
    }),

    createFundingInstructions: expressPlatbyMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/funding_instructions',
    }),

    createBalanceTransaction: expressPlatbyMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/balance_transactions',
    }),

    createSource: expressPlatbyMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/sources',
    }),

    createTaxId: expressPlatbyMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/tax_ids',
    }),

    deleteDiscount: expressPlatbyMethod({
        method: 'DELETE',
        fullPath: '/v1/customers/{customer}/discount',
    }),

    deleteSource: expressPlatbyMethod({
        method: 'DELETE',
        fullPath: '/v1/customers/{customer}/sources/{id}',
    }),

    deleteTaxId: expressPlatbyMethod({
        method: 'DELETE',
        fullPath: '/v1/customers/{customer}/tax_ids/{id}',
    }),

    listPaymentMethods: expressPlatbyMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/payment_methods',
        methodType: 'list',
    }),

    listBalanceTransactions: expressPlatbyMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/balance_transactions',
        methodType: 'list',
    }),

    listCashBalanceTransactions: expressPlatbyMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/cash_balance_transactions',
        methodType: 'list',
    }),

    listSources: expressPlatbyMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/sources',
        methodType: 'list',
    }),

    listTaxIds: expressPlatbyMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/tax_ids',
        methodType: 'list',
    }),

    retrievePaymentMethod: expressPlatbyMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/payment_methods/{payment_method}',
    }),

    retrieveBalanceTransaction: expressPlatbyMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/balance_transactions/{transaction}',
    }),

    retrieveCashBalance: expressPlatbyMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/cash_balance',
    }),

    retrieveCashBalanceTransaction: expressPlatbyMethod({
        method: 'GET',
        fullPath:
            '/v1/customers/{customer}/cash_balance_transactions/{transaction}',
    }),

    retrieveSource: expressPlatbyMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/sources/{id}',
    }),

    retrieveTaxId: expressPlatbyMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/tax_ids/{id}',
    }),

    search: expressPlatbyMethod({
        method: 'GET',
        fullPath: '/v1/customers/search',
        methodType: 'search',
    }),

    updateBalanceTransaction: expressPlatbyMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/balance_transactions/{transaction}',
    }),

    updateCashBalance: expressPlatbyMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/cash_balance',
    }),

    updateSource: expressPlatbyMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/sources/{id}',
    }),

    verifySource: expressPlatbyMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/sources/{id}/verify',
    }),
});
