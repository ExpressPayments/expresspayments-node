'use strict';

const expressPayments = require('../testUtils.js').getSpyableExpressPayments();
const expect = require('chai').expect;

describe('Refund Resource', () => {
    describe('create', () => {
        it('Sends the correct request', () => {
            expressPayments.refunds.create({
                amount: '300',
                charge: 'ch_123',
            });

            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/refunds',
                headers: {},
                data: {
                    amount: '300',
                    charge: 'ch_123',
                },
                settings: {},
            });
        });
    });

    describe('retrieve', () => {
        it('Sends the correct request', () => {
            expressPayments.refunds.retrieve('re_123');
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/refunds/re_123',
                data: {},
                headers: {},
                settings: {},
            });
        });
    });

    describe('list', () => {
        it('Sends the correct request', () => {
            expressPayments.refunds.list();
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/refunds',
                data: {},
                headers: {},
                settings: {},
            });
        });
    });

    describe('update', () => {
        it('Sends the correct request', () => {
            expressPayments.refunds.update('re_123', {metadata: {key: 'abcd'}});
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/refunds/re_123',
                headers: {},
                data: {metadata: {key: 'abcd'}},
                settings: {},
            });
        });
    });
});
