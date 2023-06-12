'use strict';

const expressPlatby = require('../testUtils.js').getSpyableExpressPlatby();

const expect = require('chai').expect;
const URL = require('url');
const qs = require('qs');

describe('OAuth', () => {
    describe('authorize', () => {
        describe('when a default client_id is set', () => {
            beforeEach(() => {
                expressPlatby.setClientId('default_client_id');
            });

            it('Uses the correct host', () => {
                const url = expressPlatby.oauth.authorizeUrl();

                const host = URL.parse(url).hostname;

                expect(host).to.equal('connect.expressplatby.cz');
            });

            it('Uses the correct path', () => {
                const url = expressPlatby.oauth.authorizeUrl({
                    state: 'some_state',
                });

                const pathname = URL.parse(url).pathname;

                expect(pathname).to.equal('/oauth/authorize');
            });

            it('Uses the correct query', () => {
                const url = expressPlatby.oauth.authorizeUrl({
                    state: 'some_state',
                });

                const query = qs.parse(URL.parse(url).query);

                expect(query.client_id).to.equal('default_client_id');
                expect(query.response_type).to.equal('code');
                expect(query.scope).to.equal('read_write');
                expect(query.state).to.equal('some_state');
            });

            it('Uses a provided client_id instead of the default', () => {
                const url = expressPlatby.oauth.authorizeUrl({
                    client_id: '123abc',
                });

                const query = qs.parse(URL.parse(url).query);

                expect(query.client_id).to.equal('123abc');
            });

            describe('for Express account', () => {
                it('Uses the correct path', () => {
                    const url = expressPlatby.oauth.authorizeUrl(
                        {},
                        {express: true}
                    );

                    const pathname = URL.parse(url).pathname;

                    expect(pathname).to.equal('/express/oauth/authorize');
                });
            });
        });
    });

    describe('token', () => {
        it('Sends the correct request', () => {
            expressPlatby.oauth.token({
                code: '123abc',
                grant_type: 'authorization_code',
            });

            expect(expressPlatby.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                host: 'connect.expressplatby.cz',
                url: '/oauth/token',
                headers: {},
                data: {
                    code: '123abc',
                    grant_type: 'authorization_code',
                },
                settings: {},
            });
        });
    });

    describe('deauthorize', () => {
        beforeEach(() => {
            expressPlatby.setClientId('default_client_id');
        });

        it('Sends the correct request without explicit client_id', () => {
            expressPlatby.oauth.deauthorize({
                expressplatby_user_id: 'some_user_id',
            });

            expect(expressPlatby.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                host: 'connect.expressplatby.cz',
                url: '/oauth/deauthorize',
                headers: {},
                data: {
                    client_id: expressPlatby.getClientId(),
                    expressplatby_user_id: 'some_user_id',
                },
                settings: {},
            });
        });

        it('Sends the correct request with explicit client_id', () => {
            expressPlatby.oauth.deauthorize({
                expressplatby_user_id: 'some_user_id',
                client_id: '123abc',
            });

            expect(expressPlatby.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                host: 'connect.expressplatby.cz',
                url: '/oauth/deauthorize',
                headers: {},
                data: {
                    client_id: '123abc',
                    expressplatby_user_id: 'some_user_id',
                },
                settings: {},
            });
        });
    });
});
