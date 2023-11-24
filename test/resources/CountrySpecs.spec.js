'use strict';

const expressPayments = require('../testUtils.js').getSpyableExpressPayments();
const expect = require('chai').expect;

describe('CountrySpecs Resource', () => {
    describe('list', () => {
        it('Sends the correct request', () => {
            expressPayments.countrySpecs.list();
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/country_specs',
                data: {},
                headers: {},
                settings: {},
            });
        });
    });

    describe('retrieve', () => {
        it('Sends the correct request', () => {
            const country = 'US';
            expressPayments.countrySpecs.retrieve(country);
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: `/v1/country_specs/${country}`,
                data: {},
                headers: {},
                settings: {},
            });
        });
    });
});
