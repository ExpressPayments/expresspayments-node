// File generated from our OpenAPI spec

declare module 'expressplatby' {
    namespace ExpressPlatby {
        interface ExchangeRateRetrieveParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }

        interface ExchangeRateListParams extends PaginationParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }

        class ExchangeRatesResource {
            /**
             * Retrieves the exchange rates from the given currency to every supported currency.
             */
            retrieve(
                id: string,
                params?: ExchangeRateRetrieveParams,
                options?: RequestOptions
            ): Promise<ExpressPlatby.Response<ExpressPlatby.ExchangeRate>>;
            retrieve(
                id: string,
                options?: RequestOptions
            ): Promise<ExpressPlatby.Response<ExpressPlatby.ExchangeRate>>;

            /**
             * Returns a list of objects that contain the rates at which foreign currencies are converted to one another. Only shows the currencies for which ExpressPlatby supports.
             */
            list(
                params?: ExchangeRateListParams,
                options?: RequestOptions
            ): ApiListPromise<ExpressPlatby.ExchangeRate>;
            list(
                options?: RequestOptions
            ): ApiListPromise<ExpressPlatby.ExchangeRate>;
        }
    }
}
