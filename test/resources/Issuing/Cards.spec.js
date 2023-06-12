'use strict';

const expressPlatby = require('../../testUtils.js').getSpyableExpressPlatby();

const expect = require('chai').expect;

describe('Issuing', () => {
  describe('Cards Resource', () => {
    describe('retrieve', () => {
      it('Sends the correct request', () => {
        expressPlatby.issuing.cards.retrieve('ic_123');

        expect(expressPlatby.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/issuing/cards/ic_123',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });

    describe('create', () => {
      it('Sends the correct request', () => {
        expressPlatby.issuing.cards.create({
          currency: 'usd',
          type: 'physical',
        });
        expect(expressPlatby.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/issuing/cards',
          headers: {},
          data: {
            currency: 'usd',
            type: 'physical',
          },
          settings: {},
        });
      });
    });

    describe('update', () => {
      it('Sends the correct request', () => {
        expressPlatby.issuing.cards.update('ic_123', {
          metadata: {
            thing1: true,
            thing2: 'yes',
          },
        });
        expect(expressPlatby.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/issuing/cards/ic_123',
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
        expressPlatby.issuing.cards.list();
        expect(expressPlatby.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/issuing/cards',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });
  });
});
