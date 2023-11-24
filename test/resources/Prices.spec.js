'use strict';

const expressPayments = require('../testUtils.js').getSpyableExpressPayments();
const expect = require('chai').expect;

describe('Plans Resource', () => {
    describe('retrieve', () => {
        it('Sends the correct request', () => {
            expressPayments.prices.retrieve('price_123');
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/prices/price_123',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('create', () => {
        it('Sends the correct request', () => {
            expressPayments.prices.create({
                unit_amount: 200,
                currency: 'usd',
                recurring: {
                    interval: 'month',
                },
                product_data: {
                    name: 'Product name',
                },
            });
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/prices',
                headers: {},
                data: {
                    unit_amount: 200,
                    currency: 'usd',
                    recurring: {
                        interval: 'month',
                    },
                    product_data: {
                        name: 'Product name',
                    },
                },
                settings: {},
            });
        });
    });

    describe('update', () => {
        it('Sends the correct request', () => {
            expressPayments.prices.update('price_123', {
                active: false,
            });
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/prices/price_123',
                headers: {},
                data: {active: false},
                settings: {},
            });
        });
    });

    describe('list', () => {
        it('Sends the correct request', () => {
            expressPayments.prices.list();
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/prices',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });
});
