'use strict';

const expressPayments = require('../testUtils.js').getSpyableExpressPayments();
const expect = require('chai').expect;

describe('Product Resource', () => {
    describe('retrieve', () => {
        it('Sends the correct request', () => {
            expressPayments.products.retrieve('productIdFoo123');
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/products/productIdFoo123',
                data: {},
                headers: {},
                settings: {},
            });
        });
    });

    describe('create', () => {
        it('Sends the correct request', () => {
            expressPayments.products.create({
                name: 'Llamas',
                active: true,
                type: 'good',
            });
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/products',
                data: {
                    name: 'Llamas',
                    active: true,
                    type: 'good',
                },
                headers: {},
                settings: {},
            });
        });
    });

    describe('list', () => {
        it('Sends the correct request', () => {
            expressPayments.products.list({
                limit: 3,
            });
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/products?limit=3',
                data: {},
                headers: {},
                settings: {},
            });
        });

        it('Supports filtering by shippable', () => {
            expressPayments.products.list({
                shippable: true,
            });
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/products?shippable=true',
                data: {},
                headers: {},
                settings: {},
            });
        });
    });

    describe('update', () => {
        it('Sends the correct request', () => {
            expressPayments.products.update('productIdFoo3242', {
                caption: 'test',
            });
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/products/productIdFoo3242',
                headers: {},
                data: {caption: 'test'},
                settings: {},
            });
        });
    });

    describe('del', () => {
        it('Sends the correct request', () => {
            expressPayments.products.del('productIdFoo3242');
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'DELETE',
                url: '/v1/products/productIdFoo3242',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });
});
