// File generated from our OpenAPI spec

declare module 'expressplatby' {
    namespace ExpressPlatby {
        interface TaxCodeRetrieveParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }

        interface TaxCodeListParams extends PaginationParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }

        class TaxCodesResource {
            /**
             * Retrieves the details of an existing tax code. Supply the unique tax code ID and ExpressPlatby will return the corresponding tax code information.
             */
            retrieve(
                id: string,
                params?: TaxCodeRetrieveParams,
                options?: RequestOptions
            ): Promise<ExpressPlatby.Response<ExpressPlatby.TaxCode>>;
            retrieve(
                id: string,
                options?: RequestOptions
            ): Promise<ExpressPlatby.Response<ExpressPlatby.TaxCode>>;

            /**
             * A list of [all tax codes available](https://expressplatby.cz/docs/tax/tax-categories) to add to Products in order to allow specific tax calculations.
             */
            list(
                params?: TaxCodeListParams,
                options?: RequestOptions
            ): ApiListPromise<ExpressPlatby.TaxCode>;
            list(
                options?: RequestOptions
            ): ApiListPromise<ExpressPlatby.TaxCode>;
        }
    }
}
