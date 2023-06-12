'use strict';

const expressPlatby = require('../testUtils.js').getSpyableExpressPlatby();
const expect = require('chai').expect;

describe('subscriptions Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      expressPlatby.subscriptions.retrieve('test_sub');
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/subscriptions/test_sub',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('del', () => {
    it('Sends the correct request', () => {
      expressPlatby.subscriptions.del('test_sub');
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/subscriptions/test_sub',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('update', () => {
    it('Sends the correct request', () => {
      expressPlatby.subscriptions.update('test_sub', {
        metadata: {a: '1234'},
      });
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/subscriptions/test_sub',
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
      expressPlatby.subscriptions.create({
        customer: 'test_cus',
        plan: 'gold',
      });

      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/subscriptions',
        headers: {},
        data: {
          customer: 'test_cus',
          plan: 'gold',
        },
        settings: {},
      });
    });
  });

  describe('update with items array', () => {
    it('Sends the correct request', () => {
      expressPlatby.subscriptions.update('test_sub', {
        items: [
          {
            plan: 'foo',
            quantity: 2,
          },
        ],
      });
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/subscriptions/test_sub',
        headers: {},
        data: {
          items: [
            {
              plan: 'foo',
              quantity: 2,
            },
          ],
        },
        settings: {},
      });
    });
  });

  describe('create with items array', () => {
    it('Sends the correct request', () => {
      expressPlatby.subscriptions.create({
        items: [
          {
            plan: 'foo',
            quantity: 2,
          },
        ],
      });

      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/subscriptions',
        headers: {},
        data: {
          items: [
            {
              plan: 'foo',
              quantity: 2,
            },
          ],
        },
        settings: {},
      });
    });
  });

  describe('update with items object', () => {
    it('Sends the correct request', () => {
      expressPlatby.subscriptions.update('test_sub', {
        items: {
          '0': {
            plan: 'foo',
            quantity: 2,
          },
        },
      });
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/subscriptions/test_sub',
        headers: {},
        data: {
          items: {
            '0': {
              plan: 'foo',
              quantity: 2,
            },
          },
        },
        settings: {},
      });
    });
  });

  describe('create with items object', () => {
    it('Sends the correct request', () => {
      expressPlatby.subscriptions.create({
        items: {
          '0': {
            plan: 'foo',
            quantity: 2,
          },
        },
      });

      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/subscriptions',
        headers: {},
        data: {
          items: {
            '0': {
              plan: 'foo',
              quantity: 2,
            },
          },
        },
        settings: {},
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      expressPlatby.subscriptions.list({
        limit: 3,
        customer: 'test_cus',
        plan: 'gold',
      });
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/subscriptions?limit=3&customer=test_cus&plan=gold',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('Discount methods', () => {
    describe('deleteDiscount', () => {
      it('Sends the correct request', () => {
        expressPlatby.subscriptions.deleteDiscount('test_sub');
        expect(expressPlatby.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/subscriptions/test_sub/discount',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });
  });
});
