'use strict';

const expressPayments = require('../../testUtils.js').getSpyableExpressPayments();

const expect = require('chai').expect;

describe('Terminal', () => {
    describe('ConnectionToken Resource', () => {
        describe('create', () => {
            it('Sends the correct request', () => {
                expressPayments.terminal.connectionTokens.create({});
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'POST',
                    url: '/v1/terminal/connection_tokens',
                    headers: {},
                    data: {},
                    settings: {},
                });
            });
        });
    });
});
