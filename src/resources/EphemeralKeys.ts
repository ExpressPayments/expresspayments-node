// File generated from our OpenAPI spec

import {ExpressPlatbyResource} from '../ExpressPlatbyResource.js';

const expressPlatbyMethod = ExpressPlatbyResource.method;

export const EphemeralKeys = ExpressPlatbyResource.extend({
    create: expressPlatbyMethod({
        method: 'POST',
        fullPath: '/v1/ephemeral_keys',
        validator: (data, options) => {
            if (!options.headers || !options.headers['expressplatby-Version']) {
                throw new Error(
                    'Passing apiVersion in a separate options hash is required to create an ephemeral key. See https://expressplatby.cz/docs/api/versioning?lang=node'
                );
            }
        },
    }),

    del: expressPlatbyMethod({
        method: 'DELETE',
        fullPath: '/v1/ephemeral_keys/{key}',
    }),
});
