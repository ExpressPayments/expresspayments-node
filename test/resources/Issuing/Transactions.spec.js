'use strict';

const expressPayments = require('../../testUtils.js').getSpyableExpressPayments();

const expect = require('chai').expect;

describe('Issuing', () => {
    describe('Transactions Resource', () => {
        describe('retrieve', () => {
            it('Sends the correct request', () => {
                expressPayments.issuing.transactions.retrieve('ipi_123');

                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'GET',
                    url: '/v1/issuing/transactions/ipi_123',
                    headers: {},
                    data: {},
                    settings: {},
                });
            });
        });

        describe('update', () => {
            it('Sends the correct request', () => {
                expressPayments.issuing.transactions.update('ipi_123', {
                    metadata: {
                        thing1: true,
                        thing2: 'yes',
                    },
                });
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'POST',
                    url: '/v1/issuing/transactions/ipi_123',
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
                expressPayments.issuing.transactions.list();
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'GET',
                    url: '/v1/issuing/transactions',
                    headers: {},
                    data: {},
                    settings: {},
                });
            });
        });
    });
});
