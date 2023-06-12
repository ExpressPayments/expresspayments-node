'use strict';

const expressPlatby = require('../testUtils.js').getSpyableExpressPlatby();
const expect = require('chai').expect;

describe('Plans Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      expressPlatby.plans.retrieve('plan_123');
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/plans/plan_123',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('create', () => {
    it('Sends the correct request', () => {
      expressPlatby.plans.create({
        amount: 200,
        currency: 'usd',
      });
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/plans',
        headers: {},
        data: {amount: 200, currency: 'usd'},
        settings: {},
      });
    });

    it('Sends the correct request for metered', () => {
      expressPlatby.plans.create({
        amount: 200,
        currency: 'usd',
        usage_type: 'metered',
      });
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/plans',
        headers: {},
        data: {amount: 200, currency: 'usd', usage_type: 'metered'},
        settings: {},
      });
    });

    it('Sends the correct request for tiered plans', () => {
      expressPlatby.plans.create({
        currency: 'usd',
        billing_scheme: 'tiered',
        tiers: [
          {up_to: 123, amount: 100},
          {up_to: 'inf', amount: 200},
        ],
        tiers_mode: 'volume',
      });
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/plans',
        headers: {},
        data: {
          currency: 'usd',
          billing_scheme: 'tiered',
          tiers: [
            {up_to: 123, amount: 100},
            {up_to: 'inf', amount: 200},
          ],
          tiers_mode: 'volume',
        },
        settings: {},
      });
    });

    it('Sends the correct request for transform usage plans', () => {
      expressPlatby.plans.create({
        amount: 200,
        currency: 'usd',
        transform_usage: {divide_by: 123, round: 'up'},
      });
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/plans',
        headers: {},
        data: {
          amount: 200,
          currency: 'usd',
          transform_usage: {divide_by: 123, round: 'up'},
        },
        settings: {},
      });
    });
  });

  describe('update', () => {
    it('Sends the correct request', () => {
      expressPlatby.plans.update('plan_123', {
        active: false,
      });
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/plans/plan_123',
        headers: {},
        data: {active: false},
        settings: {},
      });
    });
  });

  describe('del', () => {
    it('Sends the correct request', () => {
      expressPlatby.plans.del('plan_123');
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/plans/plan_123',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      expressPlatby.plans.list();
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/plans',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });
});
