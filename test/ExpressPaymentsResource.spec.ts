// @ts-nocheck
import {expect} from 'chai';
import * as nock from 'nock';
import {ExpressPaymentsResource} from '../src/ExpressPaymentsResource';
import {
    getSpyableExpressPayments,
    getTestServerExpressPayments,
} from './testUtils.js';

const expressPayments = getSpyableExpressPayments();
const expressPaymentsMethod = ExpressPaymentsResource.method;

describe('ExpressPaymentsResource', () => {
    describe('createResourcePathWithSymbols', () => {
        let testResource;
        before(() => {
            testResource = new (ExpressPaymentsResource.extend({
                path: 'widgets',
                create: expressPaymentsMethod({
                    method: 'POST',
                    path: '',
                }),
            }))(expressPayments);
        });
        it('Generates a path when there is a symbol', () => {
            testResource.create({});
            const path = testResource.createResourcePathWithSymbols('{id}');
            expect(path).to.equal('/widgets/{id}');
        });

        it('Generates a path when there is nothing beyond the resource path', () => {
            testResource.create({});
            const path = testResource.createResourcePathWithSymbols('');
            // This explicitly shouldn't have a trailing slash.
            expect(path).to.equal('/widgets');
        });

        it('Handles accidental double slashes', () => {
            testResource.create({});
            const path = testResource.createResourcePathWithSymbols('/{id}');
            expect(path).to.equal('/widgets/{id}');
        });
    });

    describe('_joinUrlParts', () => {
        it('includes trailing empty values', () => {
            const path = expressPayments.invoices._joinUrlParts(['a', '']);
            expect(path).to.equal('a/');
        });

        it('joins parts', () => {
            const path = expressPayments.invoices._joinUrlParts(['a', 'b', 'c']);
            expect(path).to.equal('a/b/c');
        });

        it('handles redundant slashes', () => {
            const path = expressPayments.invoices._joinUrlParts([
                '/v1/',
                '/customers/',
                '/{id}',
            ]);
            expect(path).to.equal('/v1/customers/{id}');
        });
    });

    describe('method with fullPath', () => {
        it('interpolates in parameters', (callback) => {
            const handleRequest = (req, res) => {
                expect(req.url).to.equal('/v1/parent/hello/child/world');

                // Write back JSON to close out the server.
                res.write('{}');
                res.end();
            };

            getTestServerExpressPayments(
                {},
                handleRequest,
                (err, expressPayments, closeServer) => {
                    const resource = new (ExpressPaymentsResource.extend({
                        test: expressPaymentsMethod({
                            method: 'GET',
                            fullPath: '/v1/parent/{param1}/child/{param2}',
                        }),
                    }))(expressPayments);

                    return resource.test('hello', 'world', (err, res) => {
                        closeServer();
                        // Spot check that we received a response.
                        expect(res).to.deep.equal({});
                        return callback(err);
                    });
                }
            );
        });
    });

    describe('custom host on method', () => {
        const makeResource = (expressPayments) => {
            return new (ExpressPaymentsResource.extend({
                path: 'resourceWithHost',

                testMethod: expressPaymentsMethod({
                    method: 'GET',
                    host: 'some.host.epayments.network',
                }),
            }))(expressPayments);
        };

        it('is not impacted by the global host', (done) => {
            const expressPayments = require('../src/expresspayments.cjs.node.js')(
                'sk_test',
                {
                    host: 'bad.host.epayments.network',
                }
            );

            const scope = nock('https://some.host.epayments.network')
                .get('/v1/resourceWithHost')
                .reply(200, '{}');

            makeResource(expressPayments).testMethod({}, (err, response) => {
                done(err);
                scope.done();
            });
        });

        it('still lets users override the host on a per-request basis', (done) => {
            const expressPayments = require('../src/expresspayments.cjs.node.js')(
                'sk_test'
            );

            const scope = nock('https://some.other.host.epayments.network')
                .get('/v1/resourceWithHost')
                .reply(200, '{}');

            makeResource(expressPayments).testMethod(
                {},
                {host: 'some.other.host.epayments.network'},
                (err, response) => {
                    done(err);
                    scope.done();
                }
            );
        });
    });

    describe('method with fullPath', () => {
        it('interpolates in parameters', (callback) => {
            const handleRequest = (req, res) => {
                expect(req.url).to.equal('/v1/parent/hello/child/world');

                // Write back JSON to close out the server.
                res.write('{}');
                res.end();
            };

            getTestServerExpressPayments(
                {},
                handleRequest,
                (err, expressPayments, closeServer) => {
                    const resource = new (ExpressPaymentsResource.extend({
                        test: expressPaymentsMethod({
                            method: 'GET',
                            fullPath: '/v1/parent/{param1}/child/{param2}',
                        }),
                    }))(expressPayments);

                    return resource.test('hello', 'world', (err, res) => {
                        closeServer();
                        // Spot check that we received a response.
                        expect(res).to.deep.equal({});
                        return callback(err);
                    });
                }
            );
        });
    });

    describe('streaming', () => {
        /**
         * Defines a fake resource with a `pdf` method
         * with binary streaming enabled.
         */
        const makeResourceWithPDFMethod = (expressPayments) => {
            return new (ExpressPaymentsResource.extend({
                path: 'resourceWithPDF',

                pdf: expressPaymentsMethod({
                    method: 'GET',
                    host: 'files.epayments.network',
                    streaming: true,
                }),
            }))(expressPayments);
        };

        it('success', (callback) => {
            const handleRequest = (req, res) => {
                setTimeout(() => res.write('pretend'), 10);
                setTimeout(() => res.write(' this'), 20);
                setTimeout(() => res.write(' is a pdf'), 30);
                setTimeout(() => res.end(), 40);
            };

            getTestServerExpressPayments(
                {},
                handleRequest,
                (err, expressPayments, closeServer) => {
                    const foos = makeResourceWithPDFMethod(expressPayments);
                    if (err) {
                        return callback(err);
                    }

                    return foos.pdf(
                        {id: 'foo_123'},
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
                                ).to.equal('pretend this is a pdf');
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

            getTestServerExpressPayments(
                {},
                handleRequest,
                (err, expressPayments, closeServer) => {
                    if (err) {
                        return callback(err);
                    }

                    const foos = makeResourceWithPDFMethod(expressPayments);

                    return foos.pdf(
                        {id: 'foo_123'},
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

    describe('makeRequest args', () => {
        it('does not mutate user-supplied deprecated opts', () => {
            const args = [
                {
                    expresspayments_account: 'bad',
                },
            ];
            const mockSelf = new (ExpressPaymentsResource.extend({}))(
                expressPayments
            );
            mockSelf._makeRequest(args, {}, {});
            expect(args).to.deep.equal([
                {
                    expresspayments_account: 'bad',
                },
            ]);
        });
    });
});
