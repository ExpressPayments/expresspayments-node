'use strict';

const expressPlatby = require('../../testUtils.js').getSpyableExpressPlatby();

const expect = require('chai').expect;

describe('Issuing', () => {
  describe('Transactions Resource', () => {
    describe('retrieve', () => {
      it('Sends the correct request', () => {
        expressPlatby.issuing.transactions.retrieve('ipi_123');

        expect(expressPlatby.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/issuing/transactions/ipi_123',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });

    describe('update', () => {
      it('Sends the correct request', () => {
        expressPlatby.issuing.transactions.update('ipi_123', {
          metadata: {
            thing1: true,
            thing2: 'yes',
          },
        });
        expect(expressPlatby.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/issuing/transactions/ipi_123',
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
        expressPlatby.issuing.transactions.list();
        expect(expressPlatby.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/issuing/transactions',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });
  });
});
