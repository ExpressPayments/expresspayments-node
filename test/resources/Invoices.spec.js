'use strict';

const expressPlatby = require('../testUtils.js').getSpyableExpressPlatby();
const expect = require('chai').expect;

describe('Invoices Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      expressPlatby.invoices.retrieve('in_123');
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/invoices/in_123',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('create', () => {
    it('Sends the correct request', () => {
      expressPlatby.invoices.create({application_fee: 111});
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/invoices',
        headers: {},
        data: {application_fee: 111},
        settings: {},
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      expressPlatby.invoices.list({count: 25});
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/invoices?count=25',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('update', () => {
    it('Sends the correct request', () => {
      expressPlatby.invoices.update('in_123', {application_fee: 200});
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/invoices/in_123',
        headers: {},
        data: {application_fee: 200},
        settings: {},
      });
    });
  });

  describe('del', () => {
    it('Sends the correct request', () => {
      expressPlatby.invoices.del('in_123');
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/invoices/in_123',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('listLineItems', () => {
    it('Sends the correct request', () => {
      expressPlatby.invoices.listLineItems('in_123');
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/invoices/in_123/lines',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('listUpcomingLines', () => {
    it('Sends the correct request', () => {
      expressPlatby.invoices.listUpcomingLines();
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/invoices/upcoming/lines',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('retrieveUpcoming', () => {
    it('Sends the correct request', () => {
      expressPlatby.invoices.retrieveUpcoming({
        customer: 'cus_abc',
        subscription_items: [{plan: 'potato'}, {plan: 'rutabaga'}],
      });

      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url:
          '/v1/invoices/upcoming?customer=cus_abc&subscription_items[0][plan]=potato&subscription_items[1][plan]=rutabaga',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('listUpcomingLineItems', () => {
    it('Sends the correct request', () => {
      expressPlatby.invoices.listUpcomingLines({
        customer: 'cus_abc',
        subscription_items: [{plan: 'potato'}, {plan: 'rutabaga'}],
        limit: 5,
      });

      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url:
          '/v1/invoices/upcoming/lines?customer=cus_abc&subscription_items[0][plan]=potato&subscription_items[1][plan]=rutabaga&limit=5',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('finalizeInvoice', () => {
    it('Sends the correct request', () => {
      expressPlatby.invoices.finalizeInvoice('in_123');
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/invoices/in_123/finalize',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('mark uncollectible', () => {
    it('Sends the correct request', () => {
      expressPlatby.invoices.markUncollectible('in_123');
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/invoices/in_123/mark_uncollectible',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('pay', () => {
    it('Sends the correct request', () => {
      expressPlatby.invoices.pay('in_123', {
        source: 'tok_FooBar',
      });
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/invoices/in_123/pay',
        headers: {},
        data: {source: 'tok_FooBar'},
        settings: {},
      });
    });
  });

  describe('sendInvoice', () => {
    it('Sends the correct request', () => {
      expressPlatby.invoices.sendInvoice('in_123');
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/invoices/in_123/send',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('voidInvoice', () => {
    it('Sends the correct request', () => {
      expressPlatby.invoices.voidInvoice('in_123');
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/invoices/in_123/void',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });
});
