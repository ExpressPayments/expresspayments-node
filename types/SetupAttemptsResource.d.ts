// File generated from our OpenAPI spec

declare module 'expressplatby' {
    namespace ExpressPlatby {
        interface SetupAttemptListParams extends PaginationParams {
            /**
             * Only return SetupAttempts created by the SetupIntent specified by
             * this ID.
             */
            setup_intent: string;

            /**
             * A filter on the list, based on the object `created` field. The value
             * can be a string with an integer Unix timestamp, or it can be a
             * dictionary with a number of different query options.
             */
            created?: ExpressPlatby.RangeQueryParam | number;

            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }

        class SetupAttemptsResource {
            /**
             * Returns a list of SetupAttempts associated with a provided SetupIntent.
             */
            list(
                params: SetupAttemptListParams,
                options?: RequestOptions
            ): ApiListPromise<ExpressPlatby.SetupAttempt>;
        }
    }
}
