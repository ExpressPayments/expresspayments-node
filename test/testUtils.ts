// NOTE: testUtils should be required before anything else in each spec file!

require('mocha');
import http = require('http');
import expressPayments = require('../src/expresspayments.cjs.node.js');
import {CryptoProvider} from '../src/crypto/CryptoProvider.js';
import {NodePlatformFunctions} from '../src/platform/NodePlatformFunctions.js';
import {RequestSender} from '../src/RequestSender.js';
import {createExpressPayments} from '../src/expresspayments.core.js';
import {
    ExpressPaymentsObject as ExpressPaymentsClient,
    RequestCallback,
    RequestData,
    RequestDataProcessor,
    RequestHeaders,
    RequestOptions,
    RequestSettings,
} from '../src/Types.js';

const testingHttpAgent = new http.Agent({keepAlive: false});

export const FAKE_API_KEY = 'sk_test_123';
export const getTestServerExpressPayments = (
    clientOptions: RequestSettings,
    handler: (
        req: http.IncomingMessage,
        res: http.ServerResponse
    ) => {shouldStayOpen?: true} | null,
    callback: (
        err: Error | null,
        expressPayments: ExpressPaymentsClient,
        closeServer: () => void
    ) => void
): void => {
    const server = http.createServer((req, res) => {
        const {shouldStayOpen} = handler(req, res) || {};
        if (!shouldStayOpen) {
            res.on('close', () => {
                server.close();
            });
        }
    });
    server.listen(0, () => {
        const {port} = server.address() as any;
        const expressPayments = require('../src/expresspayments.cjs.node.js')(
            FAKE_API_KEY,
            {
                host: 'localhost',
                port,
                protocol: 'http',
                httpAgent: testingHttpAgent,
                ...clientOptions,
            }
        );
        return callback(null, expressPayments, () => {
            server.close();
        });
    });
};

export const getExpressPaymentsMockClient = (): ExpressPaymentsClient => {
    const expressPayments = require('../src/expresspayments.cjs.node.js');

    return expressPayments(FAKE_API_KEY, {
        host: process.env.EP_MOCK_HOST || 'localhost',
        port: process.env.EP_MOCK_PORT || 12111,
        protocol: 'http',
    });
};

export const getMockPlatformFunctions = (
    cb: CallableFunction
): NodePlatformFunctions => {
    class MockPlatformFunctions extends NodePlatformFunctions {
        constructor(cb: CallableFunction) {
            super();
            this._exec = cb;
        }
    }

    return new MockPlatformFunctions(cb);
};

export const getMockExpressPayments = (
    config: Record<string, unknown>,
    request: RequestSender['_request']
): ExpressPaymentsClient => {
    class MockRequestSender extends RequestSender {
        _request(
            method: string,
            host: string | null,
            path: string,
            data: RequestData,
            auth: string | null,
            options: RequestOptions = {},
            callback: RequestCallback,
            requestDataProcessor: RequestDataProcessor | null = null
        ) {
            return request(
                method,
                host,
                path,
                data,
                auth,
                options,
                callback,
                requestDataProcessor
            );
        }
    }

    // Provide a testable ExpressPayments instance
    // That is, with mock-requests built in and hookable
    const expressPaymentsFactory: any = createExpressPayments(
        new NodePlatformFunctions(),
        (expressPaymentsInstance) =>
            new MockRequestSender(
                expressPaymentsInstance,
                (expressPayments as any).ExpressPaymentsResource.MAX_BUFFERED_REQUEST_METRICS
            )
    );
    return expressPaymentsFactory(FAKE_API_KEY, config);
};

export const createMockClient = (
    requests: Array<{method: string; path: string; response: string}>
): ExpressPaymentsClient => {
    return getMockExpressPayments(
        {},
        (method, _host, path, _4, _5, _6, callback) => {
            const request = requests.find(
                (r) => r.method == method && r.path == path
            );
            if (!request) {
                throw new Error(
                    `Unable to find a mock request for ${method} ${path}`
                );
            }

            callback(null, Promise.resolve(JSON.parse(request.response)));
        }
    );
};

export const getSpyableExpressPayments = (
    config: Record<string, unknown>
): ExpressPaymentsClient => {
    class SpyableRequestSender extends RequestSender {
        _request(
            method: string,
            host: string | null,
            path: string,
            data: RequestData,
            auth: string | null,
            options: RequestOptions = {},
            callback: RequestCallback,
            requestDataProcessor: RequestDataProcessor | null = null
        ) {
            type LastRequest = {
                method: string;
                url: string;
                data: RequestData;
                headers: RequestHeaders;
                settings: RequestSettings;
                auth?: string;
                host?: string;
            };
            const req: LastRequest = (expressPaymentsInstance.LAST_REQUEST = {
                method,
                url: path,
                data,
                headers: options.headers || {},
                settings: options.settings || {},
            });
            if (auth) {
                req.auth = auth;
            }
            if (host) {
                req.host = host;
            }

            const handleMockRequest = (
                err: Error | null,
                data: string | LastRequest
            ): void => {
                expressPaymentsInstance.REQUESTS.push(data);
                callback(err, {});
            };

            if (requestDataProcessor) {
                requestDataProcessor(
                    method,
                    data,
                    options.headers,
                    handleMockRequest
                );
            } else {
                handleMockRequest(null, req);
            }

            return super._request(
                method,
                host,
                path,
                data,
                auth,
                options,
                callback,
                requestDataProcessor
            );
        }
    }

    // Provide a testable ExpressPayments instance
    // That is, with mock-requests built in and hookable
    const expressPayments = require('../src/expresspayments.cjs.node.js');
    const expressPaymentsInstance = expressPayments(FAKE_API_KEY, config);

    expressPaymentsInstance.REQUESTS = [];

    expressPaymentsInstance._requestSender = new SpyableRequestSender(
        expressPaymentsInstance,
        expressPayments.ExpressPaymentsResource.MAX_BUFFERED_REQUEST_METRICS
    );

    return expressPaymentsInstance;
};

/**
 * Get a random string for test Object creation
 */
export const getRandomString = (): string => {
    return Math.random()
        .toString(36)
        .slice(2);
};

export class FakeCryptoProvider extends CryptoProvider {
    computeHMACSignature(payload: string, secret: string): string {
        return 'fake signature';
    }

    computeHMACSignatureAsync(
        payload: string,
        secret: string
    ): Promise<string> {
        return Promise.resolve('fake signature');
    }
}
