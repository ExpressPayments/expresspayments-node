// File generated from our OpenAPI spec

declare module 'expresspayments' {
    namespace ExpressPayments {
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
             * Retrieves the details of an existing tax code. Supply the unique tax code ID and ExpressPayments will return the corresponding tax code information.
             */
            retrieve(
                id: string,
                params?: TaxCodeRetrieveParams,
                options?: RequestOptions
            ): Promise<ExpressPayments.Response<ExpressPayments.TaxCode>>;
            retrieve(
                id: string,
                options?: RequestOptions
            ): Promise<ExpressPayments.Response<ExpressPayments.TaxCode>>;

            /**
             * A list of [all tax codes available](https://docs.epayments.network/tax/tax-categories) to add to Products in order to allow specific tax calculations.
             */
            list(
                params?: TaxCodeListParams,
                options?: RequestOptions
            ): ApiListPromise<ExpressPayments.TaxCode>;
            list(
                options?: RequestOptions
            ): ApiListPromise<ExpressPayments.TaxCode>;
        }
    }
}
