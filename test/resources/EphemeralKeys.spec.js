'use strict';

const getSpyableExpressPlatby = require('../testUtils.js')
    .getSpyableExpressPlatby;
const expect = require('chai').expect;

function errorsOnNoExpressPlatbyVersion(expressPlatby) {
    return expect(
        expressPlatby.ephemeralKeys.create({customer: 'cus_123'})
    ).to.be.eventually.rejectedWith(
        /Passing apiVersion in a separate options hash is required/i
    );
}

function sendsCorrectExpressPlatbyVersion(expressPlatby) {
    expressPlatby.ephemeralKeys.create(
        {customer: 'cus_123'},
        {apiVersion: '2022-12-31'}
    );

    expect(expressPlatby.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/ephemeral_keys',
        data: {
            customer: 'cus_123',
        },
        headers: {
            'ExpressPlatby-Version': '2022-12-31',
        },
        settings: {},
    });
}

describe('EphemeralKey Resource', () => {
    describe('create', () => {
        const expressPlatby = getSpyableExpressPlatby();

        it('Sends the correct request', () => {
            expressPlatby.ephemeralKeys.create(
                {customer: 'cus_123'},
                {apiVersion: '2022-12-31'}
            );
            expect(expressPlatby.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/ephemeral_keys',
                data: {
                    customer: 'cus_123',
                },
                headers: {
                    'ExpressPlatby-Version': '2022-12-31',
                },
                settings: {},
            });
        });

        describe('when an api version is set', () => {
            const expressPlatby = getSpyableExpressPlatby({
                apiVersion: '2022-12-31',
            });

            it('Errors if no expressplatby-version is specified', () =>
                errorsOnNoExpressPlatbyVersion(expressPlatby));

            it('Sends the correct expressplatby-version', () => {
                sendsCorrectExpressPlatbyVersion(expressPlatby);
            });
        });

        describe('when no api version is set', () => {
            const expressPlatby = getSpyableExpressPlatby({
                apiVersion: null,
            });

            it('Errors if no expressplatby-version is specified', () =>
                errorsOnNoExpressPlatbyVersion(expressPlatby));

            it('Sends the correct expressplatby-version', () => {
                sendsCorrectExpressPlatbyVersion(expressPlatby);
            });
        });
    });

    describe('delete', () => {
        const expressPlatby = getSpyableExpressPlatby();

        it('Sends the correct request', () => {
            expressPlatby.ephemeralKeys.del('ephkey_123');
            expect(expressPlatby.LAST_REQUEST).to.deep.equal({
                method: 'DELETE',
                url: '/v1/ephemeral_keys/ephkey_123',
                data: {},
                headers: {},
                settings: {},
            });
        });
    });
});
