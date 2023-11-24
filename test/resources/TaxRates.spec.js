'use strict';

const expressPayments = require('../testUtils.js').getSpyableExpressPayments();
const expect = require('chai').expect;

describe('TaxRates Resource', () => {
    describe('retrieve', () => {
        it('Sends the correct request', () => {
            expressPayments.taxRates.retrieve('txr_123');
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/tax_rates/txr_123',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('update', () => {
        it('Sends the correct request', () => {
            const data = {
                metadata: {a: '1234'},
            };
            expressPayments.taxRates.update('txr_123', data);
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/tax_rates/txr_123',
                headers: {},
                data,
                settings: {},
            });
        });
    });

    describe('create', () => {
        it('Sends the correct request', () => {
            const data = {
                display_name: 'name',
                inclusive: false,
                percentage: 10.15,
            };
            expressPayments.taxRates.create(data);

            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/tax_rates',
                headers: {},
                data,
                settings: {},
            });
        });
    });

    describe('list', () => {
        it('Sends the correct request', () => {
            expressPayments.taxRates.list();
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/tax_rates',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });
});
