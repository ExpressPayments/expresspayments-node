// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../ExpressPlatbyResource.js';
const expressPlatbyMethod = ExpressPlatbyResource.method;

// Since path can either be `account` or `accounts`, support both through expressPlatbyMethod path;
export const Accounts = ExpressPlatbyResource.extend({
  create: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/accounts',
  }),

  retrieve(id: string, ...args: any[]) {
    // No longer allow an api key to be passed as the first string to this function due to ambiguity between
    // old account ids and api keys. To request the account for an api key, send null as the id
    if (typeof id === 'string') {
      return expressPlatbyMethod({
        method: 'GET',
        fullPath: '/v1/accounts/{id}',
      }).apply(this, [id, ...args]);
    } else {
      if (id === null || id === undefined) {
        // Remove id as expressPlatbyMethod would complain of unexpected argument
        [].shift.apply([id, ...args]);
      }
      return expressPlatbyMethod({
        method: 'GET',
        fullPath: '/v1/account',
      }).apply(this, [id, ...args]);
    }
  },

  update: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/accounts/{account}',
  }),

  list: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/accounts',
    methodType: 'list',
  }),

  del: expressPlatbyMethod({
    method: 'DELETE',
    fullPath: '/v1/accounts/{account}',
  }),

  createExternalAccount: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/accounts/{account}/external_accounts',
  }),

  createLoginLink: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/accounts/{account}/login_links',
  }),

  createPerson: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/accounts/{account}/persons',
  }),

  deleteExternalAccount: expressPlatbyMethod({
    method: 'DELETE',
    fullPath: '/v1/accounts/{account}/external_accounts/{id}',
  }),

  deletePerson: expressPlatbyMethod({
    method: 'DELETE',
    fullPath: '/v1/accounts/{account}/persons/{person}',
  }),

  listCapabilities: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/accounts/{account}/capabilities',
    methodType: 'list',
  }),

  listExternalAccounts: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/accounts/{account}/external_accounts',
    methodType: 'list',
  }),

  listPersons: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/accounts/{account}/persons',
    methodType: 'list',
  }),

  reject: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/accounts/{account}/reject',
  }),

  retrieveCapability: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/accounts/{account}/capabilities/{capability}',
  }),

  retrieveExternalAccount: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/accounts/{account}/external_accounts/{id}',
  }),

  retrievePerson: expressPlatbyMethod({
    method: 'GET',
    fullPath: '/v1/accounts/{account}/persons/{person}',
  }),

  updateCapability: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/accounts/{account}/capabilities/{capability}',
  }),

  updateExternalAccount: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/accounts/{account}/external_accounts/{id}',
  }),

  updatePerson: expressPlatbyMethod({
    method: 'POST',
    fullPath: '/v1/accounts/{account}/persons/{person}',
  }),
});
