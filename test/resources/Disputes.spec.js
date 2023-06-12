'use strict';

const expressPlatby = require('../testUtils.js').getSpyableExpressPlatby();
const expect = require('chai').expect;

describe('Dispute Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      expressPlatby.disputes.retrieve('dp_123');
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/disputes/dp_123',
        data: {},
        headers: {},
        settings: {},
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      expressPlatby.disputes.list();
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/disputes',
        data: {},
        headers: {},
        settings: {},
      });
    });
  });

  describe('close', () => {
    it('Sends the correct request', () => {
      expressPlatby.disputes.close('dp_123');
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/disputes/dp_123/close',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('update', () => {
    it('Sends the correct request', () => {
      expressPlatby.disputes.update('dp_123', {evidence: {customer_name: 'Bob'}});
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/disputes/dp_123',
        headers: {},
        data: {evidence: {customer_name: 'Bob'}},
        settings: {},
      });
    });
  });
});
