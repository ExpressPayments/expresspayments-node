'use strict';

const expressPayments = require('../../testUtils.js').getSpyableExpressPayments();
const expect = require('chai').expect;

describe('Radar', () => {
    describe('EarlyFraudWarnings Resource', () => {
        describe('retrieve', () => {
            it('Sends the correct request', () => {
                expressPayments.radar.earlyFraudWarnings.retrieve('issfr_123');
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'GET',
                    url: '/v1/radar/early_fraud_warnings/issfr_123',
                    data: {},
                    headers: {},
                    settings: {},
                });
            });
        });

        describe('list', () => {
            it('Sends the correct request', () => {
                expressPayments.radar.earlyFraudWarnings.list();
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'GET',
                    url: '/v1/radar/early_fraud_warnings',
                    data: {},
                    headers: {},
                    settings: {},
                });
            });
        });
    });
});
