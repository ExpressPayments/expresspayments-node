'use strict';

const expressPayments = require('../testUtils.js').getSpyableExpressPayments();
const expect = require('chai').expect;

describe('Dispute Resource', () => {
    describe('retrieve', () => {
        it('Sends the correct request', () => {
            expressPayments.disputes.retrieve('dp_123');
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/disputes/dp_123',
                data: {},
                headers: {},
                settings: {},
            });
        });
    });

    describe('list', () => {
        it('Sends the correct request', () => {
            expressPayments.disputes.list();
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/disputes',
                data: {},
                headers: {},
                settings: {},
            });
        });
    });

    describe('close', () => {
        it('Sends the correct request', () => {
            expressPayments.disputes.close('dp_123');
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/disputes/dp_123/close',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('update', () => {
        it('Sends the correct request', () => {
            expressPayments.disputes.update('dp_123', {
                evidence: {customer_name: 'Bob'},
            });
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/disputes/dp_123',
                headers: {},
                data: {evidence: {customer_name: 'Bob'}},
                settings: {},
            });
        });
    });
});
