// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../../../ExpressPaymentsResource.js';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const Readers = ExpressPaymentsResource.extend({
    presentPaymentMethod: expressPaymentsMethod({
        method: 'POST',
        fullPath:
            '/v1/test_helpers/terminal/readers/{reader}/present_payment_method',
    }),
});
