'use strict';

const expressPlatby = require('../testUtils.js').getSpyableExpressPlatby();
const expect = require('chai').expect;

describe('BalanceTransactions Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      expressPlatby.balanceTransactions.retrieve('txn_123');
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
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
      expressPlatby.balanceTransactions.list();
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/balance_transactions',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });
});
