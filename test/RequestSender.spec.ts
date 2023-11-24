// @ts-nocheck
import { expect } from "chai";
import {
    ExpressPaymentsAuthenticationError,
    ExpressPaymentsConnectionError,
    ExpressPaymentsError,
    ExpressPaymentsIdempotencyError,
    ExpressPaymentsPermissionError,
    ExpressPaymentsRateLimitError
} from "../src/Error.js";
import { HttpClientResponse } from "../src/net/HttpClient.js";
import { RequestSender } from "../src/RequestSender.js";
import {
    FAKE_API_KEY,
    getSpyableExpressPayments,
    getTestServerExpressPayments,
} from './testUtils.js';
import nock = require('nock');

const expressPayments = getSpyableExpressPayments();

describe('RequestSender', () => {
    const sender = new RequestSender(expressPayments, 0);

    describe('_makeHeaders', () => {
        it('sets the Authorization header with Bearer auth using the global API key', () => {
            const headers = sender._makeHeaders(null, 0, null);
            expect(headers.Authorization).to.equal(`Bearer ${FAKE_API_KEY}`);
        });
        it('sets the Authorization header with Bearer auth using the specified API key', () => {
            const headers = sender._makeHeaders(
                'anotherFakeAuthToken',
                0,
                null
            );
            expect(headers.Authorization).to.equal(
                'Bearer anotherFakeAuthToken'
            );
        });
        it('sets the EP-Version header if an API version is provided', () => {
            const headers = sender._makeHeaders(null, 0, '1970-01-01');
            expect(headers['EP-Version']).to.equal('1970-01-01');
        });
        it('does not the set the EP-Version header if no API version is provided', () => {
            const headers = sender._makeHeaders(null, 0, null);
            expect(headers).to.not.include.keys('EP-Version');
        });
    });

    describe('_shouldRetry', () => {
        it("should return false if we've reached maximum retries", () => {
            const res = RequestSender._shouldRetry(
                new HttpClientResponse(409, {}),
                1,
                1
            );

            expect(res).to.equal(false);
        });

        it('should return true if we have more retries available', () => {
            const res = RequestSender._shouldRetry(
                new HttpClientResponse(409, {}),
                0,
                1
            );

            expect(res).to.equal(true);
        });

        it('should return true if the error code is either 409 or 503', () => {
            let res = RequestSender._shouldRetry(
                new HttpClientResponse(409, {}),
                0,
                1
            );

            expect(res).to.equal(true);

            res = RequestSender._shouldRetry(
                new HttpClientResponse(503, {}),
                0,
                1
            );

            expect(res).to.equal(true);
        });

        it('should return false if the status is 200', () => {
            // mocking that we're on our 2nd request
            const res = RequestSender._shouldRetry(
                new HttpClientResponse(200, {}),
                1,
                2
            );

            expect(res).to.equal(false);
        });
    });

    describe('Parameter encoding', () => {
        // Use a real instance of ExpressPayments as we're mocking the http.request responses.
        const realExpressPayments = require('../src/expresspayments.cjs.node.js')(
            'sk_test_xyz'
        );

        after(() => {
            nock.cleanAll();
        });

        describe('_request', () => {
            it('encodes data for GET requests as query params', (done) => {
                const data = {
                    customer: 'cus_123',
                    subscription_items: [
                        {plan: 'foo', quantity: 2},
                        {id: 'si_123', deleted: true},
                    ],
                };
                const options = {
                    host: expressPayments.getConstant('DEFAULT_HOST'),
                    path: '/v1/invoices/upcoming',
                    data,
                };

                const scope = nock(
                    `https://${options.host}`,
                    // No Content-Length should be present for GET requests.
                    {
                        badheaders: ['Content-Length'],
                    }
                )
                    .get(
                        `${options.path}?customer=cus_123&subscription_items[0][plan]=foo&subscription_items[0][quantity]=2&subscription_items[1][id]=si_123&subscription_items[1][deleted]=true`,
                        ''
                    )
                    .reply(200, '{}');

                realExpressPayments.invoices.retrieveUpcoming(
                    options.data,
                    (err, response) => {
                        done(err);
                        scope.done();
                    }
                );
            });

            it('handles . as a query param', (done) => {
                const scope = nock(
                    `https://${expressPayments.getConstant('DEFAULT_HOST')}`
                )
                    .get('/v1/customers/.', '')
                    .reply(200, '{}');

                realExpressPayments.customers.retrieve('.', (err, response) => {
                    done(err);
                    scope.done();
                });
            });

            it('handles .. as a query param', (done) => {
                const scope = nock(
                    `https://${expressPayments.getConstant('DEFAULT_HOST')}`
                )
                    .get('/v1/customers/..', '')
                    .reply(200, '{}');

                realExpressPayments.customers.retrieve(
                    '..',
                    (err, response) => {
                        done(err);
                        scope.done();
                    }
                );
            });

            it('handles empty string as a query param', (done) => {
                const scope = nock(
                    `https://${expressPayments.getConstant('DEFAULT_HOST')}`
                )
                    // Note this should always have a trailing space to avoid calling the
                    // top level list endpoint (/v1/customers) and returning all customers.
                    .get('/v1/customers/', '')
                    .reply(200, '{}');

                realExpressPayments.customers.retrieve('', (err, response) => {
                    done(err);
                    scope.done();
                });
            });

            it('handles empty string as a query param for namespaced resources', (done) => {
                const scope = nock(
                    `https://${expressPayments.getConstant('DEFAULT_HOST')}`
                )
                    // Note this should always have a trailing space to avoid calling the
                    // top level list endpoint (/v1/customers) and returning all customers.
                    .get('/v1/checkout/sessions/', '')
                    .reply(200, '{}');

                realExpressPayments.checkout.sessions.retrieve(
                    '',
                    (err, response) => {
                        done(err);
                        scope.done();
                    }
                );
            });

            it('handles empty string as a query param for nested resources', (done) => {
                const scope = nock(
                    `https://${expressPayments.getConstant('DEFAULT_HOST')}`
                )
                    // Note this should always have a trailing space to avoid calling the
                    // top level list endpoint (/v1/customers) and returning all customers.
                    .get('/v1/customers/cus_123/balance_transactions/', '')
                    .reply(200, '{}');

                realExpressPayments.customers.retrieveBalanceTransaction(
                    'cus_123',
                    '',
                    (err, response) => {
                        done(err);
                        scope.done();
                    }
                );
            });

            it('does not include trailing slash for endpoints without query parameters', (done) => {
                const scope = nock(
                    `https://${expressPayments.getConstant('DEFAULT_HOST')}`
                )
                    // Note that no trailing slash is present.
                    .get('/v1/customers', '')
                    .reply(200, '{}');

                realExpressPayments.customers.list((err, response) => {
                    done(err);
                    scope.done();
                });
            });

            it('works correctly with undefined optional arguments', (done) => {
                const scope = nock(
                    `https://${expressPayments.getConstant('DEFAULT_HOST')}`
                )
                    .get('/v1/accounts/acct_123')
                    .reply(200, '{}');

                realExpressPayments.accounts.retrieve(
                    'acct_123',
                    undefined,
                    (err, response) => {
                        done(err);
                        scope.done();
                    }
                );
            });

            it('works correctly with null optional arguments', (done) => {
                const scope = nock(
                    `https://${expressPayments.getConstant('DEFAULT_HOST')}`
                )
                    .get('/v1/accounts/acct_123')
                    .reply(200, '{}');

                realExpressPayments.accounts.retrieve(
                    'acct_123',
                    null,
                    (err, response) => {
                        done(err);
                        scope.done();
                    }
                );
            });

            it('encodes data for DELETE requests as query params', (done) => {
                const data = {
                    foo: 'bar',
                };
                const host = expressPayments.getConstant('DEFAULT_HOST');

                const scope = nock(
                    `https://${host}`,
                    // No Content-Length should be present for DELETE requests.
                    {
                        badheaders: ['Content-Length'],
                    }
                )
                    .delete(/.*/)
                    .reply(200, '{}');

                realExpressPayments.invoiceItems.del(
                    'invoiceItemId1',
                    data,
                    (err, response) => {
                        done(err);
                        scope.done();
                    }
                );
            });

            it('encodes the body in POST requests', (done) => {
                const options = {
                    host: expressPayments.getConstant('DEFAULT_HOST'),
                    path: '/v1/subscriptions/sub_123',
                    data: {
                        customer: 'cus_123',
                        items: [
                            {plan: 'foo', quantity: 2},
                            {id: 'si_123', deleted: true},
                        ],
                    },
                    body:
                        'customer=cus_123&items[0][plan]=foo&items[0][quantity]=2&items[1][id]=si_123&items[1][deleted]=true',
                };

                const scope = nock(
                    `https://${options.host}`,
                    // Content-Length should be present for POST.
                    {
                        reqheaders: {'Content-Length': options.body.length},
                    }
                )
                    .post(options.path, options.body)
                    .reply(200, '{}');

                realExpressPayments.subscriptions.update(
                    'sub_123',
                    options.data,
                    (err, response) => {
                        done(err);
                        scope.done();
                    }
                );
            });

            it('always includes Content-Length in POST requests even when empty', (done) => {
                const options = {
                    host: expressPayments.getConstant('DEFAULT_HOST'),
                    path: '/v1/subscriptions/sub_123',
                    data: {},
                    body: '',
                };

                const scope = nock(
                    `https://${options.host}`,
                    // Content-Length should be present for POST even when the body is
                    // empty.
                    {
                        reqheaders: {'Content-Length': 0},
                    }
                )
                    .post(options.path, options.body)
                    .reply(200, '{}');

                realExpressPayments.subscriptions.update(
                    'sub_123',
                    options.data,
                    (err, response) => {
                        done(err);
                        scope.done();
                    }
                );
            });

            it('allows overriding host', (done) => {
                const scope = nock('https://myhost')
                    .get('/v1/accounts/acct_123')
                    .reply(200, '{}');

                realExpressPayments.accounts.retrieve(
                    'acct_123',
                    {},
                    {
                        host: 'myhost',
                    },
                    (err, response) => {
                        done(err);
                        scope.done();
                    }
                );
            });
        });
    });

    describe('Retry Network Requests', () => {
        // Use a real instance of ExpressPayments as we're mocking the http.request responses.
        const realExpressPayments = require('../src/expresspayments.cjs.node.js')(
            'sk_test_xyz'
        );

        // Override the sleep timer to speed up tests
        realExpressPayments.charges._getSleepTimeInMS = () => 0;

        const options = {
            host: expressPayments.getConstant('DEFAULT_HOST'),
            path: '/v1/charges',
            data: {
                amount: 1000,
                currency: 'usd',
                source: 'tok_visa',
                description: 'test',
            },
            params: 'amount=1000&currency=usd&source=tok_visa&description=test',
        };

        afterEach(() => {
            realExpressPayments._setApiNumberField('maxNetworkRetries', 0);
            expressPayments._setApiNumberField('maxNetworkRetries', 0);
        });

        after(() => {
            nock.cleanAll();
        });

        describe('_request', () => {
            it('throws an error on connection failure', (done) => {
                // Mock the connection error.
                nock(`https://${options.host}`)
                    .post(options.path, options.params)
                    .replyWithError('bad stuff');

                realExpressPayments.charges.create(options.data, (err) => {
                    expect(err.detail.message).to.deep.equal('bad stuff');
                    done();
                });
            });

            it('throws an error on connection timeout', (done) => {
                return getTestServerExpressPayments(
                    {timeout: 10},
                    (req, res) => {
                        // Do nothing. This will trigger a timeout.
                    },
                    (err, expressPayments, closeServer) => {
                        if (err) {
                            return done(err);
                        }
                        expressPayments.charges.create(
                            options.data,
                            (err, result) => {
                                expect(err.detail.message).to.deep.equal(
                                    'ETIMEDOUT'
                                );
                                expect(err.message).to.deep.equal(
                                    'Request aborted due to timeout being reached (10ms)'
                                );
                                closeServer();
                                done();
                            }
                        );
                    }
                );
            });

            it('throws an error on invalid JSON', (done) => {
                return getTestServerExpressPayments(
                    {},
                    (req, res) => {
                        // Write back JSON to close out the server.
                        res.write('invalidjson{}');
                        res.end();
                    },
                    (err, expressPayments, closeServer) => {
                        if (err) {
                            return done(err);
                        }
                        expressPayments.charges.create(
                            options.data,
                            (err, result) => {
                                expect(err.message).to.deep.equal(
                                    'Invalid JSON received from the ExpressPayments API'
                                );
                                closeServer();
                                done();
                            }
                        );
                    }
                );
            });
            it('throws an valid headers but connection error', (done) => {
                return getTestServerExpressPayments(
                    {},
                    (req, res) => {
                        // Send out valid headers and a partial response. We then interrupt
                        // the response with an error.
                        res.writeHead(200);
                        res.write('{"ab');
                        res.destroy(new Error('something happened'));
                    },
                    (err, expressPayments, closeServer) => {
                        if (err) {
                            return done(err);
                        }
                        expressPayments.charges.create(
                            options.data,
                            (err, result) => {
                                expect(err).to.be.an.instanceOf(
                                    ExpressPaymentsConnectionError
                                );
                                done();
                            }
                        );
                    }
                );
            });

            it('throws an ExpressPaymentsAuthenticationError on 401', (done) => {
                nock(`https://${options.host}`)
                    .post(options.path, options.params)
                    .reply(401, {
                        error: {
                            message: 'message',
                        },
                    });

                realExpressPayments.charges.create(options.data, (err) => {
                    expect(err).to.be.an.instanceOf(
                        ExpressPaymentsAuthenticationError
                    );
                    expect(err.message).to.be.equal('message');
                    done();
                });
            });

            it('throws an ExpressPaymentsPermissionError on 403', (done) => {
                nock(`https://${options.host}`)
                    .post(options.path, options.params)
                    .reply(403, {
                        error: {
                            message: 'message',
                        },
                    });

                realExpressPayments.charges.create(options.data, (err) => {
                    expect(err).to.be.an.instanceOf(
                        ExpressPaymentsPermissionError
                    );
                    expect(err.message).to.be.equal('message');
                    done();
                });
            });

            it('throws an ExpressPaymentsRateLimitError on 429', (done) => {
                nock(`https://${options.host}`)
                    .post(options.path, options.params)
                    .reply(429, {
                        error: {
                            message: 'message',
                        },
                    });

                realExpressPayments.charges.create(options.data, (err) => {
                    expect(err).to.be.an.instanceOf(
                        ExpressPaymentsRateLimitError
                    );
                    expect(err.message).to.be.equal('message');
                    done();
                });
            });

            it('throws an ExpressPaymentsError based on the underlying error type', (done) => {
                const error = {
                    type: 'idempotency_error',
                };

                expect(
                    ExpressPaymentsError.generate(error)
                ).to.be.an.instanceOf(ExpressPaymentsIdempotencyError);

                nock(`https://${options.host}`)
                    .post(options.path, options.params)
                    .reply(400, {
                        error,
                    });

                realExpressPayments.charges.create(options.data, (err) => {
                    expect(err).to.be.an.instanceOf(
                        ExpressPaymentsIdempotencyError
                    );
                    done();
                });
            });

            it('retries connection timeout errors', (done) => {
                let nRequestsReceived = 0;
                return getTestServerExpressPayments(
                    {timeout: 10, maxNetworkRetries: 2},
                    (req, res) => {
                        nRequestsReceived += 1;
                        // Do nothing. This will trigger a timeout.
                        return {shouldStayOpen: nRequestsReceived < 3};
                    },
                    (err, expressPayments, closeServer) => {
                        if (err) {
                            return done(err);
                        }
                        expressPayments.charges.create(
                            options.data,
                            (err, result) => {
                                expect(err.detail.message).to.deep.equal(
                                    'ETIMEDOUT'
                                );
                                expect(nRequestsReceived).to.equal(3);
                                closeServer();
                                done();
                            }
                        );
                    }
                );
            });

            it('retries closed connection errors once', (done) => {
                nock(`https://${options.host}`)
                    .post(options.path, options.params)
                    .replyWithError({
                        code: 'ECONNRESET',
                        errno: 'ECONNRESET',
                    })
                    .post(options.path, options.params)
                    .reply(200, {
                        id: 'ch_123',
                        object: 'charge',
                        amount: 1000,
                    });

                realExpressPayments.charges.create(
                    options.data,
                    (err, charge) => {
                        expect(charge.id).to.equal('ch_123');
                        done(err);
                    }
                );
            });

            it('throws on multiple closed connection errors', (done) => {
                nock(`https://${options.host}`)
                    .post(options.path, options.params)
                    .replyWithError({code: 'ECONNRESET'})
                    .post(options.path, options.params)
                    .replyWithError({code: 'ECONNRESET'});

                realExpressPayments.charges.create(options.data, (err) => {
                    expect(err.detail.code).to.deep.equal('ECONNRESET');
                    done();
                });
            });

            it('should retry the request if max retries are set', (done) => {
                nock(`https://${options.host}`)
                    .post(options.path, options.params)
                    .replyWithError('bad stuff')
                    .post(options.path, options.params)
                    .replyWithError('worse stuff');

                realExpressPayments._setApiNumberField('maxNetworkRetries', 1);

                realExpressPayments.charges.create(options.data, (err) => {
                    const errorMessage = RequestSender._generateConnectionErrorMessage(
                        1
                    );
                    expect(err.message).to.equal(errorMessage);
                    expect(err.detail.message).to.deep.equal('worse stuff');
                    done();
                });
            });

            it('should stop retrying after a successful retry', (done) => {
                nock(`https://${options.host}`)
                    .post(options.path, options.params)
                    .replyWithError('bad stuff')
                    .post(options.path, options.params)
                    .reply(200, {
                        id: 'ch_123',
                        object: 'charge',
                        amount: 1000,
                    });

                realExpressPayments._setApiNumberField('maxNetworkRetries', 2);

                realExpressPayments.charges.create(
                    options.data,
                    (err, charge) => {
                        expect(charge.id).to.equal('ch_123');
                        done(err);
                    }
                );
            });

            it('should retry on a 409 error', (done) => {
                nock(`https://${options.host}`)
                    .post(options.path, options.params)
                    .reply(409, {
                        error: {
                            message: 'Conflict',
                        },
                    })
                    .post(options.path, options.params)
                    .reply(200, {
                        id: 'ch_123',
                        object: 'charge',
                        amount: 1000,
                    });

                realExpressPayments._setApiNumberField('maxNetworkRetries', 1);

                realExpressPayments.charges.create(
                    options.data,
                    (err, charge) => {
                        expect(charge.id).to.equal('ch_123');
                        done(err);
                    }
                );
            });

            it('should not retry on a 400 error', (done) => {
                nock(`https://${options.host}`)
                    .post(options.path, options.params)
                    .reply(400, {
                        error: {
                            type: 'card_error',
                        },
                    });

                realExpressPayments._setApiNumberField('maxNetworkRetries', 1);

                realExpressPayments.charges.create(options.data, (err) => {
                    expect(err.type).to.equal('ExpressPaymentsCardError');
                    done();
                });
            });

            it('should not retry when a header says not to', (done) => {
                nock(`https://${options.host}`)
                    .post(options.path, options.params)
                    .reply(
                        500,
                        {
                            error: {
                                type: 'api_error',
                            },
                        },
                        {'ep-should-retry': 'false'}
                    );

                realExpressPayments._setApiNumberField('maxNetworkRetries', 1);

                realExpressPayments.charges.create(options.data, (err) => {
                    expect(err.type).to.equal('ExpressPaymentsAPIError');
                    done();
                });
            });

            it("should retry when a header says it should, even on status codes we ordinarily wouldn't", (done) => {
                nock(`https://${options.host}`)
                    .post(options.path, options.params)
                    .reply(
                        400,
                        {error: {type: 'your_fault'}},
                        {'ep-should-retry': 'true'}
                    )
                    .post(options.path, options.params)
                    .reply(200, {
                        id: 'ch_123',
                        object: 'charge',
                        amount: 1000,
                    });

                realExpressPayments._setApiNumberField('maxNetworkRetries', 1);

                realExpressPayments.charges.create(
                    options.data,
                    (err, charge) => {
                        expect(charge.id).to.equal('ch_123');
                        done(err);
                    }
                );
            });

            it('should handle OAuth errors gracefully', (done) => {
                nock('https://connect.epayments.network')
                    .post('/oauth/token')
                    .reply(400, {
                        error: 'invalid_grant',
                        error_description:
                            'This authorization code has already been used. All tokens issued with this code have been revoked.',
                    });

                realExpressPayments._setApiNumberField('maxNetworkRetries', 1);

                realExpressPayments.oauth.token(options.data, (err) => {
                    expect(err.type).to.equal(
                        'ExpressPaymentsInvalidGrantError'
                    );
                    done();
                });
            });

            it('should retry on a 503 error when the method is POST', (done) => {
                nock(`https://${options.host}`)
                    .post(options.path, options.params)
                    .reply(503, {
                        error: {
                            message: 'Service unavailable',
                        },
                    })
                    .post(options.path, options.params)
                    .reply(200, {
                        id: 'ch_123',
                        object: 'charge',
                        amount: 1000,
                    });

                realExpressPayments._setApiNumberField('maxNetworkRetries', 1);

                realExpressPayments.charges.create(
                    options.data,
                    (err, charge) => {
                        expect(charge.id).to.equal('ch_123');
                        done(err);
                    }
                );
            });

            it('should retry on a 500 error when the method is GET', (done) => {
                nock(`https://${options.host}`)
                    .get(`${options.path}/ch_123`)
                    .reply(500, {
                        error: {
                            type: 'api_error',
                        },
                    })
                    .get(`${options.path}/ch_123`)
                    .reply(200, {
                        id: 'ch_123',
                        object: 'charge',
                        amount: 1000,
                    });

                realExpressPayments._setApiNumberField('maxNetworkRetries', 1);

                realExpressPayments.charges.retrieve(
                    'ch_123',
                    (err, charge) => {
                        expect(charge.id).to.equal('ch_123');
                        done(err);
                    }
                );
            });

            it('should add an idempotency key for retries using the POST method', (done) => {
                let headers;

                // Fail the first request but succeed on the 2nd.
                nock(`https://${options.host}`)
                    .post(options.path, options.params)
                    .replyWithError('bad stuff')
                    .post(options.path, options.params)
                    .reply(function(uri, requestBody, cb) {
                        headers = this.req.headers;

                        return cb(null, [
                            200,
                            {
                                id: 'ch_123',
                                object: 'charge',
                                amount: 1000,
                            },
                        ]);
                    });

                realExpressPayments._setApiNumberField('maxNetworkRetries', 1);

                realExpressPayments.charges.create(options.data, (err) => {
                    expect(headers).to.have.property('idempotency-key');
                    done(err);
                });
            });

            it('should not add idempotency key for retries using the GET method', (done) => {
                let headers;

                nock(`https://${options.host}`)
                    .get(`${options.path}/ch_123`)
                    .replyWithError('bad stuff')
                    .get(`${options.path}/ch_123`)
                    .reply(function(uri, requestBody, cb) {
                        headers = this.req.headers;

                        return cb(null, [
                            200,
                            {
                                id: 'ch_123',
                                object: 'charge',
                                amount: 1000,
                            },
                        ]);
                    });

                realExpressPayments._setApiNumberField('maxNetworkRetries', 1);

                realExpressPayments.charges.retrieve('ch_123', () => {
                    expect(headers).to.not.have.property('idempotency-key');
                    done();
                });
            });

            it('should reuse the given idempotency key provided for retries', (done) => {
                const key = 'i-am-a-key';
                let headers;

                nock(`https://${options.host}`)
                    .post(options.path, options.params)
                    .replyWithError('bad stuff')
                    .post(options.path, options.params)
                    .reply(function(uri, requestBody, cb) {
                        headers = this.req.headers;

                        return cb(null, [
                            200,
                            {
                                id: 'ch_123',
                                object: 'charge',
                                amount: 1000,
                            },
                        ]);
                    });

                realExpressPayments.charges.create(
                    options.data,
                    {idempotencyKey: key, maxNetworkRetries: 1},
                    () => {
                        expect(headers['idempotency-key']).to.equal(key);
                        done();
                    }
                );
            });

            it('should allow the setting of network retries on a per-request basis', (done) => {
                nock(`https://${options.host}`)
                    .post(options.path, options.params)
                    .replyWithError('bad stuff')
                    .post(options.path, options.params)
                    .reply((uri, requestBody, cb) => {
                        return cb(null, [
                            200,
                            {
                                id: 'ch_123',
                                object: 'charge',
                                amount: 1000,
                            },
                        ]);
                    });

                realExpressPayments.charges.create(
                    options.data,
                    {maxNetworkRetries: 1},
                    (err, charge) => {
                        expect(charge.id).to.equal('ch_123');
                        done();
                    }
                );
            });

            it('should pick the per-request network retry setting if a global setting is set', (done) => {
                realExpressPayments._setApiNumberField('maxNetworkRetries', 0);

                nock(`https://${options.host}`)
                    .post(options.path, options.params)
                    .replyWithError('bad stuff')
                    .post(options.path, options.params)
                    .reply((uri, requestBody, cb) => {
                        return cb(null, [
                            200,
                            {
                                id: 'ch_123',
                                object: 'charge',
                                amount: 1000,
                            },
                        ]);
                    });

                realExpressPayments.charges.create(
                    options.data,
                    {maxNetworkRetries: 1},
                    (err, charge) => {
                        expect(charge.id).to.equal('ch_123');
                        done();
                    }
                );
            });

            it('invokes the callback with successful results', (done) => {
                const returnedCharge = {
                    id: 'ch_123',
                };
                return getTestServerExpressPayments(
                    {},
                    (req, res) => {
                        res.write(JSON.stringify(returnedCharge));
                        res.end();
                    },
                    (err, expressPayments, closeServer) => {
                        if (err) {
                            return done(err);
                        }
                        expressPayments.charges.create(
                            options.data,
                            (err, result) => {
                                expect(result).to.deep.equal(returnedCharge);
                                closeServer();
                                done();
                            }
                        );
                    }
                );
            });

            it('returns successful results to await', (done) => {
                const returnedCharge = {
                    id: 'ch_123',
                };
                return getTestServerExpressPayments(
                    {},
                    (req, res) => {
                        res.write(JSON.stringify(returnedCharge));
                        res.end();
                    },
                    async (err, expressPayments, closeServer) => {
                        if (err) {
                            return done(err);
                        }
                        try {
                            const result = await expressPayments.charges.create(
                                options.data
                            );
                            expect(result).to.deep.equal(returnedCharge);
                            closeServer();
                            done();
                        } catch (err) {
                            done(err);
                        }
                    }
                );
            });
        });

        describe('_getSleepTimeInMS', () => {
            it('should not exceed the maximum or minimum values', () => {
                const max = expressPayments.getMaxNetworkRetryDelay();
                const min = expressPayments.getInitialNetworkRetryDelay();

                for (let i = 0; i < 10; i++) {
                    const sleepSeconds = sender._getSleepTimeInMS(i) / 1000;

                    expect(sleepSeconds).to.be.at.most(max);
                    expect(sleepSeconds).to.be.at.least(min);
                }
            });

            it('should allow a maximum override', () => {
                const maxSec = expressPayments.getMaxNetworkRetryDelay();
                const minMS =
                    expressPayments.getInitialNetworkRetryDelay() * 1000;

                expect(sender._getSleepTimeInMS(3, 0)).to.be.gt(minMS);
                expect(sender._getSleepTimeInMS(2, 3)).to.equal(3000);
                expect(sender._getSleepTimeInMS(0, 3)).to.equal(3000);
                expect(sender._getSleepTimeInMS(0, 0)).to.equal(minMS);
                expect(sender._getSleepTimeInMS(0, maxSec * 2)).to.equal(
                    maxSec * 2 * 1000
                );
            });
        });
    });

    describe('Request Timeout', () => {
        it('should allow the setting of a request timeout on a per-request basis', (done) => {
            expressPayments.charges.create({});

            expect(expressPayments.LAST_REQUEST.settings).to.deep.equal({});

            expressPayments.charges.create({}, {timeout: 10});

            expect(expressPayments.LAST_REQUEST.settings).to.deep.equal({
                timeout: 10,
            });
            done();
        });
    });
});
