'use strict';

const expressPayments = require('../testUtils.js').getSpyableExpressPayments();
const expect = require('chai').expect;

describe('PromotionCodes Resource', () => {
    describe('retrieve', () => {
        it('Sends the correct request', () => {
            expressPayments.promotionCodes.retrieve('promo_123');
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/promotion_codes/promo_123',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('update', () => {
        it('Sends the correct request', () => {
            expressPayments.promotionCodes.update('promo_123', {
                metadata: {a: '1234'},
            });
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/promotion_codes/promo_123',
                headers: {},
                data: {
                    metadata: {a: '1234'},
                },
                settings: {},
            });
        });
    });

    describe('create', () => {
        it('Sends the correct request', () => {
            expressPayments.promotionCodes.create({
                coupon: 'co_123',
                code: 'MYCODE',
            });

            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/promotion_codes',
                headers: {},
                data: {
                    coupon: 'co_123',
                    code: 'MYCODE',
                },
                settings: {},
            });
        });
    });

    describe('list', () => {
        it('Sends the correct request', () => {
            expressPayments.promotionCodes.list();
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/promotion_codes',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });
});
