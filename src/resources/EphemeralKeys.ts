// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const EphemeralKeys = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/ephemeral_keys',
        validator: (data, options) => {
            if (!options.headers || !options.headers['EP-Version']) {
                throw new Error(
                    'Passing apiVersion in a separate options hash is required to create an ephemeral key. See https://docs.epayments.network/api/versioning?lang=node'
                );
            }
        },
    }),

    del: expressPaymentsMethod({
        method: 'DELETE',
        fullPath: '/v1/ephemeral_keys/{key}',
    }),
});
