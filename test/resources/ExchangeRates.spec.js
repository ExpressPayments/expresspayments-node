'use strict';

const expressPayments = require('../testUtils.js').getSpyableExpressPayments();
const expect = require('chai').expect;

describe('ExchangeRates Resource', () => {
    describe('list', () => {
        it('Sends the correct request', () => {
            expressPayments.exchangeRates.list();
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/exchange_rates',
                data: {},
                headers: {},
                settings: {},
            });
        });
    });

    describe('retrieve', () => {
        it('Sends the correct request', () => {
            const currency = 'USD';
            expressPayments.exchangeRates.retrieve(currency);
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: `/v1/exchange_rates/${currency}`,
                data: {},
                headers: {},
                settings: {},
            });
        });
    });
});
