import {WebPlatformFunctions} from './platform/WebPlatformFunctions.js';
import {createExpressPayments} from './expresspayments.core.js';

export const ExpressPayments = createExpressPayments(
    new WebPlatformFunctions()
);
export default ExpressPayments;
