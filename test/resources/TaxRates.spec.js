'use strict';

const expressPlatby = require('../testUtils.js').getSpyableExpressPlatby();
const expect = require('chai').expect;

describe('TaxRates Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      expressPlatby.taxRates.retrieve('txr_123');
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/tax_rates/txr_123',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('update', () => {
    it('Sends the correct request', () => {
      const data = {
        metadata: {a: '1234'},
      };
      expressPlatby.taxRates.update('txr_123', data);
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/tax_rates/txr_123',
        headers: {},
        data,
        settings: {},
      });
    });
  });

  describe('create', () => {
    it('Sends the correct request', () => {
      const data = {
        display_name: 'name',
        inclusive: false,
        percentage: 10.15,
      };
      expressPlatby.taxRates.create(data);

      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/tax_rates',
        headers: {},
        data,
        settings: {},
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      expressPlatby.taxRates.list();
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/tax_rates',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });
});
