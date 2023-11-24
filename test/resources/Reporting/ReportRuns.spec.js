'use strict';

const expressPayments = require('../../testUtils.js').getSpyableExpressPayments();

const expect = require('chai').expect;

describe('Reporting', () => {
    describe('ReportRuns Resource', () => {
        describe('retrieve', () => {
            it('Sends the correct request', () => {
                expressPayments.reporting.reportRuns.retrieve('frr_123');

                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'GET',
                    url: '/v1/reporting/report_runs/frr_123',
                    headers: {},
                    data: {},
                    settings: {},
                });
            });
        });

        describe('create', () => {
            it('Sends the correct request', () => {
                expressPayments.reporting.reportRuns.create({
                    parameters: {
                        connected_account: 'acct_123',
                    },
                    report_type: 'activity.summary.1',
                });
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'POST',
                    url: '/v1/reporting/report_runs',
                    headers: {},
                    data: {
                        parameters: {
                            connected_account: 'acct_123',
                        },
                        report_type: 'activity.summary.1',
                    },
                    settings: {},
                });
            });
        });

        describe('list', () => {
            it('Sends the correct request', () => {
                expressPayments.reporting.reportRuns.list();
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'GET',
                    url: '/v1/reporting/report_runs',
                    headers: {},
                    data: {},
                    settings: {},
                });
            });
        });
    });
});
