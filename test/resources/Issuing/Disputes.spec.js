'use strict';

const expressPayments = require('../../testUtils.js').getSpyableExpressPayments();

const expect = require('chai').expect;

describe('Issuing', () => {
    describe('Disputes Resource', () => {
        describe('retrieve', () => {
            it('Sends the correct request', () => {
                expressPayments.issuing.disputes.retrieve('idp_123');

                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'GET',
                    url: '/v1/issuing/disputes/idp_123',
                    headers: {},
                    data: {},
                    settings: {},
                });
            });
        });

        describe('create', () => {
            it('Sends the correct request', () => {
                expressPayments.issuing.disputes.create({
                    transaction: 'ipi_123',
                });
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'POST',
                    url: '/v1/issuing/disputes',
                    headers: {},
                    data: {
                        transaction: 'ipi_123',
                    },
                    settings: {},
                });
            });
        });

        describe('update', () => {
            it('Sends the correct request', () => {
                expressPayments.issuing.disputes.update('idp_123', {
                    metadata: {
                        thing1: true,
                        thing2: 'yes',
                    },
                });
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'POST',
                    url: '/v1/issuing/disputes/idp_123',
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
                expressPayments.issuing.disputes.list();
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'GET',
                    url: '/v1/issuing/disputes',
                    headers: {},
                    data: {},
                    settings: {},
                });
            });
        });

        describe('submit', () => {
            it('Sends the correct request', () => {
                expressPayments.issuing.disputes.submit('idp_123', {
                    metadata: {
                        thing1: true,
                        thing2: 'yes',
                    },
                });
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'POST',
                    url: '/v1/issuing/disputes/idp_123/submit',
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
    });
});
