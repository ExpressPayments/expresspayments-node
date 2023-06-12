// @ts-nocheck

import {expect} from 'chai';
import {ExpressPlatbySignatureVerificationError} from '../src/Error.js';
import {FakeCryptoProvider, getSpyableExpressPlatby} from './testUtils.js';

const expressPlatby = getSpyableExpressPlatby();

const EVENT_PAYLOAD = {
    id: 'evt_test_webhook',
    object: 'event',
};
const EVENT_PAYLOAD_STRING = JSON.stringify(EVENT_PAYLOAD, null, 2);
const SECRET = 'whsec_test_secret';

describe('Webhooks', () => {
    describe('.generateTestHeaderString', () => {
        it('should throw when no opts are passed', () => {
            expect(() => {
                expressPlatby.webhooks.generateTestHeaderString();
            }).to.throw();
        });

        it('should correctly construct a webhook header', () => {
            const header = expressPlatby.webhooks.generateTestHeaderString({
                payload: EVENT_PAYLOAD_STRING,
                secret: SECRET,
            });

            expect(header).to.not.be.undefined;
            expect(header.split(',')).to.have.lengthOf(2);
        });
    });

    const makeConstructEventTests = (
        constructEventFn: typeof expressPlatby.webhooks.construct
    ) => {
        return (): void => {
            it('should return an Event instance from a valid JSON payload and valid signature header', async () => {
                const header = expressPlatby.webhooks.generateTestHeaderString({
                    payload: EVENT_PAYLOAD_STRING,
                    secret: SECRET,
                });

                const event = await constructEventFn(
                    EVENT_PAYLOAD_STRING,
                    header,
                    SECRET
                );

                expect(event.id).to.equal(EVENT_PAYLOAD.id);
            });

            it('should return an Event instance from a payload and header with type Buffer', async () => {
                const header = expressPlatby.webhooks.generateTestHeaderString({
                    payload: EVENT_PAYLOAD_STRING,
                    secret: SECRET,
                });

                const event = await constructEventFn(
                    Buffer.from(EVENT_PAYLOAD_STRING),
                    Buffer.from(header),
                    SECRET
                );

                expect(event.id).to.equal(EVENT_PAYLOAD.id);
            });

            it('should return an Event instance from a payload and header with type Uint8Array', async () => {
                const header = expressPlatby.webhooks.generateTestHeaderString({
                    payload: EVENT_PAYLOAD_STRING,
                    secret: SECRET,
                });

                const textEncoder = new TextEncoder();
                const event = await constructEventFn(
                    textEncoder.encode(EVENT_PAYLOAD_STRING),
                    textEncoder.encode(header),
                    SECRET
                );

                expect(event.id).to.equal(EVENT_PAYLOAD.id);
            });

            it('should raise a JSON error from invalid JSON payload', async () => {
                const header = expressPlatby.webhooks.generateTestHeaderString({
                    payload: '} I am not valid JSON; 123][',
                    secret: SECRET,
                });
                await expect(
                    constructEventFn(
                        '} I am not valid JSON; 123][',
                        header,
                        SECRET
                    )
                ).to.be.rejectedWith(/Unexpected token/);
                await expect(
                    constructEventFn(
                        '} I am not valid JSON; 123][',
                        header,
                        SECRET
                    )
                ).to.be.rejectedWith(/Unexpected token/);
            });

            it('should raise a SignatureVerificationError from a valid JSON payload and an invalid signature header', async () => {
                const header = 'bad_header';

                await expect(
                    constructEventFn(EVENT_PAYLOAD_STRING, header, SECRET)
                ).to.be.rejectedWith(
                    /Unable to extract timestamp and signatures from header/
                );
            });

            it('should raise a SignatureVerificationError from a valid JSON payload and an invalid signature header', async () => {
                const header = 'bad_header';
                const expected = /No webhook payload was provided/;

                await expect(
                    constructEventFn(null, header, SECRET)
                ).to.be.rejectedWith(expected);
                await expect(
                    constructEventFn(undefined, header, SECRET)
                ).to.be.rejectedWith(expected);
                await expect(
                    constructEventFn('', header, SECRET)
                ).to.be.rejectedWith(expected);
            });

            it('should error if you pass a signature which is an array, even though our types say you can', async () => {
                const header = expressPlatby.webhooks.generateTestHeaderString({
                    payload: EVENT_PAYLOAD_STRING,
                    secret: SECRET,
                });

                await expect(
                    constructEventFn(EVENT_PAYLOAD_STRING, [header], SECRET)
                ).to.be.rejectedWith(
                    'Unexpected: An array was passed as a header, which should not be possible for the expressplatby-signature header.'
                );
            });

            it('should invoke a custom CryptoProvider', async () => {
                const header = expressPlatby.webhooks.generateTestHeaderString({
                    payload: EVENT_PAYLOAD_STRING,
                    secret: SECRET,
                    signature: 'fake signature',
                });

                const event = await constructEventFn(
                    EVENT_PAYLOAD_STRING,
                    header,
                    SECRET,
                    undefined,
                    new FakeCryptoProvider()
                );

                expect(event.id).to.equal(EVENT_PAYLOAD.id);
            });
        };
    };

    describe(
        '.constructEvent',
        makeConstructEventTests(async (...args: any) => {
            const result = await expressPlatby.webhooks.constructEvent(...args);
            return result;
        })
    );

    describe(
        '.constructEventAsync',
        makeConstructEventTests((...args: any) =>
            expressPlatby.webhooks.constructEventAsync(...args)
        )
    );

    const makeVerifySignatureHeaderTests = (
        verifyHeaderFn: typeof expressPlatby.webhooks.verify
    ) => {
        return (): void => {
            it('should raise a SignatureVerificationError when the header does not have the expected format', async () => {
                const header = "I'm not even a real signature header";

                const expectedMessage = /Unable to extract timestamp and signatures from header/;

                await expect(
                    verifyHeaderFn(EVENT_PAYLOAD_STRING, header, SECRET)
                ).to.be.rejectedWith(
                    ExpressPlatbySignatureVerificationError,
                    expectedMessage
                );
            });

            it('should raise a SignatureVerificationError when the header is null or empty', async () => {
                const expectedMessage = /No expressplatby-signature header value was provided./;

                await expect(
                    verifyHeaderFn(EVENT_PAYLOAD_STRING, null, SECRET)
                ).to.be.rejectedWith(
                    ExpressPlatbySignatureVerificationError,
                    expectedMessage
                );

                await expect(
                    verifyHeaderFn(EVENT_PAYLOAD_STRING, undefined, SECRET)
                ).to.be.rejectedWith(
                    ExpressPlatbySignatureVerificationError,
                    expectedMessage
                );

                await expect(
                    verifyHeaderFn(EVENT_PAYLOAD_STRING, '', SECRET)
                ).to.be.rejectedWith(
                    ExpressPlatbySignatureVerificationError,
                    expectedMessage
                );
            });

            it('should raise a SignatureVerificationError when there are no signatures with the expected scheme', async () => {
                const header = expressPlatby.webhooks.generateTestHeaderString({
                    payload: EVENT_PAYLOAD_STRING,
                    secret: SECRET,
                    scheme: 'v0',
                });

                await expect(
                    verifyHeaderFn(EVENT_PAYLOAD_STRING, header, SECRET)
                ).to.be.rejectedWith(
                    ExpressPlatbySignatureVerificationError,
                    /No signatures found with expected scheme/
                );
            });

            it('should raise a SignatureVerificationError when there are no valid signatures for the payload', async () => {
                const header = expressPlatby.webhooks.generateTestHeaderString({
                    payload: EVENT_PAYLOAD_STRING,
                    secret: SECRET,
                    signature: 'bad_signature',
                });

                await expect(
                    verifyHeaderFn(EVENT_PAYLOAD_STRING, header, SECRET)
                ).to.be.rejectedWith(
                    ExpressPlatbySignatureVerificationError,
                    /No signatures found matching the expected signature for payload/
                );
            });

            it('should raise a SignatureVerificationError when the timestamp is not within the tolerance of the provided timestamp', async () => {
                const receivedAt = 20000000;
                const header = expressPlatby.webhooks.generateTestHeaderString({
                    timestamp: receivedAt / 1000 - 15,
                    payload: EVENT_PAYLOAD_STRING,
                    secret: SECRET,
                });

                await expect(
                    verifyHeaderFn(
                        EVENT_PAYLOAD_STRING,
                        header,
                        SECRET,
                        10,
                        null,
                        receivedAt
                    )
                ).to.be.rejectedWith(
                    ExpressPlatbySignatureVerificationError,
                    /Timestamp outside the tolerance zone/
                );
            });

            it('should raise a SignatureVerificationError when the timestamp is not within the tolerance of Date.now()', async () => {
                const header = expressPlatby.webhooks.generateTestHeaderString({
                    timestamp: Date.now() / 1000 - 15,
                    payload: EVENT_PAYLOAD_STRING,
                    secret: SECRET,
                });

                await expect(
                    verifyHeaderFn(EVENT_PAYLOAD_STRING, header, SECRET, 10)
                ).to.be.rejectedWith(
                    ExpressPlatbySignatureVerificationError,
                    /Timestamp outside the tolerance zone/
                );
            });

            it(
                'should return true when the header contains a valid signature and ' +
                    'the timestamp is within the tolerance of Date.now()',
                async () => {
                    const header = expressPlatby.webhooks.generateTestHeaderString(
                        {
                            timestamp: Date.now() / 1000,
                            payload: EVENT_PAYLOAD_STRING,
                            secret: SECRET,
                        }
                    );

                    expect(
                        await verifyHeaderFn(
                            EVENT_PAYLOAD_STRING,
                            header,
                            SECRET,
                            10
                        )
                    ).to.equal(true);
                }
            );

            it(
                'should return true when the header contains a valid signature and ' +
                    'the timestamp is within the tolerance of the provided timestamp',
                async () => {
                    const receivedAt = 20000000;
                    const header = expressPlatby.webhooks.generateTestHeaderString(
                        {
                            timestamp: receivedAt / 1000 - 9,
                            payload: EVENT_PAYLOAD_STRING,
                            secret: SECRET,
                        }
                    );

                    expect(
                        await verifyHeaderFn(
                            EVENT_PAYLOAD_STRING,
                            header,
                            SECRET,
                            10,
                            null,
                            receivedAt
                        )
                    ).to.equal(true);
                }
            );

            it('should return true when the header contains at least one valid signature', async () => {
                let header = expressPlatby.webhooks.generateTestHeaderString({
                    timestamp: Date.now() / 1000,
                    payload: EVENT_PAYLOAD_STRING,
                    secret: SECRET,
                });

                header += ',v1=potato';

                expect(
                    await verifyHeaderFn(
                        EVENT_PAYLOAD_STRING,
                        header,
                        SECRET,
                        10
                    )
                ).to.equal(true);
            });

            it(
                'should return true when the header contains a valid signature ' +
                    'and the timestamp is off but no tolerance is provided',
                async () => {
                    const header = expressPlatby.webhooks.generateTestHeaderString(
                        {
                            timestamp: 12345,
                            payload: EVENT_PAYLOAD_STRING,
                            secret: SECRET,
                        }
                    );

                    expect(
                        await verifyHeaderFn(
                            EVENT_PAYLOAD_STRING,
                            header,
                            SECRET
                        )
                    ).to.equal(true);
                }
            );

            it('should accept Buffer instances for the payload and header', async () => {
                const header = expressPlatby.webhooks.generateTestHeaderString({
                    timestamp: Date.now() / 1000,
                    payload: EVENT_PAYLOAD_STRING,
                    secret: SECRET,
                });

                expect(
                    await verifyHeaderFn(
                        Buffer.from(EVENT_PAYLOAD_STRING),
                        Buffer.from(header),
                        SECRET,
                        10
                    )
                ).to.equal(true);
            });

            it('should raise a SignatureVerificationError when payload is of an unknown type', async () => {
                const header = expressPlatby.webhooks.generateTestHeaderString({
                    payload: EVENT_PAYLOAD_STRING,
                    secret: SECRET,
                });

                await expect(
                    verifyHeaderFn({}, header, SECRET)
                ).to.be.rejectedWith(
                    ExpressPlatbySignatureVerificationError,
                    /Webhook payload must be provided as a string or a Buffer/
                );
                await expect(
                    verifyHeaderFn(new Date(), header, SECRET)
                ).to.be.rejectedWith(
                    ExpressPlatbySignatureVerificationError,
                    /Webhook payload must be provided as a string or a Buffer/
                );
            });

            it('should raise a SignatureVerificationError when the signing secret contians whitespace', async () => {
                const header = expressPlatby.webhooks.generateTestHeaderString({
                    payload: EVENT_PAYLOAD_STRING,
                    secret: SECRET,
                });

                await expect(
                    verifyHeaderFn(EVENT_PAYLOAD_STRING, header, SECRET + ' ')
                ).to.be.rejectedWith(
                    ExpressPlatbySignatureVerificationError,
                    /The provided signing secret contains whitespace/
                );
            });

            describe('custom CryptoProvider', () => {
                const cryptoProvider = new FakeCryptoProvider();

                it('should use the provider to compute a signature (mismatch)', async () => {
                    const header = expressPlatby.webhooks.generateTestHeaderString(
                        {
                            payload: EVENT_PAYLOAD_STRING,
                            secret: SECRET,
                            signature: 'different fake signature',
                            timestamp: 123,
                        }
                    );

                    await expect(
                        verifyHeaderFn(
                            EVENT_PAYLOAD_STRING,
                            header,
                            SECRET,
                            undefined,
                            cryptoProvider
                        )
                    ).to.be.rejectedWith(
                        /No signatures found matching the expected signature for payload/
                    );
                });
                it('should use the provider to compute a signature (success)', async () => {
                    const header = expressPlatby.webhooks.generateTestHeaderString(
                        {
                            payload: EVENT_PAYLOAD_STRING,
                            secret: SECRET,
                            signature: 'fake signature',
                            timestamp: 123,
                        }
                    );

                    expect(
                        await verifyHeaderFn(
                            EVENT_PAYLOAD_STRING,
                            header,
                            SECRET,
                            undefined,
                            cryptoProvider
                        )
                    ).to.equal(true);
                });
            });
        };
    };

    describe(
        '.verifySignatureHeader',
        makeVerifySignatureHeaderTests(async (...args: any) => {
            const result = await expressPlatby.webhooks.signature.verifyHeader(
                ...args
            );
            return result;
        })
    );

    describe(
        '.verifySignatureHeaderAsync',
        makeVerifySignatureHeaderTests((...args: any) =>
            expressPlatby.webhooks.signature.verifyHeaderAsync(...args)
        )
    );
});
