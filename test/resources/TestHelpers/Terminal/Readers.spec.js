'use strict';

const expressPayments = require('../../../testUtils.js').getSpyableExpressPayments();

const expect = require('chai').expect;

describe('Terminal', () => {
    describe('Readers Resource', () => {
        describe('update', () => {
            it('Sends the correct request', () => {
                expressPayments.testHelpers.terminal.readers.presentPaymentMethod(
                    'rdr_123'
                );
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'POST',
                    url:
                        '/v1/test_helpers/terminal/readers/rdr_123/present_payment_method',
                    headers: {},
                    data: {},
                    settings: {},
                });
            });
        });
    });
});
