'use strict';

const expressPayments = require('../testUtils.js').getSpyableExpressPayments();
const expect = require('chai').expect;

const PAYMENT_INTENT_TEST_ID = 'pi_123';

describe('Payment Intents Resource', () => {
    describe('create', () => {
        it('Sends the correct request', () => {
            const params = {
                amount: 200,
                currency: 'usd',
                payment_method_types: ['card'],
            };
            expressPayments.paymentIntents.create(params);
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/payment_intents',
                headers: {},
                data: params,
                settings: {},
            });
        });
    });

    describe('list', () => {
        it('Sends the correct request', () => {
            expressPayments.paymentIntents.list();
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/payment_intents',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('retrieve', () => {
        it('Sends the correct request', () => {
            expressPayments.paymentIntents.retrieve(PAYMENT_INTENT_TEST_ID);
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: `/v1/payment_intents/${PAYMENT_INTENT_TEST_ID}`,
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('update', () => {
        it('Sends the correct request', () => {
            expressPayments.paymentIntents.update(PAYMENT_INTENT_TEST_ID, {
                metadata: {key: 'value'},
            });
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: `/v1/payment_intents/${PAYMENT_INTENT_TEST_ID}`,
                headers: {},
                data: {metadata: {key: 'value'}},
                settings: {},
            });
        });
    });

    describe('cancel', () => {
        it('Sends the correct request', () => {
            expressPayments.paymentIntents.cancel(PAYMENT_INTENT_TEST_ID);
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: `/v1/payment_intents/${PAYMENT_INTENT_TEST_ID}/cancel`,
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('capture', () => {
        it('Sends the correct request', () => {
            expressPayments.paymentIntents.capture(PAYMENT_INTENT_TEST_ID);
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: `/v1/payment_intents/${PAYMENT_INTENT_TEST_ID}/capture`,
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('confirm', () => {
        it('Sends the correct request', () => {
            expressPayments.paymentIntents.confirm(PAYMENT_INTENT_TEST_ID);
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: `/v1/payment_intents/${PAYMENT_INTENT_TEST_ID}/confirm`,
                headers: {},
                data: {},
                settings: {},
            });
        });
    });
});
