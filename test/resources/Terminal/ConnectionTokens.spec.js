'use strict';

const expressPlatby = require('../../testUtils.js').getSpyableExpressPlatby();

const expect = require('chai').expect;

describe('Terminal', () => {
  describe('ConnectionToken Resource', () => {
    describe('create', () => {
      it('Sends the correct request', () => {
        expressPlatby.terminal.connectionTokens.create({});
        expect(expressPlatby.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/terminal/connection_tokens',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });
  });
});
