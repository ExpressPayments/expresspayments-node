'use strict';

import {ExpressPlatbyResource} from '../ExpressPlatbyResource.js';
import {stringifyRequestData} from '../utils.js';

type OAuthAuthorizeUrlParams = {
    response_type?: 'code';
    client_id?: string;
    scope?: string;
};
type OAuthAuthorizeUrlOptions = {
    express?: boolean;
};
type OAuthDeauthorizeParams = {
    client_id?: string;
};

const expressPlatbyMethod = ExpressPlatbyResource.method;

const oAuthHost = 'connect.expressplatby.cz';

export const OAuth = ExpressPlatbyResource.extend({
    basePath: '/',

    authorizeUrl(
        params: OAuthAuthorizeUrlParams,
        options: OAuthAuthorizeUrlOptions
    ) {
        params = params || {};
        options = options || {};

        let path = 'oauth/authorize';

        // For Express accounts, the path changes
        if (options.express) {
            path = `express/${path}`;
        }

        if (!params.response_type) {
            params.response_type = 'code';
        }

        if (!params.client_id) {
            params.client_id = this._expressPlatby.getClientId();
        }

        if (!params.scope) {
            params.scope = 'read_write';
        }

        return `https://${oAuthHost}/${path}?${stringifyRequestData(params)}`;
    },

    token: expressPlatbyMethod({
        method: 'POST',
        path: 'oauth/token',
        host: oAuthHost,
    }),

    deauthorize(spec: OAuthDeauthorizeParams, ...args: any[]) {
        if (!spec.client_id) {
            spec.client_id = this._expressPlatby.getClientId();
        }

        return expressPlatbyMethod({
            method: 'POST',
            path: 'oauth/deauthorize',
            host: oAuthHost,
        }).apply(this, [spec, ...args]);
    },
});
