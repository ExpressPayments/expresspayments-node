'use strict';

const expressPlatby = require('../../testUtils.js').getSpyableExpressPlatby();

const expect = require('chai').expect;

describe('Reporting', () => {
  describe('ReportTypes Resource', () => {
    describe('retrieve', () => {
      it('Sends the correct request', () => {
        expressPlatby.reporting.reportTypes.retrieve('activity.summary.1');

        expect(expressPlatby.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/reporting/report_types/activity.summary.1',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });

    describe('list', () => {
      it('Sends the correct request', () => {
        expressPlatby.reporting.reportTypes.list();
        expect(expressPlatby.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/reporting/report_types',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });
  });
});
