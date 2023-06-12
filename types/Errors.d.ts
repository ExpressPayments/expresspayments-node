declare module 'expressplatby' {
    namespace ExpressPlatby {
        export type RawErrorType =
            | 'card_error'
            | 'invalid_request_error'
            | 'api_error'
            | 'idempotency_error'
            | 'rate_limit_error'
            | 'authentication_error'
            | 'invalid_grant';

        export type ExpressPlatbyRawError = {
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
            payment_intent?: ExpressPlatby.PaymentIntent;
            payment_method?: ExpressPlatby.PaymentMethod;
            setup_intent?: ExpressPlatby.SetupIntent;
            source?: ExpressPlatby.Source;
        };

        namespace errors {
            function generate(
                rawError: ExpressPlatbyRawError & {type: 'card_error'}
            ): ExpressPlatbyCardError;
            function generate(
                rawError: ExpressPlatbyRawError & {
                    type: 'invalid_request_error';
                }
            ): ExpressPlatbyInvalidRequestError;
            function generate(
                rawError: ExpressPlatbyRawError & {type: 'api_error'}
            ): ExpressPlatbyAPIError;
            function generate(
                rawError: ExpressPlatbyRawError & {type: 'authentication_error'}
            ): ExpressPlatbyAuthenticationError;
            function generate(
                rawError: ExpressPlatbyRawError & {type: 'rate_limit_error'}
            ): ExpressPlatbyRateLimitError;
            function generate(
                rawError: ExpressPlatbyRawError & {type: 'idempotency_error'}
            ): ExpressPlatbyIdempotencyError;
            function generate(
                rawError: ExpressPlatbyRawError & {type: 'invalid_grant'}
            ): ExpressPlatbyInvalidGrantError;
            function generate(
                rawError: ExpressPlatbyRawError & {type: RawErrorType}
            ): ExpressPlatbyError;

            class ExpressPlatbyError extends Error {
                constructor(rawError: ExpressPlatbyRawError);

                static generate(
                    rawError: ExpressPlatbyRawError & {type: 'card_error'}
                ): ExpressPlatbyCardError;
                static generate(
                    rawError: ExpressPlatbyRawError & {
                        type: 'invalid_request_error';
                    }
                ): ExpressPlatbyInvalidRequestError;
                static generate(
                    rawError: ExpressPlatbyRawError & {type: 'api_error'}
                ): ExpressPlatbyAPIError;
                static generate(
                    rawError: ExpressPlatbyRawError & {
                        type: 'authentication_error';
                    }
                ): ExpressPlatbyAuthenticationError;
                static generate(
                    rawError: ExpressPlatbyRawError & {type: 'rate_limit_error'}
                ): ExpressPlatbyRateLimitError;
                static generate(
                    rawError: ExpressPlatbyRawError & {
                        type: 'idempotency_error';
                    }
                ): ExpressPlatbyIdempotencyError;
                static generate(
                    rawError: ExpressPlatbyRawError & {type: 'invalid_grant'}
                ): ExpressPlatbyInvalidGrantError;
                static generate(
                    rawError: ExpressPlatbyRawError & {type: RawErrorType}
                ): ExpressPlatbyError;

                /**
                 * A human-readable message giving more details about the error. For card errors, these messages can
                 * be shown to your users.
                 */
                readonly message: string;

                readonly type:
                    | 'ExpressPlatbyError'
                    | 'ExpressPlatbyCardError'
                    | 'ExpressPlatbyInvalidRequestError'
                    | 'ExpressPlatbyAPIError'
                    | 'ExpressPlatbyAuthenticationError'
                    | 'ExpressPlatbyPermissionError'
                    | 'ExpressPlatbyRateLimitError'
                    | 'ExpressPlatbyConnectionError'
                    | 'ExpressPlatbySignatureVerificationError'
                    | 'ExpressPlatbyIdempotencyError'
                    | 'ExpressPlatbyInvalidGrantError';

                /**
                 * See the "error types" section at https://expressplatby.cz/docs/api/errors
                 */
                readonly rawType: RawErrorType;

                /**
                 * For card errors, a short string describing the kind of card error that occurred.
                 *
                 * @docs https://expressplatby.cz/docs/error-codes
                 */
                readonly code?: string;

                /**
                 * A URL to more information about the error code reported.
                 *
                 * @docs https://expressplatby.cz/docs/error-codes
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
            class ExpressPlatbyCardError extends ExpressPlatbyError {
                readonly type: 'ExpressPlatbyCardError';
                readonly rawType: 'card_error';

                /**
                 * @docs https://expressplatby.cz/docs/declines/codes
                 */
                readonly decline_code: string;
            }

            /**
             * Invalid request errors arise when your request has invalid parameters.
             */
            class ExpressPlatbyInvalidRequestError extends ExpressPlatbyError {
                readonly type: 'ExpressPlatbyInvalidRequestError';
                readonly rawType: 'invalid_request_error';
            }

            /**
             * API errors cover any other type of problem (e.g., a temporary problem with ExpressPlatby's servers),
             * and are extremely uncommon.
             *
             * It could also be raised in the case that a new error has been introduced in the API,
             * but this version of the library doesn't know how to handle it.
             */
            class ExpressPlatbyAPIError extends ExpressPlatbyError {
                readonly type: 'ExpressPlatbyAPIError';
                readonly rawType: 'api_error';
            }

            /**
             * Failure to properly authenticate yourself in the request.
             */
            class ExpressPlatbyAuthenticationError extends ExpressPlatbyError {
                readonly type: 'ExpressPlatbyAuthenticationError';
                readonly rawType: 'authentication_error';
            }

            /**
             * Access was attempted on a resource that wasn't allowed.
             */
            class ExpressPlatbyPermissionError extends ExpressPlatbyError {
                readonly type: 'ExpressPlatbyPermissionError';
            }

            /**
             * Too many requests hit the API too quickly.
             * @docs https://expressplatby.cz/docs/rate-limits
             */
            class ExpressPlatbyRateLimitError extends ExpressPlatbyError {
                readonly type: 'ExpressPlatbyRateLimitError';
                readonly rawType: 'rate_limit_error';
            }

            /**
             * The library cannot connect to ExpressPlatby.
             * This can happen for a variety of reasons,
             * such as loss of network connectivity or a bad TLS certificate.
             */
            class ExpressPlatbyConnectionError extends ExpressPlatbyError {
                readonly type: 'ExpressPlatbyConnectionError';
            }

            /**
             * The signature verification for a webhook failed.
             * @docs https://expressplatby.cz/docs/webhooks/signatures
             */
            class ExpressPlatbySignatureVerificationError extends ExpressPlatbyError {
                readonly type: 'ExpressPlatbySignatureVerificationError';
            }

            /**
             * Idempotency errors occur when an `Idempotency-Key` is re-used on a request that does not match the first request's API endpoint and parameters.
             * @docs https://expressplatby.cz/docs/api/idempotent_requests?lang=node
             */
            class ExpressPlatbyIdempotencyError extends ExpressPlatbyError {
                readonly type: 'ExpressPlatbyIdempotencyError';
                readonly rawType: 'idempotency_error';
            }

            /**
             * InvalidGrantError is raised when a specified code doesn't exist, is
             * expired, has been used, or doesn't belong to you; a refresh token doesn't
             * exist, or doesn't belong to you; or if an API key's mode (live or test)
             * doesn't match the mode of a code or refresh token.
             */
            class ExpressPlatbyInvalidGrantError extends ExpressPlatbyError {
                readonly type: 'ExpressPlatbyInvalidGrantError';
                readonly rawType: 'invalid_grant';
            }
        }
    }
}
