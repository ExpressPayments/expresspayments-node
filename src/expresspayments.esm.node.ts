import {NodePlatformFunctions} from './platform/NodePlatformFunctions.js';
import {createExpressPayments} from './expresspayments.core.js';

export const ExpressPayments = createExpressPayments(new NodePlatformFunctions());
export default ExpressPayments;
