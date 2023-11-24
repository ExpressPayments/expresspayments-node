'use strict';

const expressPayments = require('../testUtils.js').getSpyableExpressPayments();
const expect = require('chai').expect;

describe('BalanceTransactions Resource', function() {
    describe('retrieve', function() {
        it('Sends the correct request', function() {
            expressPayments.balanceTransactions.retrieve('txn_123');
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/balance_transactions/txn_123',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('list', function() {
        it('Sends the correct request', function() {
            expressPayments.balanceTransactions.list();
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/balance_transactions',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });
});
