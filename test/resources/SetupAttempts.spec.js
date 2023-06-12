'use strict';

const expressPlatby = require('../testUtils.js').getSpyableExpressPlatby();
const expect = require('chai').expect;

describe('Setup Attempts Resource', () => {
  describe('list', () => {
    it('Sends the correct request', () => {
      expressPlatby.setupAttempts.list({setup_intent: 'si_123'});
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/setup_attempts?setup_intent=si_123',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });
});
