'use strict';

const expressPayments = require('../testUtils.js').getSpyableExpressPayments();
const expect = require('chai').expect;

describe('Review Resource', () => {
    describe('retrieve', () => {
        it('Sends the correct request', () => {
            expressPayments.reviews.retrieve('prv_123');
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/reviews/prv_123',
                data: {},
                headers: {},
                settings: {},
            });
        });
    });

    describe('list', () => {
        it('Sends the correct request', () => {
            expressPayments.reviews.list();
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/reviews',
                data: {},
                headers: {},
                settings: {},
            });
        });
    });

    describe('approve', () => {
        it('Sends the correct request', () => {
            expressPayments.reviews.approve('prv_123', {amount: 23});
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/reviews/prv_123/approve',
                headers: {},
                data: {amount: 23},
                settings: {},
            });
        });
    });
});
