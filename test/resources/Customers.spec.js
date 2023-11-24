'use strict';

const expressPayments = require('../testUtils.js').getSpyableExpressPayments();
const expect = require('chai').expect;

const TEST_AUTH_KEY = 'aGN0bIwXnHdw5645VABjPdSn8nWY7G11';

describe('Customers Resource', () => {
    describe('retrieve', () => {
        it('Sends the correct request', () => {
            expressPayments.customers.retrieve('cus_123');
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/customers/cus_123',
                headers: {},
                data: {},
                settings: {},
            });
        });

        it('Sends the correct request [with specified auth]', () => {
            expressPayments.customers.retrieve('cus_123', TEST_AUTH_KEY);
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/customers/cus_123',
                headers: {},
                data: {},
                auth: TEST_AUTH_KEY,
                settings: {},
            });
        });
    });

    describe('create', () => {
        it('Sends the correct request', () => {
            expressPayments.customers.create({description: 'Some customer'});
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/customers',
                headers: {},
                data: {description: 'Some customer'},
                settings: {},
            });
        });

        it('Sends the correct request [with specified auth]', () => {
            expressPayments.customers.create(
                {description: 'Some customer'},
                TEST_AUTH_KEY
            );
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/customers',
                headers: {},
                data: {description: 'Some customer'},
                auth: TEST_AUTH_KEY,
                settings: {},
            });
        });

        it('Sends the correct request [with specified auth and no body]', () => {
            expressPayments.customers.create(TEST_AUTH_KEY);
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/customers',
                headers: {},
                data: {},
                auth: TEST_AUTH_KEY,
                settings: {},
            });
        });

        it('Sends the correct request [with specified idempotencyKey in options]', () => {
            expressPayments.customers.create(
                {description: 'Some customer'},
                {idempotencyKey: 'foo'}
            );
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/customers',
                headers: {'Idempotency-Key': 'foo'},
                data: {description: 'Some customer'},
                settings: {},
            });
        });

        it('Sends the correct request [with specified auth in options]', () => {
            expressPayments.customers.create(
                {description: 'Some customer'},
                {apiKey: TEST_AUTH_KEY}
            );
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/customers',
                headers: {},
                data: {description: 'Some customer'},
                auth: TEST_AUTH_KEY,
                settings: {},
            });
        });

        it('Sends the correct request [with specified auth and idempotent key in options]', () => {
            expressPayments.customers.create(
                {description: 'Some customer'},
                {apiKey: TEST_AUTH_KEY, idempotencyKey: 'foo'}
            );
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/customers',
                headers: {'Idempotency-Key': 'foo'},
                data: {description: 'Some customer'},
                auth: TEST_AUTH_KEY,
                settings: {},
            });
        });

        it('Sends the correct request [with specified auth in options and no body]', () => {
            expressPayments.customers.create({apiKey: TEST_AUTH_KEY});
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/customers',
                headers: {},
                data: {},
                auth: TEST_AUTH_KEY,
                settings: {},
            });
        });
    });

    describe('update', () => {
        it('Sends the correct request', () => {
            expressPayments.customers.update('cus_123', {
                description: 'Foo "baz"',
            });
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/customers/cus_123',
                headers: {},
                data: {description: 'Foo "baz"'},
                settings: {},
            });
        });
    });

    describe('del', () => {
        it('Sends the correct request', () => {
            expressPayments.customers.del('cus_123');
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'DELETE',
                url: '/v1/customers/cus_123',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('list', () => {
        it('Sends the correct request', () => {
            expressPayments.customers.list();
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/customers',
                headers: {},
                data: {},
                settings: {},
            });
        });

        it('Sends the correct request [with specified auth]', () => {
            expressPayments.customers.list(TEST_AUTH_KEY);
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/customers',
                headers: {},
                data: {},
                auth: TEST_AUTH_KEY,
                settings: {},
            });
        });
    });

    describe('Discount methods', () => {
        describe('deleteDiscount', () => {
            it('Sends the correct request', () => {
                expressPayments.customers.deleteDiscount('cus_123');
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'DELETE',
                    url: '/v1/customers/cus_123/discount',
                    headers: {},
                    data: {},
                    settings: {},
                });
            });
        });
    });

    describe('Source methods', () => {
        describe('retrieveSource', () => {
            it('Sends the correct request', () => {
                expressPayments.customers.retrieveSource('cus_123', 'card_123');
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'GET',
                    url: '/v1/customers/cus_123/sources/card_123',
                    headers: {},
                    data: {},
                    settings: {},
                });
            });

            it('Sends the correct request [with specified auth]', () => {
                expressPayments.customers.retrieveSource(
                    'cus_123',
                    'card_123',
                    TEST_AUTH_KEY
                );
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'GET',
                    url: '/v1/customers/cus_123/sources/card_123',
                    headers: {},
                    data: {},
                    auth: TEST_AUTH_KEY,
                    settings: {},
                });
            });
        });

        describe('createSource', () => {
            it('Sends the correct request', () => {
                const params = {
                    source: {
                        object: 'card',
                        number: '123456',
                        exp_month: '12',
                        exp_year: '30',
                    },
                };
                expressPayments.customers.createSource('cus_123', params);
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'POST',
                    url: '/v1/customers/cus_123/sources',
                    headers: {},
                    data: params,
                    settings: {},
                });
            });

            it('Sends the correct request [with specified auth]', () => {
                const params = {
                    source: {
                        object: 'card',
                        number: '123456',
                        exp_month: '12',
                        exp_year: '30',
                    },
                };
                expressPayments.customers.createSource(
                    'cus_123',
                    params,
                    TEST_AUTH_KEY
                );
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'POST',
                    url: '/v1/customers/cus_123/sources',
                    headers: {},
                    data: params,
                    auth: TEST_AUTH_KEY,
                    settings: {},
                });
            });
        });

        describe('updateSource', () => {
            it('Sends the correct request', () => {
                expressPayments.customers.updateSource('cus_123', 'card_123', {
                    name: 'Bob M. Baz',
                });
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'POST',
                    url: '/v1/customers/cus_123/sources/card_123',
                    headers: {},
                    data: {name: 'Bob M. Baz'},
                    settings: {},
                });
            });
        });

        describe('deleteSource', () => {
            it('Sends the correct request', () => {
                expressPayments.customers.deleteSource('cus_123', 'card_123');
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'DELETE',
                    url: '/v1/customers/cus_123/sources/card_123',
                    headers: {},
                    data: {},
                    settings: {},
                });
            });

            it('Sends the correct request [with specified auth]', () => {
                expressPayments.customers.deleteSource(
                    'cus_123',
                    'card_123',
                    TEST_AUTH_KEY
                );
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'DELETE',
                    url: '/v1/customers/cus_123/sources/card_123',
                    headers: {},
                    data: {},
                    auth: TEST_AUTH_KEY,
                    settings: {},
                });
            });
        });

        describe('listSources', () => {
            it('Sends the correct request', () => {
                expressPayments.customers.listSources('cus_123');
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'GET',
                    url: '/v1/customers/cus_123/sources',
                    headers: {},
                    data: {},
                    settings: {},
                });
            });

            it('Sends the correct request [with specified auth]', () => {
                expressPayments.customers.listSources('cus_123', TEST_AUTH_KEY);
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'GET',
                    url: '/v1/customers/cus_123/sources',
                    headers: {},
                    data: {},
                    auth: TEST_AUTH_KEY,
                    settings: {},
                });
            });
        });

        describe('verifySource', () => {
            it('Sends the correct request', () => {
                const data = {amounts: [32, 45]};

                expressPayments.customers.verifySource(
                    'cus_123',
                    'card_123',
                    data,
                    TEST_AUTH_KEY
                );
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'POST',
                    url: '/v1/customers/cus_123/sources/card_123/verify',
                    headers: {},
                    data,
                    auth: TEST_AUTH_KEY,
                    settings: {},
                });
            });
        });
    });

    describe('TaxId methods', () => {
        describe('retrieveTaxId', () => {
            it('Sends the correct request', () => {
                expressPayments.customers.retrieveTaxId('cus_123', 'txi_123');
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'GET',
                    url: '/v1/customers/cus_123/tax_ids/txi_123',
                    headers: {},
                    data: {},
                    settings: {},
                });
            });
        });

        describe('createTaxId', () => {
            it('Sends the correct request', () => {
                const data = {
                    type: 'eu_vat',
                    value: '11111',
                };
                expressPayments.customers.createTaxId('cus_123', data);
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'POST',
                    url: '/v1/customers/cus_123/tax_ids',
                    headers: {},
                    settings: {},
                    data,
                });
            });
        });

        describe('deleteTaxId', () => {
            it('Sends the correct request', () => {
                expressPayments.customers.deleteTaxId('cus_123', 'txi_123');
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'DELETE',
                    url: '/v1/customers/cus_123/tax_ids/txi_123',
                    headers: {},
                    data: {},
                    settings: {},
                });
            });
        });

        describe('listTaxIds', () => {
            it('Sends the correct request', () => {
                expressPayments.customers.listTaxIds('cus_123');
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'GET',
                    url: '/v1/customers/cus_123/tax_ids',
                    headers: {},
                    data: {},
                    settings: {},
                });
            });
        });
    });

    describe('BalanceTransaction methods', () => {
        describe('retrieveBalanceTransaction', () => {
            it('Sends the correct request', () => {
                expressPayments.customers.retrieveBalanceTransaction(
                    'cus_123',
                    'cbtxn_123'
                );
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'GET',
                    url: '/v1/customers/cus_123/balance_transactions/cbtxn_123',
                    headers: {},
                    data: {},
                    settings: {},
                });
            });
        });

        describe('createBalanceTransaction', () => {
            it('Sends the correct request', () => {
                expressPayments.customers.createBalanceTransaction('cus_123', {
                    amount: 123,
                    currency: 'usd',
                });
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'POST',
                    url: '/v1/customers/cus_123/balance_transactions',
                    headers: {},
                    data: {amount: 123, currency: 'usd'},
                    settings: {},
                });
            });
        });

        describe('updateBalanceTransaction', () => {
            it('Sends the correct request', () => {
                expressPayments.customers.updateBalanceTransaction(
                    'cus_123',
                    'cbtxn_123',
                    {
                        description: 'description',
                    }
                );
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'POST',
                    url: '/v1/customers/cus_123/balance_transactions/cbtxn_123',
                    headers: {},
                    data: {description: 'description'},
                    settings: {},
                });
            });
        });

        describe('listBalanceTransactions', () => {
            it('Sends the correct request', () => {
                expressPayments.customers.listBalanceTransactions('cus_123');
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'GET',
                    url: '/v1/customers/cus_123/balance_transactions',
                    headers: {},
                    data: {},
                    settings: {},
                });
            });
        });
    });
});
