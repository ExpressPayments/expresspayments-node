'use strict';

const getSpyableExpressPayments = require('../testUtils.js')
    .getSpyableExpressPayments;
const expect = require('chai').expect;

function errorsOnNoExpressPaymentsVersion(expressPayments) {
    return expect(
        expressPayments.ephemeralKeys.create({customer: 'cus_123'})
    ).to.be.eventually.rejectedWith(
        /Passing apiVersion in a separate options hash is required/i
    );
}

function sendsCorrectExpressPaymentsVersion(expressPayments) {
    expressPayments.ephemeralKeys.create(
        {customer: 'cus_123'},
        {apiVersion: '2022-12-31'}
    );

    expect(expressPayments.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/ephemeral_keys',
        data: {
            customer: 'cus_123',
        },
        headers: {
            'EP-Version': '2022-12-31',
        },
        settings: {},
    });
}

describe('EphemeralKey Resource', () => {
    describe('create', () => {
        const expressPayments = getSpyableExpressPayments();

        it('Sends the correct request', () => {
            expressPayments.ephemeralKeys.create(
                {customer: 'cus_123'},
                {apiVersion: '2022-12-31'}
            );
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/ephemeral_keys',
                data: {
                    customer: 'cus_123',
                },
                headers: {
                    'EP-Version': '2022-12-31',
                },
                settings: {},
            });
        });

        describe('when an api version is set', () => {
            const expressPayments = getSpyableExpressPayments({
                apiVersion: '2022-12-31',
            });

            it('Errors if no ep-Version is specified', () =>
                errorsOnNoExpressPaymentsVersion(expressPayments));

            it('Sends the correct ep-Version', () => {
                sendsCorrectExpressPaymentsVersion(expressPayments);
            });
        });

        describe('when no api version is set', () => {
            const expressPayments = getSpyableExpressPayments({
                apiVersion: null,
            });

            it('Errors if no ep-Version is specified', () =>
                errorsOnNoExpressPaymentsVersion(expressPayments));

            it('Sends the correct ep-Version', () => {
                sendsCorrectExpressPaymentsVersion(expressPayments);
            });
        });
    });

    describe('delete', () => {
        const expressPayments = getSpyableExpressPayments();

        it('Sends the correct request', () => {
            expressPayments.ephemeralKeys.del('ephkey_123');
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'DELETE',
                url: '/v1/ephemeral_keys/ephkey_123',
                data: {},
                headers: {},
                settings: {},
            });
        });
    });
});
