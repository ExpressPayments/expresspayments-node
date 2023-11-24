'use strict';

const expressPayments = require('../../testUtils.js').getSpyableExpressPayments();

const expect = require('chai').expect;

describe('Issuing', () => {
    describe('Cardholders Resource', () => {
        describe('retrieve', () => {
            it('Sends the correct request', () => {
                expressPayments.issuing.cardholders.retrieve('ich_123');

                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'GET',
                    url: '/v1/issuing/cardholders/ich_123',
                    headers: {},
                    data: {},
                    settings: {},
                });
            });
        });

        describe('create', () => {
            it('Sends the correct request', () => {
                expressPayments.issuing.cardholders.create({
                    billing: {},
                    name: 'Tim Testperson',
                    type: 'individual',
                });
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'POST',
                    url: '/v1/issuing/cardholders',
                    headers: {},
                    data: {
                        billing: {},
                        name: 'Tim Testperson',
                        type: 'individual',
                    },
                    settings: {},
                });
            });
        });

        describe('update', () => {
            it('Sends the correct request', () => {
                expressPayments.issuing.cardholders.update('ich_123', {
                    metadata: {
                        thing1: true,
                        thing2: 'yes',
                    },
                });
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'POST',
                    url: '/v1/issuing/cardholders/ich_123',
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
                expressPayments.issuing.cardholders.list();
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'GET',
                    url: '/v1/issuing/cardholders',
                    headers: {},
                    data: {},
                    settings: {},
                });
            });
        });
    });
});
