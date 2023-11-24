'use strict';

const expressPayments = require('../testUtils.js').getSpyableExpressPayments();
const expect = require('chai').expect;

describe('Events Resource', () => {
    describe('retrieve', () => {
        it('Sends the correct request', () => {
            expressPayments.events.retrieve('eventIdBaz');
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/events/eventIdBaz',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('list', () => {
        it('Sends the correct request', () => {
            expressPayments.events.list({count: 25});
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/events?count=25',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });
});
