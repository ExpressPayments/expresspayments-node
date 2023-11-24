'use strict';

const expressPayments = require('../testUtils.js').getSpyableExpressPayments();
const expect = require('chai').expect;

describe('Topup Resource', () => {
    describe('retrieve', () => {
        it('Sends the correct request', () => {
            expressPayments.topups.retrieve('tu_123');
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/topups/tu_123',
                data: {},
                headers: {},
                settings: {},
            });
        });
    });

    describe('create', () => {
        it('Sends the correct request', () => {
            expressPayments.topups.create({
                source: 'src_123',
                amount: '1500',
                currency: 'usd',
                description: 'a topup',
                statement_descriptor: 'creating a topup',
            });
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/topups',
                data: {
                    source: 'src_123',
                    amount: '1500',
                    currency: 'usd',
                    description: 'a topup',
                    statement_descriptor: 'creating a topup',
                },
                headers: {},
                settings: {},
            });
        });
    });

    describe('list', () => {
        it('Sends the correct request', () => {
            expressPayments.topups.list();
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/topups',
                data: {},
                headers: {},
                settings: {},
            });
        });
    });

    describe('cancel', () => {
        it('Sends the correct request', () => {
            expressPayments.topups.cancel('tu_123');
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/topups/tu_123/cancel',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('update', () => {
        it('Sends the correct request', () => {
            expressPayments.topups.update('tu_123', {metadata: {key: 'value'}});
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/topups/tu_123',
                headers: {},
                data: {metadata: {key: 'value'}},
                settings: {},
            });
        });
    });
});
