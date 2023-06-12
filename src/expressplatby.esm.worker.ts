import {WebPlatformFunctions} from './platform/WebPlatformFunctions.js';
import {createExpressPlatby} from './expressplatby.core.js';

export const ExpressPlatby = createExpressPlatby(new WebPlatformFunctions());
export default ExpressPlatby;
