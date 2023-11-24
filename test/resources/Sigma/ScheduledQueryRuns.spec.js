'use strict';

const expressPayments = require('../../testUtils.js').getSpyableExpressPayments();
const expect = require('chai').expect;

describe('Sigma', () => {
    describe('ScheduledQueryRun Resource', () => {
        describe('retrieve', () => {
            it('Sends the correct request', () => {
                expressPayments.sigma.scheduledQueryRuns.retrieve('sqr_123');
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'GET',
                    url: '/v1/sigma/scheduled_query_runs/sqr_123',
                    data: {},
                    headers: {},
                    settings: {},
                });
            });
        });

        describe('list', () => {
            it('Sends the correct request', () => {
                expressPayments.sigma.scheduledQueryRuns.list();
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'GET',
                    url: '/v1/sigma/scheduled_query_runs',
                    data: {},
                    headers: {},
                    settings: {},
                });
            });
        });
    });
});
