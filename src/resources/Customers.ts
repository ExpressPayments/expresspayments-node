// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../ExpressPaymentsResource';
const expressPaymentsMethod = ExpressPaymentsResource.method;

export const Customers = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/customers',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}',
    }),

    update: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/customers',
        methodType: 'list',
    }),

    del: expressPaymentsMethod({
        method: 'DELETE',
        fullPath: '/v1/customers/{customer}',
    }),

    createFundingInstructions: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/funding_instructions',
    }),

    createBalanceTransaction: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/balance_transactions',
    }),

    createSource: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/sources',
    }),

    createTaxId: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/tax_ids',
    }),

    deleteDiscount: expressPaymentsMethod({
        method: 'DELETE',
        fullPath: '/v1/customers/{customer}/discount',
    }),

    deleteSource: expressPaymentsMethod({
        method: 'DELETE',
        fullPath: '/v1/customers/{customer}/sources/{id}',
    }),

    deleteTaxId: expressPaymentsMethod({
        method: 'DELETE',
        fullPath: '/v1/customers/{customer}/tax_ids/{id}',
    }),

    listPaymentMethods: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/payment_methods',
        methodType: 'list',
    }),

    listBalanceTransactions: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/balance_transactions',
        methodType: 'list',
    }),

    listCashBalanceTransactions: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/cash_balance_transactions',
        methodType: 'list',
    }),

    listSources: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/sources',
        methodType: 'list',
    }),

    listTaxIds: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/tax_ids',
        methodType: 'list',
    }),

    retrievePaymentMethod: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/payment_methods/{payment_method}',
    }),

    retrieveBalanceTransaction: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/balance_transactions/{transaction}',
    }),

    retrieveCashBalance: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/cash_balance',
    }),

    retrieveCashBalanceTransaction: expressPaymentsMethod({
        method: 'GET',
        fullPath:
            '/v1/customers/{customer}/cash_balance_transactions/{transaction}',
    }),

    retrieveSource: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/sources/{id}',
    }),

    retrieveTaxId: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/tax_ids/{id}',
    }),

    search: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/customers/search',
        methodType: 'search',
    }),

    updateBalanceTransaction: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/balance_transactions/{transaction}',
    }),

    updateCashBalance: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/cash_balance',
    }),

    updateSource: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/sources/{id}',
    }),

    verifySource: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/sources/{id}/verify',
    }),
});
