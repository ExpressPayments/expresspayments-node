'use strict';

const expressPlatby = require('../testUtils.js').getSpyableExpressPlatby();
const expect = require('chai').expect;

describe('Balance Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      expressPlatby.balance.retrieve();
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/balance',
        data: {},
        headers: {},
        settings: {},
      });
    });

    it('Sends the correct request [with specified auth]', () => {
      expressPlatby.balance.retrieve('aGN0bIwXnHdw5645VABjPdSn8nWY7G11');
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/balance',
        data: {},
        auth: 'aGN0bIwXnHdw5645VABjPdSn8nWY7G11',
        headers: {},
        settings: {},
      });
    });
  });
});
