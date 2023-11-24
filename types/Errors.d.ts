declare module 'expresspayments' {
    namespace ExpressPayments {
        export type RawErrorType =
            | 'card_error'
            | 'invalid_request_error'
            | 'api_error'
            | 'idempotency_error'
            | 'rate_limit_error'
            | 'authentication_error'
            | 'invalid_grant';

        export type ExpressPaymentsRawError = {
            message?: string;

            type: RawErrorType;

            headers?: {[header: string]: string};
            statusCode?: number;
            requestId?: string;

            code?: string;
            doc_code?: string;
            decline_code?: string;
            param?: string;
            detail?: string;

            charge?: string;
            payment_intent?: ExpressPayments.PaymentIntent;
            payment_method?: ExpressPayments.PaymentMethod;
            setup_intent?: ExpressPayments.SetupIntent;
            source?: ExpressPayments.Source;
        };

        namespace errors {
            function generate(
                rawError: ExpressPaymentsRawError & {type: 'card_error'}
            ): ExpressPaymentsCardError;
            function generate(
                rawError: ExpressPaymentsRawError & {
                    type: 'invalid_request_error';
                }
            ): ExpressPaymentsInvalidRequestError;
            function generate(
                rawError: ExpressPaymentsRawError & {type: 'api_error'}
            ): ExpressPaymentsAPIError;
            function generate(
                rawError: ExpressPaymentsRawError & {
                    type: 'authentication_error';
                }
            ): ExpressPaymentsAuthenticationError;
            function generate(
                rawError: ExpressPaymentsRawError & {type: 'rate_limit_error'}
            ): ExpressPaymentsRateLimitError;
            function generate(
                rawError: ExpressPaymentsRawError & {type: 'idempotency_error'}
            ): ExpressPaymentsIdempotencyError;
            function generate(
                rawError: ExpressPaymentsRawError & {type: 'invalid_grant'}
            ): ExpressPaymentsInvalidGrantError;
            function generate(
                rawError: ExpressPaymentsRawError & {type: RawErrorType}
            ): ExpressPaymentsError;

            class ExpressPaymentsError extends Error {
                constructor(rawError: ExpressPaymentsRawError);

                static generate(
                    rawError: ExpressPaymentsRawError & {type: 'card_error'}
                ): ExpressPaymentsCardError;
                static generate(
                    rawError: ExpressPaymentsRawError & {
                        type: 'invalid_request_error';
                    }
                ): ExpressPaymentsInvalidRequestError;
                static generate(
                    rawError: ExpressPaymentsRawError & {type: 'api_error'}
                ): ExpressPaymentsAPIError;
                static generate(
                    rawError: ExpressPaymentsRawError & {
                        type: 'authentication_error';
                    }
                ): ExpressPaymentsAuthenticationError;
                static generate(
                    rawError: ExpressPaymentsRawError & {
                        type: 'rate_limit_error';
                    }
                ): ExpressPaymentsRateLimitError;
                static generate(
                    rawError: ExpressPaymentsRawError & {
                        type: 'idempotency_error';
                    }
                ): ExpressPaymentsIdempotencyError;
                static generate(
                    rawError: ExpressPaymentsRawError & {type: 'invalid_grant'}
                ): ExpressPaymentsInvalidGrantError;
                static generate(
                    rawError: ExpressPaymentsRawError & {type: RawErrorType}
                ): ExpressPaymentsError;

                /**
                 * A human-readable message giving more details about the error. For card errors, these messages can
                 * be shown to your users.
                 */
                readonly message: string;

                readonly type:
                    | 'ExpressPaymentsError'
                    | 'ExpressPaymentsCardError'
                    | 'ExpressPaymentsInvalidRequestError'
                    | 'ExpressPaymentsAPIError'
                    | 'ExpressPaymentsAuthenticationError'
                    | 'ExpressPaymentsPermissionError'
                    | 'ExpressPaymentsRateLimitError'
                    | 'ExpressPaymentsConnectionError'
                    | 'ExpressPaymentsSignatureVerificationError'
                    | 'ExpressPaymentsIdempotencyError'
                    | 'ExpressPaymentsInvalidGrantError';

                /**
                 * See the "error types" section at https://docs.epayments.network/api/errors
                 */
                readonly rawType: RawErrorType;

                /**
                 * For card errors, a short string describing the kind of card error that occurred.
                 *
                 * @docs https://docs.epayments.network/error-codes
                 */
                readonly code?: string;

                /**
                 * A URL to more information about the error code reported.
                 *
                 * @docs https://docs.epayments.network/error-codes
                 */
                readonly doc_url?: string;

                /**
                 * Typically a 4xx or 5xx.
                 */
                readonly statusCode?: number;

                readonly raw: unknown;

                readonly headers: {
                    [key: string]: string;
                };

                readonly requestId: string;

                /**
                 * The parameter the error relates to if the error is parameter-specific. You can use this to display a
                 * message near the correct form field, for example.
                 */
                readonly param?: string;

                readonly charge?: string;
                readonly decline_code?: string;
                readonly payment_intent?: PaymentIntent;
                readonly payment_method?: PaymentMethod;
                readonly payment_method_type?: string;
                readonly setup_intent?: SetupIntent;
                readonly source?: Source;
            }

            /**
             * Card errors are the most common type of error you should expect to handle.
             * They result when the user enters a card that can't be charged for some reason.
             */
            class ExpressPaymentsCardError extends ExpressPaymentsError {
                readonly type: 'ExpressPaymentsCardError';
                readonly rawType: 'card_error';

                /**
                 * @docs https://docs.epayments.network/declines/codes
                 */
                readonly decline_code: string;
            }

            /**
             * Invalid request errors arise when your request has invalid parameters.
             */
            class ExpressPaymentsInvalidRequestError extends ExpressPaymentsError {
                readonly type: 'ExpressPaymentsInvalidRequestError';
                readonly rawType: 'invalid_request_error';
            }

            /**
             * API errors cover any other type of problem (e.g., a temporary problem with ExpressPayments' servers),
             * and are extremely uncommon.
             *
             * It could also be raised in the case that a new error has been introduced in the API,
             * but this version of the library doesn't know how to handle it.
             */
            class ExpressPaymentsAPIError extends ExpressPaymentsError {
                readonly type: 'ExpressPaymentsAPIError';
                readonly rawType: 'api_error';
            }

            /**
             * Failure to properly authenticate yourself in the request.
             */
            class ExpressPaymentsAuthenticationError extends ExpressPaymentsError {
                readonly type: 'ExpressPaymentsAuthenticationError';
                readonly rawType: 'authentication_error';
            }

            /**
             * Access was attempted on a resource that wasn't allowed.
             */
            class ExpressPaymentsPermissionError extends ExpressPaymentsError {
                readonly type: 'ExpressPaymentsPermissionError';
            }

            /**
             * Too many requests hit the API too quickly.
             * @docs https://docs.epayments.network/rate-limits
             */
            class ExpressPaymentsRateLimitError extends ExpressPaymentsError {
                readonly type: 'ExpressPaymentsRateLimitError';
                readonly rawType: 'rate_limit_error';
            }

            /**
             * The library cannot connect to ExpressPayments.
             * This can happen for a variety of reasons,
             * such as loss of network connectivity or a bad TLS certificate.
             */
            class ExpressPaymentsConnectionError extends ExpressPaymentsError {
                readonly type: 'ExpressPaymentsConnectionError';
            }

            /**
             * The signature verification for a webhook failed.
             * @docs https://docs.epayments.network/webhooks/signatures
             */
            class ExpressPaymentsSignatureVerificationError extends ExpressPaymentsError {
                readonly type: 'ExpressPaymentsSignatureVerificationError';
            }

            /**
             * Idempotency errors occur when an `Idempotency-Key` is re-used on a request that does not match the first request's API endpoint and parameters.
             * @docs https://docs.epayments.network/api/idempotent_requests?lang=node
             */
            class ExpressPaymentsIdempotencyError extends ExpressPaymentsError {
                readonly type: 'ExpressPaymentsIdempotencyError';
                readonly rawType: 'idempotency_error';
            }

            /**
             * InvalidGrantError is raised when a specified code doesn't exist, is
             * expired, has been used, or doesn't belong to you; a refresh token doesn't
             * exist, or doesn't belong to you; or if an API key's mode (live or test)
             * doesn't match the mode of a code or refresh token.
             */
            class ExpressPaymentsInvalidGrantError extends ExpressPaymentsError {
                readonly type: 'ExpressPaymentsInvalidGrantError';
                readonly rawType: 'invalid_grant';
            }
        }
    }
}
