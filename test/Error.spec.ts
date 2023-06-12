require('./testUtils.ts');

import * as Error from '../src/Error.js';
import {expect} from 'chai';

describe('Error', () => {
    describe('ExpressPlatbyError', () => {
        it('Generates specific instance depending on error-type', () => {
            expect(
                Error.ExpressPlatbyError.generate({type: 'card_error'})
            ).to.be.instanceOf(Error.ExpressPlatbyCardError);
            expect(
                Error.ExpressPlatbyError.generate({
                    type: 'invalid_request_error',
                })
            ).to.be.instanceOf(Error.ExpressPlatbyInvalidRequestError);
            expect(
                Error.ExpressPlatbyError.generate({type: 'api_error'})
            ).to.be.instanceOf(Error.ExpressPlatbyAPIError);
            expect(
                Error.ExpressPlatbyError.generate({type: 'idempotency_error'})
            ).to.be.instanceOf(Error.ExpressPlatbyIdempotencyError);
            expect(
                Error.ExpressPlatbyError.generate({type: 'weird_error' as any})
            ).to.be.instanceOf(Error.ExpressPlatbyUnknownError);
        });

        it('copies whitelisted properties', () => {
            const e = new Error.ExpressPlatbyError({
                charge: 'foo',
                unknown_prop: 'bar',
            } as any);
            expect(e).to.have.property('charge', 'foo');
            expect(e).not.to.have.property('unknown_prop', 'bar');
            expect(e).not.to.have.property('decline_code', 'xyzzy');
        });

        it('Pulls in headers', () => {
            const headers = {'Request-Id': '123'};
            const e = Error.ExpressPlatbyError.generate({
                type: 'card_error',
                headers,
            });
            expect(e).to.have.property('headers', headers);
        });

        it('Pulls in request IDs', () => {
            const e = Error.ExpressPlatbyError.generate({
                type: 'card_error',
                requestId: 'foo',
            });
            expect(e).to.have.property('requestId', 'foo');
        });

        it('Pulls in HTTP status code', () => {
            const e = Error.ExpressPlatbyError.generate({
                type: 'card_error',
                statusCode: 400,
            });
            expect(e).to.have.property('statusCode', 400);
        });

        it('has subclasses which provide `.type` as their name', () => {
            class Foo extends Error.ExpressPlatbyError {}

            const err = new Foo({message: 'hi'});
            expect(err).to.have.property('type', 'Foo');
        });
    });
});
