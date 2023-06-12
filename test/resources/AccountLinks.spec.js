'use strict';

const expressPlatby = require('../testUtils.js').getSpyableExpressPlatby();
const expect = require('chai').expect;

describe('AccountLinks Resource', () => {
  describe('create', () => {
    it('Sends the correct request', () => {
      expressPlatby.accountLinks.create({
        account: 'acct_123',
        failure_url: 'https://expressplatby.cz/failure',
        success_url: 'https://expressplatby.cz/success',
        type: 'custom_account_verification',
      });

      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/account_links',
        headers: {},
        data: {
          account: 'acct_123',
          failure_url: 'https://expressplatby.cz/failure',
          success_url: 'https://expressplatby.cz/success',
          type: 'custom_account_verification',
        },
        settings: {},
      });
    });
  });
});
