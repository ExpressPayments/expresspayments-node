// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const Customers = ExpressPaymentsResource.extend({
    fundCashBalance: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/customers/{customer}/fund_cash_balance',
    }),
});
