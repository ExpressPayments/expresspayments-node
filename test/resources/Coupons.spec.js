'use strict';

const expressPlatby = require('../testUtils.js').getSpyableExpressPlatby();
const expect = require('chai').expect;

describe('Coupons Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      expressPlatby.coupons.retrieve('couponId123');
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/coupons/couponId123',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('del', () => {
    it('Sends the correct request', () => {
      expressPlatby.coupons.del('couponId123');
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/coupons/couponId123',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('update', () => {
    it('Sends the correct request', () => {
      expressPlatby.coupons.update('couponId123', {
        metadata: {a: '1234'},
      });
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/coupons/couponId123',
        headers: {},
        data: {
          metadata: {a: '1234'},
        },
        settings: {},
      });
    });
  });

  describe('create', () => {
    it('Sends the correct request', () => {
      expressPlatby.coupons.create({
        percent_off: 25,
        duration: 'repeating',
        duration_in_months: 4,
      });

      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/coupons',
        headers: {},
        data: {
          percent_off: 25,
          duration: 'repeating',
          duration_in_months: 4,
        },
        settings: {},
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      expressPlatby.coupons.list();
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/coupons',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });
});
