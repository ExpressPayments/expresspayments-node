import {NodePlatformFunctions} from './platform/NodePlatformFunctions.js';
import {createExpressPlatby} from './expressplatby.core.js';

const ExpressPlatby = createExpressPlatby(new NodePlatformFunctions());

module.exports = ExpressPlatby;

// expose constructor as a named property to enable mocking with Sinon.JS
module.exports.ExpressPlatby = ExpressPlatby;

// Allow use with the TypeScript compiler without `esModuleInterop`.
// We may also want to add `Object.defineProperty(exports, "__esModule", {value: true});` in the future, so that Babel users will use the `default` version.
module.exports.default = ExpressPlatby;
