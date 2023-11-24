// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

// Since path can either be `account` or `accounts`, support both through expressPaymentsMethod path;
export const Accounts = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/accounts',
    }),

    retrieve(id: string, ...args: any[]) {
        // No longer allow an api key to be passed as the first string to this function due to ambiguity between
        // old account ids and api keys. To request the account for an api key, send null as the id
        if (typeof id === 'string') {
            return expressPaymentsMethod({
                method: 'GET',
                fullPath: '/v1/accounts/{id}',
            }).apply(this, [id, ...args]);
        } else {
            if (id === null || id === undefined) {
                // Remove id as expressPaymentsMethod would complain of unexpected argument
                [].shift.apply([id, ...args]);
            }
            return expressPaymentsMethod({
                method: 'GET',
                fullPath: '/v1/account',
            }).apply(this, [id, ...args]);
        }
    },

    update: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/accounts/{account}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/accounts',
        methodType: 'list',
    }),

    del: expressPaymentsMethod({
        method: 'DELETE',
        fullPath: '/v1/accounts/{account}',
    }),

    createExternalAccount: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/accounts/{account}/external_accounts',
    }),

    createLoginLink: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/accounts/{account}/login_links',
    }),

    createPerson: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/accounts/{account}/persons',
    }),

    deleteExternalAccount: expressPaymentsMethod({
        method: 'DELETE',
        fullPath: '/v1/accounts/{account}/external_accounts/{id}',
    }),

    deletePerson: expressPaymentsMethod({
        method: 'DELETE',
        fullPath: '/v1/accounts/{account}/persons/{person}',
    }),

    listCapabilities: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/accounts/{account}/capabilities',
        methodType: 'list',
    }),

    listExternalAccounts: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/accounts/{account}/external_accounts',
        methodType: 'list',
    }),

    listPersons: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/accounts/{account}/persons',
        methodType: 'list',
    }),

    reject: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/accounts/{account}/reject',
    }),

    retrieveCapability: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/accounts/{account}/capabilities/{capability}',
    }),

    retrieveExternalAccount: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/accounts/{account}/external_accounts/{id}',
    }),

    retrievePerson: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/accounts/{account}/persons/{person}',
    }),

    updateCapability: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/accounts/{account}/capabilities/{capability}',
    }),

    updateExternalAccount: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/accounts/{account}/external_accounts/{id}',
    }),

    updatePerson: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/accounts/{account}/persons/{person}',
    }),
});
