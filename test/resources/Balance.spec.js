'use strict';

const expressPayments = require('../testUtils.js').getSpyableExpressPayments();
const expect = require('chai').expect;

describe('Balance Resource', () => {
    describe('retrieve', () => {
        it('Sends the correct request', () => {
            expressPayments.balance.retrieve();
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/balance',
                data: {},
                headers: {},
                settings: {},
            });
        });

        it('Sends the correct request [with specified auth]', () => {
            expressPayments.balance.retrieve(
                'aGN0bIwXnHdw5645VABjPdSn8nWY7G11'
            );
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/balance',
                data: {},
                auth: 'aGN0bIwXnHdw5645VABjPdSn8nWY7G11',
                headers: {},
                settings: {},
            });
        });
    });
});
