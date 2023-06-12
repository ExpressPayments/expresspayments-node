import {NodePlatformFunctions} from './platform/NodePlatformFunctions.js';
import {createExpressPlatby} from './expressplatby.core.js';

export const ExpressPlatby = createExpressPlatby(new NodePlatformFunctions());
export default ExpressPlatby;
