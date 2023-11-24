'use strict';

const expressPayments = require('../testUtils.js').getSpyableExpressPayments();
const expect = require('chai').expect;

describe('ApplePayDomains Resource', () => {
    describe('retrieve', () => {
        it('Sends the correct request', () => {
            expressPayments.applePayDomains.retrieve('apwc_retrieve');
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/apple_pay/domains/apwc_retrieve',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('del', () => {
        it('Sends the correct request', () => {
            expressPayments.applePayDomains.del('apwc_delete');
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'DELETE',
                url: '/v1/apple_pay/domains/apwc_delete',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('create', () => {
        it('Sends the correct request', () => {
            expressPayments.applePayDomains.create({
                domain_name: 'example.com',
            });

            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/apple_pay/domains',
                headers: {},
                data: {
                    domain_name: 'example.com',
                },
                settings: {},
            });
        });
    });

    describe('list', () => {
        it('Sends the correct request', () => {
            expressPayments.applePayDomains.list();
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/apple_pay/domains',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });
});
