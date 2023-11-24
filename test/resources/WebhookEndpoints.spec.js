'use strict';

const expressPayments = require('../testUtils.js').getSpyableExpressPayments();
const expect = require('chai').expect;

describe('WebhookEndpoints Resource', () => {
    describe('retrieve', () => {
        it('Sends the correct request', () => {
            expressPayments.webhookEndpoints.retrieve('we_123');
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/webhook_endpoints/we_123',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('del', () => {
        it('Sends the correct request', () => {
            expressPayments.webhookEndpoints.del('we_123');
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'DELETE',
                url: '/v1/webhook_endpoints/we_123',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('update', () => {
        it('Sends the correct request', () => {
            expressPayments.webhookEndpoints.update('we_123', {
                enabled_events: ['charge.succeeded'],
            });
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/webhook_endpoints/we_123',
                headers: {},
                data: {
                    enabled_events: ['charge.succeeded'],
                },
                settings: {},
            });
        });
    });

    describe('create', () => {
        it('Sends the correct request', () => {
            expressPayments.webhookEndpoints.create({
                enabled_events: ['charge.succeeded'],
                url: 'https://epayments.network',
            });

            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/webhook_endpoints',
                headers: {},
                data: {
                    enabled_events: ['charge.succeeded'],
                    url: 'https://epayments.network',
                },
                settings: {},
            });
        });
    });

    describe('list', () => {
        it('Sends the correct request', () => {
            expressPayments.webhookEndpoints.list();
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/webhook_endpoints',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });
});
