'use strict';

const expressPlatby = require('../../testUtils.js').getSpyableExpressPlatby();

const expect = require('chai').expect;

describe('Reporting', () => {
  describe('ReportRuns Resource', () => {
    describe('retrieve', () => {
      it('Sends the correct request', () => {
        expressPlatby.reporting.reportRuns.retrieve('frr_123');

        expect(expressPlatby.LAST_REQUEST).to.deep.equal({
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
        expressPlatby.reporting.reportRuns.create({
          parameters: {
            connected_account: 'acct_123',
          },
          report_type: 'activity.summary.1',
        });
        expect(expressPlatby.LAST_REQUEST).to.deep.equal({
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
        expressPlatby.reporting.reportRuns.list();
        expect(expressPlatby.LAST_REQUEST).to.deep.equal({
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
