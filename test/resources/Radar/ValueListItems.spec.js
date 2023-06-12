'use strict';

const expressPlatby = require('../../testUtils.js').getSpyableExpressPlatby();

const expect = require('chai').expect;

describe('Radar', () => {
  describe('ValueLists Resource', () => {
    describe('retrieve', () => {
      it('Sends the correct request', () => {
        expressPlatby.radar.valueListItems.retrieve('rsli_123');

        expect(expressPlatby.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/radar/value_list_items/rsli_123',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });

    describe('create', () => {
      it('Sends the correct request', () => {
        expressPlatby.radar.valueListItems.create({
          value_list: 'rsl_123',
          value: 'value',
        });
        expect(expressPlatby.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/radar/value_list_items',
          headers: {},
          data: {
            value_list: 'rsl_123',
            value: 'value',
          },
          settings: {},
        });
      });
    });

    describe('list', () => {
      it('Sends the correct request', () => {
        expressPlatby.radar.valueListItems.list({
          value_list: 'rsl_123',
        });
        expect(expressPlatby.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/radar/value_list_items?value_list=rsl_123',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });

    describe('del', () => {
      it('Sends the correct request', () => {
        expressPlatby.radar.valueListItems.del('rsli_123');
        expect(expressPlatby.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/radar/value_list_items/rsli_123',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });
  });
});
