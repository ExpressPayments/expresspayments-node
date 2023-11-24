'use strict';

const expressPayments = require('../testUtils.js').getSpyableExpressPayments();
const testUtils = require('../testUtils.js');
const expect = require('chai').expect;

const QUOTE_TEST_ID = 'qt_123';

describe('Quotes Resource', () => {
    describe('create', () => {
        it('Sends the correct request', () => {
            const params = {
                customer: 'cus_xyz',
                line_items: [
                    {price: 'price_abc', quantity: 5},
                    {price: 'price_xyz'},
                ],
            };
            expressPayments.quotes.create(params);
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/quotes',
                headers: {},
                data: params,
                settings: {},
            });
        });
    });

    describe('list', () => {
        it('Sends the correct request', () => {
            expressPayments.quotes.list();
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/quotes',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('retrieve', () => {
        it('Sends the correct request', () => {
            expressPayments.quotes.retrieve(QUOTE_TEST_ID);
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: `/v1/quotes/${QUOTE_TEST_ID}`,
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('update', () => {
        it('Sends the correct request', () => {
            expressPayments.quotes.update(QUOTE_TEST_ID, {
                metadata: {key: 'value'},
            });
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: `/v1/quotes/${QUOTE_TEST_ID}`,
                headers: {},
                data: {metadata: {key: 'value'}},
                settings: {},
            });
        });
    });

    describe('accept', () => {
        it('Sends the correct request', () => {
            expressPayments.quotes.accept(QUOTE_TEST_ID);
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: `/v1/quotes/${QUOTE_TEST_ID}/accept`,
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('cancel', () => {
        it('Sends the correct request', () => {
            expressPayments.quotes.cancel(QUOTE_TEST_ID);
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: `/v1/quotes/${QUOTE_TEST_ID}/cancel`,
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('finalize', () => {
        it('Sends the correct request', () => {
            expressPayments.quotes.finalizeQuote(QUOTE_TEST_ID);
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: `/v1/quotes/${QUOTE_TEST_ID}/finalize`,
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('listLineItems', () => {
        it('Sends the correct request', () => {
            expressPayments.quotes.listLineItems(QUOTE_TEST_ID);
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: `/v1/quotes/${QUOTE_TEST_ID}/line_items`,
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('listComputedUpfrontLineItems', () => {
        it('Sends the correct request', () => {
            expressPayments.quotes.listComputedUpfrontLineItems(QUOTE_TEST_ID);
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: `/v1/quotes/${QUOTE_TEST_ID}/computed_upfront_line_items`,
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('pdf', () => {
        it('success', (callback) => {
            const handleRequest = (req, res) => {
                res.write('ExpressPayments binary response');
                res.end();
            };

            testUtils.getTestServerExpressPayments(
                {},
                handleRequest,
                (err, expressPayments, closeServer) => {
                    if (err) {
                        return callback(err);
                    }

                    return expressPayments.quotes.pdf(
                        'foo_123',
                        {host: 'localhost'},
                        (err, res) => {
                            closeServer();
                            if (err) {
                                return callback(err);
                            }
                            const chunks = [];
                            res.on('data', (chunk) => chunks.push(chunk));
                            res.on('error', callback);
                            res.on('end', () => {
                                expect(
                                    Buffer.concat(chunks).toString()
                                ).to.equal('ExpressPayments binary response');
                                return callback();
                            });
                        }
                    );
                }
            );
        });

        it('failure', (callback) => {
            const handleRequest = (req, res) => {
                setTimeout(() => res.writeHead(500));
                setTimeout(
                    () =>
                        res.write(
                            '{"error": "api_error", "error_description": "this is bad"}'
                        ),
                    10
                );
                setTimeout(() => res.end(), 20);
            };

            testUtils.getTestServerExpressPayments(
                {},
                handleRequest,
                (err, expressPayments, closeServer) => {
                    if (err) {
                        return callback(err);
                    }

                    return expressPayments.quotes.pdf(
                        'foo_123',
                        {host: 'localhost'},
                        (err, res) => {
                            closeServer();
                            expect(err).to.exist;
                            expect(err.raw.type).to.equal('api_error');
                            expect(err.raw.message).to.equal('this is bad');
                            return callback();
                        }
                    );
                }
            );
        });
    });
});
