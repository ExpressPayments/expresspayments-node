// File generated from our OpenAPI spec

declare module 'expressplatby' {
    namespace ExpressPlatby {
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
            ): Promise<ExpressPlatby.Response<ExpressPlatby.CountrySpec>>;
            retrieve(
                id: string,
                options?: RequestOptions
            ): Promise<ExpressPlatby.Response<ExpressPlatby.CountrySpec>>;

            /**
             * Lists all Country Spec objects available in the API.
             */
            list(
                params?: CountrySpecListParams,
                options?: RequestOptions
            ): ApiListPromise<ExpressPlatby.CountrySpec>;
            list(
                options?: RequestOptions
            ): ApiListPromise<ExpressPlatby.CountrySpec>;
        }
    }
}
