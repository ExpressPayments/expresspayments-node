'use strict';

const expressPlatby = require('../../testUtils.js').getSpyableExpressPlatby();
const expect = require('chai').expect;

describe('Sigma', () => {
  describe('ScheduledQueryRun Resource', () => {
    describe('retrieve', () => {
      it('Sends the correct request', () => {
        expressPlatby.sigma.scheduledQueryRuns.retrieve('sqr_123');
        expect(expressPlatby.LAST_REQUEST).to.deep.equal({
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
        expressPlatby.sigma.scheduledQueryRuns.list();
        expect(expressPlatby.LAST_REQUEST).to.deep.equal({
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
