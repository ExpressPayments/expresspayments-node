'use strict';

const expressPayments = require('../testUtils.js').getSpyableExpressPayments();
const expect = require('chai').expect;

describe('Invoices Resource', () => {
    describe('retrieve', () => {
        it('Sends the correct request', () => {
            expressPayments.invoices.retrieve('in_123');
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/invoices/in_123',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('create', () => {
        it('Sends the correct request', () => {
            expressPayments.invoices.create({application_fee: 111});
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/invoices',
                headers: {},
                data: {application_fee: 111},
                settings: {},
            });
        });
    });

    describe('list', () => {
        it('Sends the correct request', () => {
            expressPayments.invoices.list({count: 25});
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/invoices?count=25',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('update', () => {
        it('Sends the correct request', () => {
            expressPayments.invoices.update('in_123', {application_fee: 200});
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/invoices/in_123',
                headers: {},
                data: {application_fee: 200},
                settings: {},
            });
        });
    });

    describe('del', () => {
        it('Sends the correct request', () => {
            expressPayments.invoices.del('in_123');
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'DELETE',
                url: '/v1/invoices/in_123',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('listLineItems', () => {
        it('Sends the correct request', () => {
            expressPayments.invoices.listLineItems('in_123');
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/invoices/in_123/lines',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('listUpcomingLines', () => {
        it('Sends the correct request', () => {
            expressPayments.invoices.listUpcomingLines();
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/invoices/upcoming/lines',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('retrieveUpcoming', () => {
        it('Sends the correct request', () => {
            expressPayments.invoices.retrieveUpcoming({
                customer: 'cus_abc',
                subscription_items: [{plan: 'potato'}, {plan: 'rutabaga'}],
            });

            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url:
                    '/v1/invoices/upcoming?customer=cus_abc&subscription_items[0][plan]=potato&subscription_items[1][plan]=rutabaga',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('listUpcomingLineItems', () => {
        it('Sends the correct request', () => {
            expressPayments.invoices.listUpcomingLines({
                customer: 'cus_abc',
                subscription_items: [{plan: 'potato'}, {plan: 'rutabaga'}],
                limit: 5,
            });

            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url:
                    '/v1/invoices/upcoming/lines?customer=cus_abc&subscription_items[0][plan]=potato&subscription_items[1][plan]=rutabaga&limit=5',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('finalizeInvoice', () => {
        it('Sends the correct request', () => {
            expressPayments.invoices.finalizeInvoice('in_123');
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/invoices/in_123/finalize',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('mark uncollectible', () => {
        it('Sends the correct request', () => {
            expressPayments.invoices.markUncollectible('in_123');
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/invoices/in_123/mark_uncollectible',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('pay', () => {
        it('Sends the correct request', () => {
            expressPayments.invoices.pay('in_123', {
                source: 'tok_FooBar',
            });
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/invoices/in_123/pay',
                headers: {},
                data: {source: 'tok_FooBar'},
                settings: {},
            });
        });
    });

    describe('sendInvoice', () => {
        it('Sends the correct request', () => {
            expressPayments.invoices.sendInvoice('in_123');
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/invoices/in_123/send',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('voidInvoice', () => {
        it('Sends the correct request', () => {
            expressPayments.invoices.voidInvoice('in_123');
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/invoices/in_123/void',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });
});
