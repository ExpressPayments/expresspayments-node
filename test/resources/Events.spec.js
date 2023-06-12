'use strict';

const expressPlatby = require('../testUtils.js').getSpyableExpressPlatby();
const expect = require('chai').expect;

describe('Events Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      expressPlatby.events.retrieve('eventIdBaz');
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/events/eventIdBaz',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });

  describe('list', () => {
    it('Sends the correct request', () => {
      expressPlatby.events.list({count: 25});
      expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/events?count=25',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });
});
