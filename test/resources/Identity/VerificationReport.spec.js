'use strict';

const expressPayments = require('../../testUtils.js').getSpyableExpressPayments();
const expect = require('chai').expect;

describe('Identity', () => {
    describe('VerificationReport Resource', () => {
        describe('retrieve', () => {
            it('Sends the correct request', () => {
                expressPayments.identity.verificationReports.retrieve('vr_123');
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
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
                expressPayments.identity.verificationReports.list();
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
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
