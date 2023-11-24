'use strict';

const expressPayments = require('../testUtils.js').getSpyableExpressPayments();
const expect = require('chai').expect;

describe('Transfers Resource', () => {
    describe('retrieve', () => {
        it('Sends the correct request', () => {
            expressPayments.transfers.retrieve('transferId1');
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/transfers/transferId1',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('create', () => {
        it('Sends the correct request', () => {
            expressPayments.transfers.create({
                amount: 200,
                currency: 'usd',
                recipient: {},
            });
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/transfers',
                headers: {},
                data: {amount: 200, currency: 'usd', recipient: {}},
                settings: {},
            });
        });
    });

    describe('update', () => {
        it('Sends the correct request', () => {
            expressPayments.transfers.update('transferId6654', {
                amount: 300,
            });
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/transfers/transferId6654',
                headers: {},
                data: {amount: 300},
                settings: {},
            });
        });
    });

    describe('list', () => {
        it('Sends the correct request', () => {
            expressPayments.transfers.list();
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/transfers',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });
});
