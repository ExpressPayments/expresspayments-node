// File generated from our OpenAPI spec

import {ExpressPaymentsResource} from '../ExpressPaymentsResource';

const expressPaymentsMethod = ExpressPaymentsResource.method;

export const PromotionCodes = ExpressPaymentsResource.extend({
    create: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/promotion_codes',
    }),

    retrieve: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/promotion_codes/{promotion_code}',
    }),

    update: expressPaymentsMethod({
        method: 'POST',
        fullPath: '/v1/promotion_codes/{promotion_code}',
    }),

    list: expressPaymentsMethod({
        method: 'GET',
        fullPath: '/v1/promotion_codes',
        methodType: 'list',
    }),
});
