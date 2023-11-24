'use strict';

const expressPayments = require('../testUtils.js').getSpyableExpressPayments();
const expect = require('chai').expect;

const MANDATE_TEST_ID = 'mandate_123';

describe('Mandate Resource', () => {
    describe('retrieve', () => {
        it('Sends the correct request', () => {
            expressPayments.mandates.retrieve(MANDATE_TEST_ID);
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: `/v1/mandates/${MANDATE_TEST_ID}`,
                data: {},
                headers: {},
                settings: {},
            });
        });
    });
});
