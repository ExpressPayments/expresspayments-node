'use strict';

const expressPlatby = require('../../testUtils.js').getSpyableExpressPlatby();
const expect = require('chai').expect;

describe('Identity', () => {
  describe('VerificationReport Resource', () => {
    describe('retrieve', () => {
      it('Sends the correct request', () => {
        expressPlatby.identity.verificationReports.retrieve('vr_123');
        expect(expressPlatby.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/identity/verification_reports/vr_123',
          data: {},
          headers: {},
          settings: {},
        });
      });
    });

    describe('list', () => {
      it('Sends the correct request', () => {
        expressPlatby.identity.verificationReports.list();
        expect(expressPlatby.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/identity/verification_reports',
          data: {},
          headers: {},
          settings: {},
        });
      });
    });
  });
});
