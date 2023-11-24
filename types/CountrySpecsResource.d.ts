// File generated from our OpenAPI spec

declare module 'expresspayments' {
    namespace ExpressPayments {
        interface CountrySpecRetrieveParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }

        interface CountrySpecListParams extends PaginationParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }

        class CountrySpecsResource {
            /**
             * Returns a Country Spec for a given Country code.
             */
            retrieve(
                id: string,
                params?: CountrySpecRetrieveParams,
                options?: RequestOptions
            ): Promise<ExpressPayments.Response<ExpressPayments.CountrySpec>>;
            retrieve(
                id: string,
                options?: RequestOptions
            ): Promise<ExpressPayments.Response<ExpressPayments.CountrySpec>>;

            /**
             * Lists all Country Spec objects available in the API.
             */
            list(
                params?: CountrySpecListParams,
                options?: RequestOptions
            ): ApiListPromise<ExpressPayments.CountrySpec>;
            list(
                options?: RequestOptions
            ): ApiListPromise<ExpressPayments.CountrySpec>;
        }
    }
}
