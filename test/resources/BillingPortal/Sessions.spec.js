'use strict';

const expressPlatby = require('../../testUtils.js').getSpyableExpressPlatby();

const expect = require('chai').expect;

describe('BillingPortal', () => {
  describe('Sessions Resource', () => {
    describe('create', () => {
      it('Sends the correct request', () => {
        const params = {
          customer: 'cus_123',
          return_url: 'https://expressplatby.cz/return',
        };
        expressPlatby.billingPortal.sessions.create(params);

        expect(expressPlatby.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/billing_portal/sessions',
          headers: {},
          data: params,
          settings: {},
        });
      });
    });
  });
});
