// File generated from our OpenAPI spec

declare module 'expresspayments' {
    namespace ExpressPayments {
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
            ): Promise<ExpressPayments.Response<ExpressPayments.ExchangeRate>>;
            retrieve(
                id: string,
                options?: RequestOptions
            ): Promise<ExpressPayments.Response<ExpressPayments.ExchangeRate>>;

            /**
             * Returns a list of objects that contain the rates at which foreign currencies are converted to one another. Only shows the currencies for which ExpressPayments supports.
             */
            list(
                params?: ExchangeRateListParams,
                options?: RequestOptions
            ): ApiListPromise<ExpressPayments.ExchangeRate>;
            list(
                options?: RequestOptions
            ): ApiListPromise<ExpressPayments.ExchangeRate>;
        }
    }
}
