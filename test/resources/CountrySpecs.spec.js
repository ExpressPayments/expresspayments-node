'use strict';

const expressPlatby = require('../testUtils.js').getSpyableExpressPlatby();
const expect = require('chai').expect;

describe('CountrySpecs Resource', () => {
  describe('list', () => {
    it('Sends the correct request', () => {
      expressPlatby.countrySpecs.list();
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/country_specs',
        data: {},
        headers: {},
        settings: {},
      });
    });
  });

  describe('retrieve', () => {
    it('Sends the correct request', () => {
      const country = 'US';
      expressPlatby.countrySpecs.retrieve(country);
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: `/v1/country_specs/${country}`,
        data: {},
        headers: {},
        settings: {},
      });
    });
  });
});
