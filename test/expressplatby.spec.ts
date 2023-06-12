// @ts-nocheck
/* eslint-disable new-cap */

'use strict';

import {expect} from 'chai';
import {ApiVersion} from '../src/apiVersion.js';
import {createExpressPlatby} from '../src/expressplatby.core.js';
import {
    FAKE_API_KEY,
    getExpressPlatbyMockClient,
    getMockPlatformFunctions,
    getRandomString,
    getTestServerExpressPlatby,
} from './testUtils.js';
import ExpressPlatby = require('../src/expressplatby.cjs.node.js');
import crypto = require('crypto');

const expressPlatby = getExpressPlatbyMockClient();

const CUSTOMER_DETAILS = {
    description: 'Some customer',
    email: 'martin.najemi@example.com',
};

describe('ExpressPlatby Module', function() {
    describe('config object', () => {
        it('should only accept either an object or a string', () => {
            expect(() => {
                ExpressPlatby(FAKE_API_KEY, 123);
            }).to.throw(/Config must either be an object or a string/);

            expect(() => {
                ExpressPlatby(FAKE_API_KEY, ['2022-12-31']);
            }).to.throw(/Config must either be an object or a string/);

            expect(() => {
                ExpressPlatby(FAKE_API_KEY, '2022-12-31');
            }).to.not.throw();

            expect(() => {
                ExpressPlatby(FAKE_API_KEY, {
                    apiVersion: 'latest',
                });
            }).to.not.throw();
        });

        it('should only contain allowed properties', () => {
            expect(() => {
                ExpressPlatby(FAKE_API_KEY, {
                    foo: 'bar',
                    apiVersion: 'latest',
                });
            }).to.throw(/Config object may only contain the following:/);

            expect(() => {
                ExpressPlatby(FAKE_API_KEY, {
                    apiVersion: '2022-12-31',
                    maxNetworkRetries: 2,
                    httpAgent: 'agent',
                    timeout: 123,
                    host: 'foo.expressplatby.cz',
                    port: 321,
                });
            }).to.not.throw();
        });
        it('should forbid sending http to *.expressplatby.cz', () => {
            expect(() => {
                ExpressPlatby(FAKE_API_KEY, {
                    host: 'foo.expressplatby.cz',
                    protocol: 'http',
                });
            }).to.throw(/The `https` protocol must be used/);

            expect(() => {
                ExpressPlatby(FAKE_API_KEY, {
                    protocol: 'http',
                });
            }).to.throw(/The `https` protocol must be used/);

            expect(() => {
                ExpressPlatby(FAKE_API_KEY, {
                    protocol: 'http',
                    host: 'api.expressplatby.cz',
                });
            }).to.throw(/The `https` protocol must be used/);

            expect(() => {
                ExpressPlatby(FAKE_API_KEY, {
                    protocol: 'https',
                    host: 'api.expressplatby.cz',
                });
            }).not.to.throw();

            expect(() => {
                ExpressPlatby(FAKE_API_KEY, {
                    host: 'api.expressplatby.cz',
                });
            }).not.to.throw();

            expect(() => {
                ExpressPlatby(FAKE_API_KEY, {
                    protocol: 'http',
                    host: 'localhost',
                });
            }).not.to.throw();
        });

        it('should perform a no-op if null, undefined or empty values are passed', () => {
            const cases = [null, undefined, '', {}];

            cases.forEach((item) => {
                expect(() => {
                    ExpressPlatby(FAKE_API_KEY, item);
                }).to.not.throw();
            });

            cases.forEach((item) => {
                const newExpressPlatby = ExpressPlatby(FAKE_API_KEY, item);
                expect(newExpressPlatby.getApiField('version')).to.equal(
                    ApiVersion
                );
            });
        });

        it('should enable telemetry if not explicitly set', () => {
            const newExpressPlatby = ExpressPlatby(FAKE_API_KEY);

            expect(newExpressPlatby.getTelemetryEnabled()).to.equal(true);
        });

        it('should enable telemetry if anything but "false" is set', () => {
            const vals = ['foo', null, undefined];
            let newExpressPlatby;

            vals.forEach((val) => {
                newExpressPlatby = ExpressPlatby(FAKE_API_KEY, {
                    telemetry: val,
                });

                expect(newExpressPlatby.getTelemetryEnabled()).to.equal(true);
            });

            newExpressPlatby = ExpressPlatby(FAKE_API_KEY, {
                telemetry: false,
            });

            expect(newExpressPlatby.getTelemetryEnabled()).to.equal(false);
        });
    });

    describe('setApiKey', () => {
        it('uses Bearer auth', () => {
            expect(expressPlatby.getApiField('auth')).to.equal(
                `Bearer ${FAKE_API_KEY}`
            );
        });
    });

    describe('GetClientUserAgent', () => {
        it('Should return a user-agent serialized JSON object', () =>
            expect(
                new Promise((resolve, reject) => {
                    expressPlatby.getClientUserAgent((c) => {
                        resolve(JSON.parse(c));
                    });
                })
            ).to.eventually.have.property('lang', 'node'));

        it('Should return platform and version in the serialized user agent JSON object', async () => {
            // Check that the testing environment actually has a process global.
            expect(process.version).to.not.be.empty;
            expect(process.platform).to.not.be.empty;

            const userAgent = await new Promise((resolve, reject) => {
                expressPlatby.getClientUserAgent((c) => {
                    resolve(JSON.parse(c));
                });
            });

            expect(userAgent).to.have.property('lang_version', process.version);
            expect(userAgent).to.have.property('platform', process.platform);
        });

        it('Should include whether typescript: true was passed, respecting reinstantiations', () => {
            return new Promise((resolve) => resolve(null))
                .then(() => {
                    const newExpressPlatby = new ExpressPlatby(FAKE_API_KEY, {
                        typescript: true,
                    });
                    return expect(
                        new Promise((resolve, reject) => {
                            newExpressPlatby.getClientUserAgent((c) => {
                                resolve(JSON.parse(c));
                            });
                        })
                    ).to.eventually.have.property('typescript', 'true');
                })
                .then(() => {
                    const newExpressPlatby = new ExpressPlatby(
                        FAKE_API_KEY,
                        {}
                    );
                    return expect(
                        new Promise((resolve, reject) => {
                            newExpressPlatby.getClientUserAgent((c) => {
                                resolve(JSON.parse(c));
                            });
                        })
                    ).to.eventually.have.property('typescript', 'false');
                });
        });
    });

    describe('GetClientUserAgentSeeded', () => {
        it('Should return a user-agent serialized JSON object', () => {
            const userAgent = {lang: 'node'};
            return expect(
                new Promise((resolve, reject) => {
                    expressPlatby.getClientUserAgentSeeded(userAgent, (c) => {
                        resolve(JSON.parse(c));
                    });
                })
            ).to.eventually.have.property('lang', 'node');
        });

        it('Should URI-encode user-agent fields', () => {
            const userAgent = {lang: 'ï'};
            return expect(
                new Promise((resolve, reject) => {
                    expressPlatby.getClientUserAgentSeeded(userAgent, (c) => {
                        resolve(JSON.parse(c));
                    });
                })
            ).to.eventually.have.property('lang', '%C3%AF');
        });

        it('Should URI-encode the HTTP client name', () => {
            const userAgent = {lang: 'ï'};
            return expect(
                new Promise((resolve, reject) => {
                    expressPlatby.getClientUserAgentSeeded(userAgent, (c) => {
                        resolve(JSON.parse(c));
                    });
                })
            ).to.eventually.have.property('httplib', 'node');
        });

        describe('uname', () => {
            it('gets added to the user-agent', () => {
                const expressPlatby = createExpressPlatby(
                    getMockPlatformFunctions((cmd: string, cb: any): void => {
                        cb(null, 'foøname');
                    })
                )(FAKE_API_KEY, 'latest');
                return expect(
                    new Promise((resolve, reject) => {
                        expressPlatby.getClientUserAgentSeeded(
                            {lang: 'node'},
                            (c) => {
                                resolve(JSON.parse(c));
                            }
                        );
                    })
                ).to.eventually.have.property('uname', 'fo%C3%B8name');
            });

            it('sets uname to UNKOWN in case of an error', () => {
                const expressPlatby = createExpressPlatby(
                    getMockPlatformFunctions((cmd: string, cb: any): void => {
                        cb(new Error('security'), null);
                    })
                )(FAKE_API_KEY, 'latest');
                return expect(
                    new Promise((resolve, reject) => {
                        expressPlatby.getClientUserAgentSeeded(
                            {lang: 'node'},
                            (c) => {
                                resolve(JSON.parse(c));
                            }
                        );
                    })
                ).to.eventually.have.property('uname', 'UNKNOWN');
            });
        });
    });

    describe('timeout config', () => {
        const defaultTimeout = 80000;
        it('Should define a default of 80000', () => {
            expect(expressPlatby.getApiField('timeout')).to.equal(
                defaultTimeout
            );
        });
        it('Should allow me to set a custom timeout', () => {
            const newExpressPlatby = ExpressPlatby(FAKE_API_KEY, {
                timeout: 900,
            });
            expect(newExpressPlatby.getApiField('timeout')).to.equal(900);
        });
        it('Should allow me to set null, to reset to the default', () => {
            const newExpressPlatby = ExpressPlatby(FAKE_API_KEY, {
                timeout: null,
            });
            expect(newExpressPlatby.getApiField('timeout')).to.equal(
                defaultTimeout
            );
        });
    });

    describe('appInfo config', () => {
        describe('when given nothing or an empty object', () => {
            it('should unset expressPlatby._appInfo', () => {
                expect(expressPlatby._appInfo).to.be.undefined;
            });
        });

        describe('when not set', () => {
            it('should return empty string', () => {
                expect(expressPlatby.getAppInfoAsString()).to.equal('');
            });
        });

        describe('when given a non-object variable', () => {
            it('should throw an error', () => {
                expect(() => {
                    ExpressPlatby(FAKE_API_KEY, {
                        appInfo: 'foo',
                    });
                }).to.throw(/AppInfo must be an object./);
            });
        });

        describe('when given an object with no `name`', () => {
            it('should throw an error', () => {
                expect(() => {
                    ExpressPlatby(FAKE_API_KEY, {
                        appInfo: {},
                    });
                }).to.throw(/AppInfo.name is required/);

                expect(() => {
                    ExpressPlatby(FAKE_API_KEY, {
                        appInfo: {
                            version: '1.2.3',
                        },
                    });
                }).to.throw(/AppInfo.name is required/);

                expect(() => {
                    ExpressPlatby(FAKE_API_KEY, {
                        appInfo: {
                            cats: '42',
                        },
                    });
                }).to.throw(/AppInfo.name is required/);
            });
        });

        describe('when given at least a `name`', () => {
            it('should set name, partner ID, url, and version of expressPlatby._appInfo', () => {
                let newExpressPlatby = ExpressPlatby(FAKE_API_KEY, {
                    appInfo: {
                        name: 'MyAwesomeApp',
                    },
                });
                expect(newExpressPlatby._appInfo).to.eql({
                    name: 'MyAwesomeApp',
                });

                newExpressPlatby = ExpressPlatby(FAKE_API_KEY, {
                    appInfo: {
                        name: 'MyAwesomeApp',
                        version: '1.2.345',
                    },
                });
                expect(newExpressPlatby._appInfo).to.eql({
                    name: 'MyAwesomeApp',
                    version: '1.2.345',
                });

                newExpressPlatby = ExpressPlatby(FAKE_API_KEY, {
                    appInfo: {
                        name: 'MyAwesomeApp',
                        url: 'https://myawesomeapp.info',
                    },
                });
                expect(newExpressPlatby._appInfo).to.eql({
                    name: 'MyAwesomeApp',
                    url: 'https://myawesomeapp.info',
                });

                newExpressPlatby = ExpressPlatby(FAKE_API_KEY, {
                    appInfo: {
                        name: 'MyAwesomeApp',
                        partner_id: 'partner_1234',
                    },
                });
                expect(newExpressPlatby._appInfo).to.eql({
                    name: 'MyAwesomeApp',
                    partner_id: 'partner_1234',
                });
            });

            it('should ignore any invalid properties', () => {
                const newExpressPlatby = ExpressPlatby(FAKE_API_KEY, {
                    appInfo: {
                        name: 'MyAwesomeApp',
                        partner_id: 'partner_1234',
                        version: '1.2.345',
                        url: 'https://myawesomeapp.info',
                        countOfRadishes: 512,
                    },
                });
                expect(newExpressPlatby._appInfo).to.eql({
                    name: 'MyAwesomeApp',
                    partner_id: 'partner_1234',
                    version: '1.2.345',
                    url: 'https://myawesomeapp.info',
                });
            });
        });

        it('should be included in the ClientUserAgent and be added to the UserAgent String', (done) => {
            const appInfo = {
                name: getRandomString(),
                version: '1.2.345',
                url: 'https://myawesomeapp.info',
            };

            const newExpressPlatby = ExpressPlatby(FAKE_API_KEY, {
                appInfo,
            });

            newExpressPlatby.getClientUserAgent((uaString) => {
                expect(JSON.parse(uaString).application).to.eql(appInfo);

                expect(newExpressPlatby.getAppInfoAsString()).to.eql(
                    `${appInfo.name}/${appInfo.version} (${appInfo.url})`
                );

                done();
            });
        });
    });

    describe('Callback support', () => {
        describe('Any given endpoint', () => {
            it('Will call a callback if successful', () =>
                expect(
                    new Promise((resolve, reject) => {
                        expressPlatby.customers.create(
                            CUSTOMER_DETAILS,
                            (err, customer) => {
                                resolve('Called!');
                            }
                        );
                    })
                ).to.eventually.equal('Called!'));

            describe('lastResponse', () => {
                it('Will expose HTTP response object', () =>
                    expect(
                        new Promise((resolve, reject) => {
                            expressPlatby.customers.create(
                                CUSTOMER_DETAILS,
                                (err, customer) => {
                                    if (err) return reject(err);
                                    const headers =
                                        customer.lastResponse.headers;
                                    expect(headers).to.contain.keys(
                                        'request-id'
                                    );

                                    expect(customer.headers).to.be.undefined;

                                    resolve('Called!');
                                }
                            );
                        })
                    ).to.eventually.equal('Called!'));

                it('Will have request id and status code', () =>
                    expect(
                        new Promise((resolve, reject) => {
                            expressPlatby.customers.create(
                                CUSTOMER_DETAILS,
                                (_err, customer) => {
                                    expect(
                                        customer.lastResponse.requestId
                                    ).to.match(/^req_/);
                                    expect(
                                        customer.lastResponse.statusCode
                                    ).to.equal(200);

                                    resolve('Called!');
                                }
                            );
                        })
                    ).to.eventually.equal('Called!'));

                it('Will have the idempotency key', () =>
                    expect(
                        new Promise((resolve, reject) => {
                            // @ts-ignore - "Property 'randomBytes' does not exist on type 'Crypto'""
                            const key = crypto.randomBytes(16).toString('hex');

                            expressPlatby.customers.create(
                                CUSTOMER_DETAILS,
                                {
                                    idempotencyKey: key,
                                },
                                (err, customer) => {
                                    expect(
                                        customer.lastResponse.idempotencyKey
                                    ).to.equal(key);

                                    resolve('Called!');
                                }
                            );
                        })
                    ).to.eventually.equal('Called!'));
            });

            it('Given an error the callback will receive it', () =>
                expect(
                    new Promise((resolve, reject) => {
                        expressPlatby.customers.create(
                            {this_is_not_a_real_param: 'foobar'},
                            (err, customer) => {
                                console.log(err);
                                console.log(customer);
                                if (err) {
                                    resolve('ErrorWasPassed');
                                } else {
                                    reject(new Error('NoErrorPassed'));
                                }
                            }
                        );
                    })
                ).to.eventually.become('ErrorWasPassed'));
        });
    });

    describe('errors', () => {
        it('Exports errors as types', () => {
            expect(
                new ExpressPlatby.errors.ExpressPlatbyInvalidRequestError({
                    message: 'error',
                }).type
            ).to.equal('ExpressPlatbyInvalidRequestError');
        });
    });

    describe('expressPlatbyAccount', () => {
        describe('when passed in via the config object', () => {
            let headers;
            let expressPlatbyClient;
            let closeServer;
            beforeEach((callback) => {
                getTestServerExpressPlatby(
                    {
                        expressPlatbyAccount: 'my_expressplatby_account',
                    },
                    (req, res) => {
                        headers = req.headers;
                        res.writeHeader(200);
                        res.write('{}');
                        res.end();
                    },
                    (err, client, close) => {
                        if (err) {
                            return callback(err);
                        }
                        expressPlatbyClient = client;
                        closeServer = close;
                        return callback();
                    }
                );
            });
            afterEach(() => closeServer());
            it('is respected', (callback) => {
                expressPlatbyClient.customers.create((err) => {
                    closeServer();
                    if (err) {
                        return callback(err);
                    }
                    expect(headers['expressplatby-account']).to.equal(
                        'my_expressplatby_account'
                    );
                    return callback();
                });
            });
            it('can still be overridden per-request', (callback) => {
                expressPlatbyClient.customers.create(
                    {expressPlatbyAccount: 'my_other_expressplatby_account'},
                    (err) => {
                        closeServer();
                        if (err) {
                            return callback(err);
                        }
                        expect(headers['expressplatby-account']).to.equal(
                            'my_other_expressplatby_account'
                        );
                        return callback();
                    }
                );
            });
        });
    });

    describe('setMaxNetworkRetries', () => {
        describe('when given an empty or non-number variable', () => {
            it('should error', () => {
                expect(() => {
                    expressPlatby._setApiNumberField(
                        'maxNetworkRetries',
                        'foo'
                    );
                }).to.throw(/maxNetworkRetries must be an integer/);

                expect(() => {
                    expressPlatby._setApiNumberField('maxNetworkRetries');
                }).to.throw(/maxNetworkRetries must be an integer/);
            });
        });

        describe('when passed in via the config object', () => {
            it('should default to 0 if a non-integer is passed', () => {
                const newExpressPlatby = ExpressPlatby(FAKE_API_KEY, {
                    maxNetworkRetries: 'foo',
                });

                expect(newExpressPlatby.getMaxNetworkRetries()).to.equal(0);

                expect(() => {
                    ExpressPlatby(FAKE_API_KEY, {
                        maxNetworkRetries: 2,
                    });
                }).to.not.throw();
            });

            it('should correctly set the amount of network retries', () => {
                const newExpressPlatby = ExpressPlatby(FAKE_API_KEY, {
                    maxNetworkRetries: 5,
                });

                expect(newExpressPlatby.getMaxNetworkRetries()).to.equal(5);
            });
        });

        describe('when not set', () => {
            it('should use the default', () => {
                const newExpressPlatby = ExpressPlatby(FAKE_API_KEY);

                expect(newExpressPlatby.getMaxNetworkRetries()).to.equal(0);
            });
        });
    });

    describe('VERSION', () => {
        it('should return the current package version', () => {
            const newExpressPlatby = ExpressPlatby(FAKE_API_KEY);

            expect(newExpressPlatby.VERSION).to.equal(
                ExpressPlatby.PACKAGE_VERSION
            );
        });
    });
});
