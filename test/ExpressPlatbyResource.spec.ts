// @ts-nocheck
import {expect} from 'chai';
import * as nock from 'nock';
import {ExpressPlatbyResource} from '../src/ExpressPlatbyResource.js';
import {
    getSpyableExpressPlatby,
    getTestServerExpressPlatby,
} from './testUtils.js';

const expressPlatby = getSpyableExpressPlatby();
const expressPlatbyMethod = ExpressPlatbyResource.method;

describe('ExpressPlatbyResource', () => {
    describe('createResourcePathWithSymbols', () => {
        let testResource;
        before(() => {
            testResource = new (ExpressPlatbyResource.extend({
                path: 'widgets',
                create: expressPlatbyMethod({
                    method: 'POST',
                    path: '',
                }),
            }))(expressPlatby);
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
            const path = expressPlatby.invoices._joinUrlParts(['a', '']);
            expect(path).to.equal('a/');
        });

        it('joins parts', () => {
            const path = expressPlatby.invoices._joinUrlParts(['a', 'b', 'c']);
            expect(path).to.equal('a/b/c');
        });

        it('handles redundant slashes', () => {
            const path = expressPlatby.invoices._joinUrlParts([
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

            getTestServerExpressPlatby(
                {},
                handleRequest,
                (err, expressPlatby, closeServer) => {
                    const resource = new (ExpressPlatbyResource.extend({
                        test: expressPlatbyMethod({
                            method: 'GET',
                            fullPath: '/v1/parent/{param1}/child/{param2}',
                        }),
                    }))(expressPlatby);

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
        const makeResource = (expressPlatby) => {
            return new (ExpressPlatbyResource.extend({
                path: 'resourceWithHost',

                testMethod: expressPlatbyMethod({
                    method: 'GET',
                    host: 'some.host.expressplatby.cz',
                }),
            }))(expressPlatby);
        };

        it('is not impacted by the global host', (done) => {
            const expressPlatby = require('../src/expressplatby.cjs.node.js')(
                'sk_test',
                {
                    host: 'bad.host.expressplatby.cz',
                }
            );

            const scope = nock('https://some.host.expressplatby.cz')
                .get('/v1/resourceWithHost')
                .reply(200, '{}');

            makeResource(expressPlatby).testMethod({}, (err, response) => {
                done(err);
                scope.done();
            });
        });

        it('still lets users override the host on a per-request basis', (done) => {
            const expressPlatby = require('../src/expressplatby.cjs.node.js')(
                'sk_test'
            );

            const scope = nock('https://some.other.host.expressplatby.cz')
                .get('/v1/resourceWithHost')
                .reply(200, '{}');

            makeResource(expressPlatby).testMethod(
                {},
                {host: 'some.other.host.expressplatby.cz'},
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

            getTestServerExpressPlatby(
                {},
                handleRequest,
                (err, expressPlatby, closeServer) => {
                    const resource = new (ExpressPlatbyResource.extend({
                        test: expressPlatbyMethod({
                            method: 'GET',
                            fullPath: '/v1/parent/{param1}/child/{param2}',
                        }),
                    }))(expressPlatby);

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
        const makeResourceWithPDFMethod = (expressPlatby) => {
            return new (ExpressPlatbyResource.extend({
                path: 'resourceWithPDF',

                pdf: expressPlatbyMethod({
                    method: 'GET',
                    host: 'files.expressplatby.cz',
                    streaming: true,
                }),
            }))(expressPlatby);
        };

        it('success', (callback) => {
            const handleRequest = (req, res) => {
                setTimeout(() => res.write('pretend'), 10);
                setTimeout(() => res.write(' this'), 20);
                setTimeout(() => res.write(' is a pdf'), 30);
                setTimeout(() => res.end(), 40);
            };

            getTestServerExpressPlatby(
                {},
                handleRequest,
                (err, expressPlatby, closeServer) => {
                    const foos = makeResourceWithPDFMethod(expressPlatby);
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

            getTestServerExpressPlatby(
                {},
                handleRequest,
                (err, expressPlatby, closeServer) => {
                    if (err) {
                        return callback(err);
                    }

                    const foos = makeResourceWithPDFMethod(expressPlatby);

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
                    expressplatby_account: 'bad',
                },
            ];
            const mockSelf = new (ExpressPlatbyResource.extend({}))(
                expressPlatby
            );
            mockSelf._makeRequest(args, {}, {});
            expect(args).to.deep.equal([
                {
                    expressplatby_account: 'bad',
                },
            ]);
        });
    });
});
