'use strict';

const expressPayments = require('../../testUtils.js').getSpyableExpressPayments();

const expect = require('chai').expect;

describe('BillingPortal', () => {
    describe('Configurations Resource', () => {
        describe('create', () => {
            it('Sends the correct request', () => {
                const params = {
                    business_profile: {
                        privacy_policy_url: 'https://example.com/privacy',
                        terms_of_service_url: 'https://example.com/tos',
                    },
                    features: {
                        customer_update: {
                            allowed_updates: ['address'],
                            enabled: true,
                        },
                    },
                };
                expressPayments.billingPortal.configurations.create(params);
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'POST',
                    url: '/v1/billing_portal/configurations',
                    headers: {},
                    data: params,
                    settings: {},
                });
            });
        });
        describe('update', () => {
            it('Sends the correct request', () => {
                const params = {
                    active: false,
                };
                expressPayments.billingPortal.configurations.update(
                    'bpc_123',
                    params
                );
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'POST',
                    url: '/v1/billing_portal/configurations/bpc_123',
                    headers: {},
                    data: params,
                    settings: {},
                });
            });
        });
        describe('retrieve', () => {
            it('Sends the correct request', () => {
                expressPayments.billingPortal.configurations.retrieve(
                    'bpc_123'
                );
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'GET',
                    url: '/v1/billing_portal/configurations/bpc_123',
                    headers: {},
                    data: {},
                    settings: {},
                });
            });
        });
        describe('list', () => {
            it('Sends the correct request', () => {
                expressPayments.billingPortal.configurations.list();
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'GET',
                    url: '/v1/billing_portal/configurations',
                    headers: {},
                    data: {},
                    settings: {},
                });
            });
        });
    });
});
