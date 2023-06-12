'use strict';

const expressPlatby = require('../testUtils.js').getSpyableExpressPlatby();
const expect = require('chai').expect;

describe('PaymentMethods Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      expressPlatby.paymentMethods.retrieve('pm_123');
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/payment_methods/pm_123',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('create', () => {
    it('Sends the correct request', () => {
      const data = {
        type: 'card',
      };
      expressPlatby.paymentMethods.create(data);
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/payment_methods',
        headers: {},
        data,
        settings: {},
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      const data = {
        customer: 'cus_123',
        type: 'card',
      };
      expressPlatby.paymentMethods.list(data);
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/payment_methods?customer=cus_123&type=card',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('update', () => {
    it('Sends the correct request', () => {
      const data = {
        metadata: {key: 'value'},
      };
      expressPlatby.paymentMethods.update('pm_123', data);
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/payment_methods/pm_123',
        headers: {},
        data,
        settings: {},
      });
    });
  });

  describe('attach', () => {
    it('Sends the correct request', () => {
      expressPlatby.paymentMethods.attach('pm_123', {customer: 'cus_123'});
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/payment_methods/pm_123/attach',
        headers: {},
        data: {customer: 'cus_123'},
        settings: {},
      });
    });
  });

  describe('detach', () => {
    it('Sends the correct request', () => {
      expressPlatby.paymentMethods.detach('pm_123');
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/payment_methods/pm_123/detach',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });
});
