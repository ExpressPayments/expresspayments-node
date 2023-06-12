'use strict';

const expressPlatby = require('../testUtils.js').getSpyableExpressPlatby();
const expect = require('chai').expect;

describe('TaxCodes Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      expressPlatby.taxCodes.retrieve('txcd_123');
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/tax_codes/txcd_123',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      expressPlatby.taxCodes.list();
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/tax_codes',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });
});
