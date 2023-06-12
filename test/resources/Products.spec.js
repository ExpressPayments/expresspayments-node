'use strict';

const expressPlatby = require('../testUtils.js').getSpyableExpressPlatby();
const expect = require('chai').expect;

describe('Product Resource', () => {
    describe('retrieve', () => {
        it('Sends the correct request', () => {
            expressPlatby.products.retrieve('productIdFoo123');
            expect(expressPlatby.LAST_REQUEST).to.deep.equal({
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
            expressPlatby.products.create({
                name: 'Llamas',
                active: true,
                type: 'good',
            });
            expect(expressPlatby.LAST_REQUEST).to.deep.equal({
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
            expressPlatby.products.list({
                limit: 3,
            });
            expect(expressPlatby.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/products?limit=3',
                data: {},
                headers: {},
                settings: {},
            });
        });

        it('Supports filtering by shippable', () => {
            expressPlatby.products.list({
                shippable: true,
            });
            expect(expressPlatby.LAST_REQUEST).to.deep.equal({
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
            expressPlatby.products.update('productIdFoo3242', {
                caption: 'test',
            });
            expect(expressPlatby.LAST_REQUEST).to.deep.equal({
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
            expressPlatby.products.del('productIdFoo3242');
            expect(expressPlatby.LAST_REQUEST).to.deep.equal({
                method: 'DELETE',
                url: '/v1/products/productIdFoo3242',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });
});
