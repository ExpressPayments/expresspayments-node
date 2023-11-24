'use strict';

const expressPayments = require('../testUtils.js').getSpyableExpressPayments();
const expect = require('chai').expect;

describe('TaxCodes Resource', () => {
    describe('retrieve', () => {
        it('Sends the correct request', () => {
            expressPayments.taxCodes.retrieve('txcd_123');
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/tax_codes/txcd_123',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('list', () => {
        it('Sends the correct request', () => {
            expressPayments.taxCodes.list();
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/tax_codes',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });
});
