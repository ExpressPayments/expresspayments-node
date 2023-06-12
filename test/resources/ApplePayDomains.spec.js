'use strict';

const expressPlatby = require('../testUtils.js').getSpyableExpressPlatby();
const expect = require('chai').expect;

describe('ApplePayDomains Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      expressPlatby.applePayDomains.retrieve('apwc_retrieve');
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/apple_pay/domains/apwc_retrieve',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('del', () => {
    it('Sends the correct request', () => {
      expressPlatby.applePayDomains.del('apwc_delete');
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/apple_pay/domains/apwc_delete',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('create', () => {
    it('Sends the correct request', () => {
      expressPlatby.applePayDomains.create({
        domain_name: 'example.com',
      });

      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/apple_pay/domains',
        headers: {},
        data: {
          domain_name: 'example.com',
        },
        settings: {},
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      expressPlatby.applePayDomains.list();
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/apple_pay/domains',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });
});
