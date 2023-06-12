'use strict';

const expressPlatby = require('../testUtils.js').getSpyableExpressPlatby();
const expect = require('chai').expect;

const SCHEDULE_TEST_ID = 'sub_sched_123';

describe('Subscription Schedule Resource', () => {
  describe('cancel', () => {
    it('Sends the correct request', () => {
      const data = {
        invoice_now: true,
      };
      expressPlatby.subscriptionSchedules.cancel(SCHEDULE_TEST_ID, data);
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: `/v1/subscription_schedules/${SCHEDULE_TEST_ID}/cancel`,
        data,
        headers: {},
        settings: {},
      });
    });
  });

  describe('create', () => {
    it('Sends the correct request', () => {
      const data = {
        customer: 'cus_123',
      };
      expressPlatby.subscriptionSchedules.create(data);
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/subscription_schedules',
        data,
        headers: {},
        settings: {},
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      expressPlatby.subscriptionSchedules.list();
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/subscription_schedules',
        data: {},
        headers: {},
        settings: {},
      });
    });
  });

  describe('release', () => {
    it('Sends the correct request', () => {
      const data = {
        preserve_cancel_date: true,
      };
      expressPlatby.subscriptionSchedules.release(SCHEDULE_TEST_ID, data);
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: `/v1/subscription_schedules/${SCHEDULE_TEST_ID}/release`,
        data,
        headers: {},
        settings: {},
      });
    });
  });

  describe('retrieve', () => {
    it('Sends the correct request', () => {
      expressPlatby.subscriptionSchedules.retrieve(SCHEDULE_TEST_ID);
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/subscription_schedules/sub_sched_123',
        data: {},
        headers: {},
        settings: {},
      });
    });
  });

  describe('update', () => {
    it('Sends the correct request', () => {
      const data = {metadata: {key: 'value'}};
      expressPlatby.subscriptionSchedules.update(SCHEDULE_TEST_ID, data);
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: `/v1/subscription_schedules/${SCHEDULE_TEST_ID}`,
        data,
        headers: {},
        settings: {},
      });
    });
  });
});
