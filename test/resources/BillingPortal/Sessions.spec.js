'use strict';

const expressPayments = require('../../testUtils.js').getSpyableExpressPayments();

const expect = require('chai').expect;

describe('BillingPortal', () => {
    describe('Sessions Resource', () => {
        describe('create', () => {
            it('Sends the correct request', () => {
                const params = {
                    customer: 'cus_123',
                    return_url: 'https://epayments.network/return',
                };
                expressPayments.billingPortal.sessions.create(params);

                expect(expressPayments.LAST_REQUEST).to.deep.equal({
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
