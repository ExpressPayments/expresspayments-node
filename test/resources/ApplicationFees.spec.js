'use strict';

const expressPayments = require('../testUtils.js').getSpyableExpressPayments();
const expect = require('chai').expect;

describe('ApplicationFee Resource', () => {
    describe('list', () => {
        it('Sends the correct request', () => {
            expressPayments.applicationFees.list();
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/application_fees',
                data: {},
                headers: {},
                settings: {},
            });
        });
    });

    describe('refunds', () => {
        it('Sends the correct update request', () => {
            expressPayments.applicationFees.updateRefund(
                'appFeeIdExample3242',
                'refundIdExample2312',
                {metadata: {key: 'value'}}
            );
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url:
                    '/v1/application_fees/appFeeIdExample3242/refunds/refundIdExample2312',
                data: {metadata: {key: 'value'}},
                headers: {},
                settings: {},
            });
        });

        it('Sends the correct create request', () => {
            expressPayments.applicationFees.createRefund(
                'appFeeIdExample3242',
                {amount: 100}
            );
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/application_fees/appFeeIdExample3242/refunds',
                data: {amount: 100},
                headers: {},
                settings: {},
            });
        });

        it('Sends the correct list request', () => {
            expressPayments.applicationFees.listRefunds('appFeeIdExample3242');
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/application_fees/appFeeIdExample3242/refunds',
                data: {},
                headers: {},
                settings: {},
            });
        });

        it('Sends the correct retrieve request', () => {
            expressPayments.applicationFees.retrieveRefund(
                'appFeeIdExample3242',
                'refundIdExample2312'
            );
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url:
                    '/v1/application_fees/appFeeIdExample3242/refunds/refundIdExample2312',
                data: {},
                headers: {},
                settings: {},
            });
        });
    });
});
