'use strict';

const expressPlatby = require('../../testUtils.js').getSpyableExpressPlatby();

const expect = require('chai').expect;

describe('Terminal', () => {
  describe('Readers Resource', () => {
    describe('retrieve', () => {
      it('Sends the correct request', () => {
        expressPlatby.terminal.readers.retrieve('rdr_123');

        expect(expressPlatby.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/terminal/readers/rdr_123',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });

    describe('create', () => {
      it('Sends the correct request', () => {
        expressPlatby.terminal.readers.create({
          registration_code: 'a-b-c',
          label: 'name',
        });
        expect(expressPlatby.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/terminal/readers',
          headers: {},
          data: {
            registration_code: 'a-b-c',
            label: 'name',
          },
          settings: {},
        });
      });
    });

    describe('del', () => {
      it('Sends the correct request', () => {
        expressPlatby.terminal.readers.del('rdr_123');
        expect(expressPlatby.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/terminal/readers/rdr_123',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });

    describe('update', () => {
      it('Sends the correct request', () => {
        expressPlatby.terminal.readers.update('rdr_123', {
          label: 'name',
        });
        expect(expressPlatby.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/terminal/readers/rdr_123',
          headers: {},
          data: {
            label: 'name',
          },
          settings: {},
        });
      });
    });

    describe('list', () => {
      it('Sends the correct request', () => {
        expressPlatby.terminal.readers.list();
        expect(expressPlatby.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/terminal/readers',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });
  });
});
