'use strict';

const expressPlatby = require('../testUtils.js').getSpyableExpressPlatby();
const expect = require('chai').expect;

describe('WebhookEndpoints Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      expressPlatby.webhookEndpoints.retrieve('we_123');
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/webhook_endpoints/we_123',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('del', () => {
    it('Sends the correct request', () => {
      expressPlatby.webhookEndpoints.del('we_123');
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/webhook_endpoints/we_123',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('update', () => {
    it('Sends the correct request', () => {
      expressPlatby.webhookEndpoints.update('we_123', {
        enabled_events: ['charge.succeeded'],
      });
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/webhook_endpoints/we_123',
        headers: {},
        data: {
          enabled_events: ['charge.succeeded'],
        },
        settings: {},
      });
    });
  });

  describe('create', () => {
    it('Sends the correct request', () => {
      expressPlatby.webhookEndpoints.create({
        enabled_events: ['charge.succeeded'],
        url: 'https://expressplatby.cz',
      });

      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/webhook_endpoints',
        headers: {},
        data: {
          enabled_events: ['charge.succeeded'],
          url: 'https://expressplatby.cz',
        },
        settings: {},
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      expressPlatby.webhookEndpoints.list();
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/webhook_endpoints',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });
});
