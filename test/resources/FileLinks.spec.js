'use strict';

const expressPayments = require('../testUtils.js').getSpyableExpressPayments();
const expect = require('chai').expect;

describe('FileLinks Resource', () => {
    describe('retrieve', () => {
        it('Sends the correct request', () => {
            expressPayments.fileLinks.retrieve('link_123');
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/file_links/link_123',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('create', () => {
        it('Sends the correct request', () => {
            expressPayments.fileLinks.create({file: 'file_123'});
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/file_links',
                headers: {},
                data: {file: 'file_123'},
                settings: {},
            });
        });
    });

    describe('update', () => {
        it('Sends the correct request', () => {
            expressPayments.fileLinks.update('link_123', {
                metadata: {key: 'value'},
            });
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/file_links/link_123',
                headers: {},
                data: {metadata: {key: 'value'}},
                settings: {},
            });
        });
    });

    describe('list', () => {
        it('Sends the correct request', () => {
            expressPayments.fileLinks.list();
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/file_links',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });
});
