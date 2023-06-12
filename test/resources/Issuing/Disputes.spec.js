'use strict';

const expressPlatby = require('../../testUtils.js').getSpyableExpressPlatby();

const expect = require('chai').expect;

describe('Issuing', () => {
  describe('Disputes Resource', () => {
    describe('retrieve', () => {
      it('Sends the correct request', () => {
        expressPlatby.issuing.disputes.retrieve('idp_123');

        expect(expressPlatby.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/issuing/disputes/idp_123',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });

    describe('create', () => {
      it('Sends the correct request', () => {
        expressPlatby.issuing.disputes.create({
          transaction: 'ipi_123',
        });
        expect(expressPlatby.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/issuing/disputes',
          headers: {},
          data: {
            transaction: 'ipi_123',
          },
          settings: {},
        });
      });
    });

    describe('update', () => {
      it('Sends the correct request', () => {
        expressPlatby.issuing.disputes.update('idp_123', {
          metadata: {
            thing1: true,
            thing2: 'yes',
          },
        });
        expect(expressPlatby.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/issuing/disputes/idp_123',
          headers: {},
          data: {
            metadata: {
              thing1: true,
              thing2: 'yes',
            },
          },
          settings: {},
        });
      });
    });

    describe('list', () => {
      it('Sends the correct request', () => {
        expressPlatby.issuing.disputes.list();
        expect(expressPlatby.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/issuing/disputes',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });

    describe('submit', () => {
      it('Sends the correct request', () => {
        expressPlatby.issuing.disputes.submit('idp_123', {
          metadata: {
            thing1: true,
            thing2: 'yes',
          },
        });
        expect(expressPlatby.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/issuing/disputes/idp_123/submit',
          headers: {},
          data: {
            metadata: {
              thing1: true,
              thing2: 'yes',
            },
          },
          settings: {},
        });
      });
    });
  });
});
