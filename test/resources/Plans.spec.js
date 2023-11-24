'use strict';

const expressPayments = require('../testUtils.js').getSpyableExpressPayments();
const expect = require('chai').expect;

describe('Plans Resource', () => {
    describe('retrieve', () => {
        it('Sends the correct request', () => {
            expressPayments.plans.retrieve('plan_123');
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/plans/plan_123',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('create', () => {
        it('Sends the correct request', () => {
            expressPayments.plans.create({
                amount: 200,
                currency: 'usd',
            });
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/plans',
                headers: {},
                data: {amount: 200, currency: 'usd'},
                settings: {},
            });
        });

        it('Sends the correct request for metered', () => {
            expressPayments.plans.create({
                amount: 200,
                currency: 'usd',
                usage_type: 'metered',
            });
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/plans',
                headers: {},
                data: {amount: 200, currency: 'usd', usage_type: 'metered'},
                settings: {},
            });
        });

        it('Sends the correct request for tiered plans', () => {
            expressPayments.plans.create({
                currency: 'usd',
                billing_scheme: 'tiered',
                tiers: [
                    {up_to: 123, amount: 100},
                    {up_to: 'inf', amount: 200},
                ],
                tiers_mode: 'volume',
            });
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/plans',
                headers: {},
                data: {
                    currency: 'usd',
                    billing_scheme: 'tiered',
                    tiers: [
                        {up_to: 123, amount: 100},
                        {up_to: 'inf', amount: 200},
                    ],
                    tiers_mode: 'volume',
                },
                settings: {},
            });
        });

        it('Sends the correct request for transform usage plans', () => {
            expressPayments.plans.create({
                amount: 200,
                currency: 'usd',
                transform_usage: {divide_by: 123, round: 'up'},
            });
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/plans',
                headers: {},
                data: {
                    amount: 200,
                    currency: 'usd',
                    transform_usage: {divide_by: 123, round: 'up'},
                },
                settings: {},
            });
        });
    });

    describe('update', () => {
        it('Sends the correct request', () => {
            expressPayments.plans.update('plan_123', {
                active: false,
            });
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/plans/plan_123',
                headers: {},
                data: {active: false},
                settings: {},
            });
        });
    });

    describe('del', () => {
        it('Sends the correct request', () => {
            expressPayments.plans.del('plan_123');
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'DELETE',
                url: '/v1/plans/plan_123',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('list', () => {
        it('Sends the correct request', () => {
            expressPayments.plans.list();
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/plans',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });
});
