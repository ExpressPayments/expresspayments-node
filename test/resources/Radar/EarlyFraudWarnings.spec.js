'use strict';

const expressPlatby = require('../../testUtils.js').getSpyableExpressPlatby();
const expect = require('chai').expect;

describe('Radar', () => {
  describe('EarlyFraudWarnings Resource', () => {
    describe('retrieve', () => {
      it('Sends the correct request', () => {
        expressPlatby.radar.earlyFraudWarnings.retrieve('issfr_123');
        expect(expressPlatby.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/radar/early_fraud_warnings/issfr_123',
          data: {},
          headers: {},
          settings: {},
        });
      });
    });

    describe('list', () => {
      it('Sends the correct request', () => {
        expressPlatby.radar.earlyFraudWarnings.list();
        expect(expressPlatby.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/radar/early_fraud_warnings',
          data: {},
          headers: {},
          settings: {},
        });
      });
    });
  });
});
