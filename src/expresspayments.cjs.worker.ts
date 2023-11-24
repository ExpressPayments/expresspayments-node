import {WebPlatformFunctions} from './platform/WebPlatformFunctions.js';
import {createExpressPayments} from './expresspayments.core.js';

const ExpressPayments = createExpressPayments(new WebPlatformFunctions());

module.exports = ExpressPayments;

// expose constructor as a named property to enable mocking with Sinon.JS
module.exports.ExpressPayments = ExpressPayments;

// Allow use with the TypeScript compiler without `esModuleInterop`.
// We may also want to add `Object.defineProperty(exports, "__esModule", {value: true});` in the future, so that Babel users will use the `default` version.
module.exports.default = ExpressPayments;
