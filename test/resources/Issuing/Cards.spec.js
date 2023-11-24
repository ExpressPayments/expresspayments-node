'use strict';

const expressPayments = require('../../testUtils.js').getSpyableExpressPayments();

const expect = require('chai').expect;

describe('Issuing', () => {
    describe('Cards Resource', () => {
        describe('retrieve', () => {
            it('Sends the correct request', () => {
                expressPayments.issuing.cards.retrieve('ic_123');

                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'GET',
                    url: '/v1/issuing/cards/ic_123',
                    headers: {},
                    data: {},
                    settings: {},
                });
            });
        });

        describe('create', () => {
            it('Sends the correct request', () => {
                expressPayments.issuing.cards.create({
                    currency: 'usd',
                    type: 'physical',
                });
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'POST',
                    url: '/v1/issuing/cards',
                    headers: {},
                    data: {
                        currency: 'usd',
                        type: 'physical',
                    },
                    settings: {},
                });
            });
        });

        describe('update', () => {
            it('Sends the correct request', () => {
                expressPayments.issuing.cards.update('ic_123', {
                    metadata: {
                        thing1: true,
                        thing2: 'yes',
                    },
                });
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'POST',
                    url: '/v1/issuing/cards/ic_123',
                    headers: {},
                    data: {
                        metadata: {
                            thing1: true,
                            thing2: 'yes',
                        },
                    },
                    settings: {},
                });
            });
        });

        describe('list', () => {
            it('Sends the correct request', () => {
                expressPayments.issuing.cards.list();
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'GET',
                    url: '/v1/issuing/cards',
                    headers: {},
                    data: {},
                    settings: {},
                });
            });
        });
    });
});
