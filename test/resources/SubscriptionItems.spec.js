'use strict';

const expressPlatby = require('../testUtils.js').getSpyableExpressPlatby();
const expect = require('chai').expect;

describe('SubscriptionItems Resource', () => {
    describe('retrieve', () => {
        it('Sends the correct request', () => {
            expressPlatby.subscriptionItems.retrieve('test_sub_item');
            expect(expressPlatby.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/subscription_items/test_sub_item',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('del', () => {
        it('Sends the correct request', () => {
            expressPlatby.subscriptionItems.del('test_sub_item');
            expect(expressPlatby.LAST_REQUEST).to.deep.equal({
                method: 'DELETE',
                url: '/v1/subscription_items/test_sub_item',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('update', () => {
        it('Sends the correct request', () => {
            expressPlatby.subscriptionItems.update('test_sub_item', {
                plan: 'gold',
            });
            expect(expressPlatby.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/subscription_items/test_sub_item',
                headers: {},
                data: {
                    plan: 'gold',
                },
                settings: {},
            });
        });
    });

    describe('create', () => {
        it('Sends the correct request', () => {
            expressPlatby.subscriptionItems.create({
                subscription: 'test_sub',
                plan: 'gold',
            });

            expect(expressPlatby.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/subscription_items',
                headers: {},
                data: {
                    subscription: 'test_sub',
                    plan: 'gold',
                },
                settings: {},
            });
        });
    });

    describe('list', () => {
        it('Sends the correct request', () => {
            expressPlatby.subscriptionItems.list({
                limit: 3,
                subscription: 'test_sub',
            });
            expect(expressPlatby.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/subscription_items?limit=3&subscription=test_sub',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('createUsageRecord', () => {
        it('Sends the correct request', () => {
            const data = {
                quantity: 123,
                timestamp: 123321,
                action: 'increment',
            };
            expressPlatby.subscriptionItems.createUsageRecord('si_123', data);
            expect(expressPlatby.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/subscription_items/si_123/usage_records',
                headers: {},
                data,
                settings: {},
            });
        });
    });

    describe('listUsageRecordSummaries', () => {
        it('Sends the correct request', () => {
            expressPlatby.subscriptionItems.listUsageRecordSummaries(
                'si_123',
                {}
            );

            expect(expressPlatby.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/subscription_items/si_123/usage_record_summaries',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });
});
