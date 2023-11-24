'use strict';

const expressPayments = require('../testUtils.js').getSpyableExpressPayments();
const expect = require('chai').expect;

describe('AccountLinks Resource', () => {
    describe('create', () => {
        it('Sends the correct request', () => {
            expressPayments.accountLinks.create({
                account: 'acct_123',
                failure_url: 'https://epayments.network/failure',
                success_url: 'https://epayments.network/success',
                type: 'custom_account_verification',
            });

            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/account_links',
                headers: {},
                data: {
                    account: 'acct_123',
                    failure_url: 'https://epayments.network/failure',
                    success_url: 'https://epayments.network/success',
                    type: 'custom_account_verification',
                },
                settings: {},
            });
        });
    });
});
