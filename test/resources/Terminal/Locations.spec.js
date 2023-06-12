'use strict';

const expressPlatby = require('../../testUtils.js').getSpyableExpressPlatby();

const expect = require('chai').expect;

describe('Terminal', () => {
  describe('Locations Resource', () => {
    describe('retrieve', () => {
      it('Sends the correct request', () => {
        expressPlatby.terminal.locations.retrieve('loc_123');

        expect(expressPlatby.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/terminal/locations/loc_123',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });

    describe('create', () => {
      it('Sends the correct request', () => {
        expressPlatby.terminal.locations.create({
          display_name: 'name',
          address: {
            line1: 'line1',
            country: 'US',
            postal_code: '12345',
            state: 'CA',
            city: 'San Francisco',
          },
        });
        expect(expressPlatby.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/terminal/locations',
          headers: {},
          data: {
            display_name: 'name',
            address: {
              line1: 'line1',
              country: 'US',
              postal_code: '12345',
              state: 'CA',
              city: 'San Francisco',
            },
          },
          settings: {},
        });
      });
    });

    describe('del', () => {
      it('Sends the correct request', () => {
        expressPlatby.terminal.locations.del('loc_123');
        expect(expressPlatby.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/terminal/locations/loc_123',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });

    describe('update', () => {
      it('Sends the correct request', () => {
        expressPlatby.terminal.locations.update('loc_123', {
          display_name: 'name',
        });
        expect(expressPlatby.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/terminal/locations/loc_123',
          headers: {},
          data: {
            display_name: 'name',
          },
          settings: {},
        });
      });
    });

    describe('list', () => {
      it('Sends the correct request', () => {
        expressPlatby.terminal.locations.list();
        expect(expressPlatby.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/terminal/locations',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });
  });
});
