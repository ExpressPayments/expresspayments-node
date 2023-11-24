'use strict';

const expressPayments = require('../../testUtils.js').getSpyableExpressPayments();

const expect = require('chai').expect;

describe('Terminal', () => {
    describe('Readers Resource', () => {
        describe('retrieve', () => {
            it('Sends the correct request', () => {
                expressPayments.terminal.readers.retrieve('rdr_123');

                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'GET',
                    url: '/v1/terminal/readers/rdr_123',
                    headers: {},
                    data: {},
                    settings: {},
                });
            });
        });

        describe('create', () => {
            it('Sends the correct request', () => {
                expressPayments.terminal.readers.create({
                    registration_code: 'a-b-c',
                    label: 'name',
                });
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'POST',
                    url: '/v1/terminal/readers',
                    headers: {},
                    data: {
                        registration_code: 'a-b-c',
                        label: 'name',
                    },
                    settings: {},
                });
            });
        });

        describe('del', () => {
            it('Sends the correct request', () => {
                expressPayments.terminal.readers.del('rdr_123');
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'DELETE',
                    url: '/v1/terminal/readers/rdr_123',
                    headers: {},
                    data: {},
                    settings: {},
                });
            });
        });

        describe('update', () => {
            it('Sends the correct request', () => {
                expressPayments.terminal.readers.update('rdr_123', {
                    label: 'name',
                });
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'POST',
                    url: '/v1/terminal/readers/rdr_123',
                    headers: {},
                    data: {
                        label: 'name',
                    },
                    settings: {},
                });
            });
        });

        describe('list', () => {
            it('Sends the correct request', () => {
                expressPayments.terminal.readers.list();
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'GET',
                    url: '/v1/terminal/readers',
                    headers: {},
                    data: {},
                    settings: {},
                });
            });
        });
    });
});
