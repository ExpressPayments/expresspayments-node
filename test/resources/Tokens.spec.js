'use strict';

const expressPlatby = require('../testUtils.js').getSpyableExpressPlatby();
const expect = require('chai').expect;

describe('Tokens Resource', () => {
  describe('create', () => {
    it('Sends the correct request', () => {
      expressPlatby.tokens.create({
        card: {number: 123},
      });
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/tokens',
        headers: {},
        data: {card: {number: 123}},
        settings: {},
      });
    });
  });

  describe('retrieve', () => {
    it('Sends the correct request', () => {
      expressPlatby.tokens.retrieve('tokenId1');
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/tokens/tokenId1',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });
});
