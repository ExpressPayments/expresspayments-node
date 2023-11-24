'use strict';

const expressPayments = require('../testUtils.js').getSpyableExpressPayments();
const expect = require('chai').expect;

describe('CreditNotes Resource', () => {
    describe('retrieve', () => {
        it('Sends the correct request', () => {
            expressPayments.creditNotes.retrieve('cn_123');
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/credit_notes/cn_123',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('create', () => {
        it('Sends the correct request', () => {
            const data = {
                amount: 100,
                invoice: 'in_123',
                reason: 'duplicate',
            };
            expressPayments.creditNotes.create(data);
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/credit_notes',
                headers: {},
                data,
                settings: {},
            });
        });
    });

    describe('list', () => {
        it('Sends the correct request', () => {
            expressPayments.creditNotes.list({count: 25});
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/credit_notes?count=25',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('listLineItems', () => {
        it('Sends the correct request', () => {
            expressPayments.creditNotes.listLineItems('cn_123');
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/credit_notes/cn_123/lines',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('listPreviewLineItems', () => {
        it('Sends the correct request', () => {
            expressPayments.creditNotes.listPreviewLineItems();
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/credit_notes/preview/lines',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('update', () => {
        it('Sends the correct request', () => {
            expressPayments.creditNotes.update('cn_123', {
                application_fee: 200,
            });
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/credit_notes/cn_123',
                headers: {},
                data: {application_fee: 200},
                settings: {},
            });
        });
    });

    describe('preview', () => {
        it('Sends the correct request', () => {
            const data = {
                amount: 100,
                invoice: 'in_123',
            };
            expressPayments.creditNotes.preview(data);
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/credit_notes/preview?amount=100&invoice=in_123',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('voidCreditNote', () => {
        it('Sends the correct request', () => {
            expressPayments.creditNotes.voidCreditNote('cn_123');
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/credit_notes/cn_123/void',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });
});
