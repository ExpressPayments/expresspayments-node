/* eslint-disable camelcase */

import { ExpressPaymentsRawError, RawErrorType } from "./Types.js";

export const generate = (
    rawExpressPaymentsError: ExpressPaymentsRawError
): ExpressPaymentsError => {
    switch (rawExpressPaymentsError.type) {
        case 'card_error':
            return new ExpressPaymentsCardError(rawExpressPaymentsError);
        case 'invalid_request_error':
            return new ExpressPaymentsInvalidRequestError(
                rawExpressPaymentsError
            );
        case 'api_error':
            return new ExpressPaymentsAPIError(rawExpressPaymentsError);
        case 'authentication_error':
            return new ExpressPaymentsAuthenticationError(
                rawExpressPaymentsError
            );
        case 'rate_limit_error':
            return new ExpressPaymentsRateLimitError(rawExpressPaymentsError);
        case 'idempotency_error':
            return new ExpressPaymentsIdempotencyError(rawExpressPaymentsError);
        case 'invalid_grant':
            return new ExpressPaymentsInvalidGrantError(
                rawExpressPaymentsError
            );
        default:
            return new ExpressPaymentsUnknownError(rawExpressPaymentsError);
    }
};

/**
 * ExpressPaymentsError is the base error from which all other more specific ExpressPayments errors derive.
 * Specifically for errors returned from ExpressPayments' REST API.
 */
export class ExpressPaymentsError extends Error {
    readonly message: string;
    readonly type: string;
    readonly raw: unknown;
    readonly rawType?: RawErrorType;
    readonly headers?: {[header: string]: string};
    readonly requestId?: string;

    readonly code?: string;
    readonly doc_url?: string;
    readonly param?: string;
    readonly detail?: string | Error;
    readonly statusCode?: number;
    readonly charge?: string;
    readonly decline_code?: string;
    readonly payment_method_type?: string;

    readonly payment_intent?: any;
    readonly payment_method?: any;
    readonly setup_intent?: any;
    readonly source?: any;

    constructor(raw: ExpressPaymentsRawError = {}) {
        super(raw.message);
        this.type = this.constructor.name;

        this.raw = raw;
        this.rawType = raw.type;
        this.code = raw.code;
        this.doc_url = raw.doc_url;
        this.param = raw.param;
        this.detail = raw.detail;
        this.headers = raw.headers;
        this.requestId = raw.requestId;
        this.statusCode = raw.statusCode;
        // @ts-ignore
        this.message = raw.message;

        this.charge = raw.charge;
        this.decline_code = raw.decline_code;
        this.payment_intent = raw.payment_intent;
        this.payment_method = raw.payment_method;
        this.payment_method_type = raw.payment_method_type;
        this.setup_intent = raw.setup_intent;
        this.source = raw.source;
    }

    /**
     * Helper factory which takes raw ExpressPayments errors and outputs wrapping instances
     */
    static generate = generate;
}

// Specific ExpressPayments Error types:

/**
 * CardError is raised when a user enters a card that can't be charged for
 * some reason.
 */
export class ExpressPaymentsCardError extends ExpressPaymentsError {}

/**
 * InvalidRequestError is raised when a request is initiated with invalid
 * parameters.
 */
export class ExpressPaymentsInvalidRequestError extends ExpressPaymentsError {}

/**
 * APIError is a generic error that may be raised in cases where none of the
 * other named errors cover the problem. It could also be raised in the case
 * that a new error has been introduced in the API, but this version of the
 * Node.js SDK doesn't know how to handle it.
 */
export class ExpressPaymentsAPIError extends ExpressPaymentsError {}

/**
 * AuthenticationError is raised when invalid credentials are used to connect
 * to ExpressPayments' servers.
 */
export class ExpressPaymentsAuthenticationError extends ExpressPaymentsError {}

/**
 * PermissionError is raised in cases where access was attempted on a resource
 * that wasn't allowed.
 */
export class ExpressPaymentsPermissionError extends ExpressPaymentsError {}

/**
 * RateLimitError is raised in cases where an account is putting too much load
 * on ExpressPayments' API servers (usually by performing too many requests). Please
 * back off on request rate.
 */
export class ExpressPaymentsRateLimitError extends ExpressPaymentsError {}

/**
 * ExpressPaymentsConnectionError is raised in the event that the SDK can't connect to
 * ExpressPayments' servers. That can be for a variety of different reasons from a
 * downed network to a bad TLS certificate.
 */
export class ExpressPaymentsConnectionError extends ExpressPaymentsError {}

/**
 * SignatureVerificationError is raised when the signature verification for a
 * webhook fails
 */
export class ExpressPaymentsSignatureVerificationError extends ExpressPaymentsError {
    header: string | Uint8Array;
    payload: string | Uint8Array;

    constructor(
        header: string | Uint8Array,
        payload: string | Uint8Array,
        raw: ExpressPaymentsRawError = {}
    ) {
        super(raw);
        this.header = header;
        this.payload = payload;
    }
}

/**
 * IdempotencyError is raised in cases where an idempotency key was used
 * improperly.
 */
export class ExpressPaymentsIdempotencyError extends ExpressPaymentsError {}

/**
 * InvalidGrantError is raised when a specified code doesn't exist, is
 * expired, has been used, or doesn't belong to you; a refresh token doesn't
 * exist, or doesn't belong to you; or if an API key's mode (live or test)
 * doesn't match the mode of a code or refresh token.
 */
export class ExpressPaymentsInvalidGrantError extends ExpressPaymentsError {}

/**
 * Any other error from ExpressPayments not specifically captured above
 */
export class ExpressPaymentsUnknownError extends ExpressPaymentsError {}
