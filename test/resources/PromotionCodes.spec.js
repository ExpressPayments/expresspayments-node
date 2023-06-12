'use strict';

const expressPlatby = require('../testUtils.js').getSpyableExpressPlatby();
const expect = require('chai').expect;

describe('PromotionCodes Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      expressPlatby.promotionCodes.retrieve('promo_123');
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/promotion_codes/promo_123',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('update', () => {
    it('Sends the correct request', () => {
      expressPlatby.promotionCodes.update('promo_123', {
        metadata: {a: '1234'},
      });
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/promotion_codes/promo_123',
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
      expressPlatby.promotionCodes.create({
        coupon: 'co_123',
        code: 'MYCODE',
      });

      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/promotion_codes',
        headers: {},
        data: {
          coupon: 'co_123',
          code: 'MYCODE',
        },
        settings: {},
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      expressPlatby.promotionCodes.list();
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/promotion_codes',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });
});
