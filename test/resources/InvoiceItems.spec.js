'use strict';

const expressPayments = require('../testUtils.js').getSpyableExpressPayments();
const expect = require('chai').expect;

describe('InvoiceItems Resource', () => {
    describe('retrieve', () => {
        it('Sends the correct request', () => {
            expressPayments.invoiceItems.retrieve('invoiceItemIdTesting123');
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/invoiceitems/invoiceItemIdTesting123',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('create', () => {
        it('Sends the correct request', () => {
            expressPayments.invoiceItems.create({
                customer: 'cust_id_888',
            });
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/invoiceitems',
                headers: {},
                data: {customer: 'cust_id_888'},
                settings: {},
            });
        });
    });

    describe('update', () => {
        it('Sends the correct request', () => {
            expressPayments.invoiceItems.update('invoiceItemId1', {
                amount: 1900,
            });
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/invoiceitems/invoiceItemId1',
                headers: {},
                data: {amount: 1900},
                settings: {},
            });
        });
    });

    describe('del', () => {
        it('Sends the correct request', () => {
            expressPayments.invoiceItems.del('invoiceItemId2');
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'DELETE',
                url: '/v1/invoiceitems/invoiceItemId2',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('list', () => {
        it('Sends the correct request', () => {
            expressPayments.invoiceItems.list();
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/invoiceitems',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });
});
