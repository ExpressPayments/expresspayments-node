'use strict';

const expressPlatby = require('../testUtils.js').getSpyableExpressPlatby();
const expect = require('chai').expect;

describe('ExchangeRates Resource', () => {
  describe('list', () => {
    it('Sends the correct request', () => {
      expressPlatby.exchangeRates.list();
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/exchange_rates',
        data: {},
        headers: {},
        settings: {},
      });
    });
  });

  describe('retrieve', () => {
    it('Sends the correct request', () => {
      const currency = 'USD';
      expressPlatby.exchangeRates.retrieve(currency);
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: `/v1/exchange_rates/${currency}`,
        data: {},
        headers: {},
        settings: {},
      });
    });
  });
});
