// File generated from our OpenAPI spec

declare module 'expresspayments' {
    namespace ExpressPayments {
        interface ApplicationFeeRetrieveParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }

        interface ApplicationFeeListParams extends PaginationParams {
            /**
             * Only return application fees for the charge specified by this charge ID.
             */
            charge?: string;

            created?: ExpressPayments.RangeQueryParam | number;

            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }

        interface FeeRefundCreateParams {
            /**
             * A positive integer, in _cents (or local equivalent)_, representing how much of this fee to refund. Can refund only up to the remaining unrefunded amount of the fee.
             */
            amount?: number;

            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;

            /**
             * Set of [key-value pairs](https://docs.epayments.network/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
             */
            metadata?: ExpressPayments.MetadataParam;
        }

        interface FeeRefundListParams extends PaginationParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }

        interface FeeRefundRetrieveParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }

        interface FeeRefundUpdateParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;

            /**
             * Set of [key-value pairs](https://docs.epayments.network/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
             */
            metadata?: ExpressPayments.Emptyable<ExpressPayments.MetadataParam>;
        }

        class ApplicationFeesResource {
            /**
             * Retrieves the details of an application fee that your account has collected. The same information is returned when refunding the application fee.
             */
            retrieve(
                id: string,
                params?: ApplicationFeeRetrieveParams,
                options?: RequestOptions
            ): Promise<ExpressPayments.Response<ExpressPayments.ApplicationFee>>;
            retrieve(
                id: string,
                options?: RequestOptions
            ): Promise<ExpressPayments.Response<ExpressPayments.ApplicationFee>>;

            /**
             * Returns a list of application fees you've previously collected. The application fees are returned in sorted order, with the most recent fees appearing first.
             */
            list(
                params?: ApplicationFeeListParams,
                options?: RequestOptions
            ): ApiListPromise<ExpressPayments.ApplicationFee>;
            list(
                options?: RequestOptions
            ): ApiListPromise<ExpressPayments.ApplicationFee>;

            /**
             * Refunds an application fee that has previously been collected but not yet refunded.
             * Funds will be refunded to the ExpressPayments account from which the fee was originally collected.
             *
             * You can optionally refund only part of an application fee.
             * You can do so multiple times, until the entire fee has been refunded.
             *
             * Once entirely refunded, an application fee can't be refunded again.
             * This method will raise an error when called on an already-refunded application fee,
             * or when trying to refund more money than is left on an application fee.
             */
            createRefund(
                id: string,
                params?: FeeRefundCreateParams,
                options?: RequestOptions
            ): Promise<ExpressPayments.Response<ExpressPayments.FeeRefund>>;
            createRefund(
                id: string,
                options?: RequestOptions
            ): Promise<ExpressPayments.Response<ExpressPayments.FeeRefund>>;

            /**
             * You can see a list of the refunds belonging to a specific application fee. Note that the 10 most recent refunds are always available by default on the application fee object. If you need more than those 10, you can use this API method and the limit and starting_after parameters to page through additional refunds.
             */
            listRefunds(
                id: string,
                params?: FeeRefundListParams,
                options?: RequestOptions
            ): ApiListPromise<ExpressPayments.FeeRefund>;
            listRefunds(
                id: string,
                options?: RequestOptions
            ): ApiListPromise<ExpressPayments.FeeRefund>;

            /**
             * By default, you can see the 10 most recent refunds stored directly on the application fee object, but you can also retrieve details about a specific refund stored on the application fee.
             */
            retrieveRefund(
                feeId: string,
                id: string,
                params?: FeeRefundRetrieveParams,
                options?: RequestOptions
            ): Promise<ExpressPayments.Response<ExpressPayments.FeeRefund>>;
            retrieveRefund(
                feeId: string,
                id: string,
                options?: RequestOptions
            ): Promise<ExpressPayments.Response<ExpressPayments.FeeRefund>>;

            /**
             * Updates the specified application fee refund by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
             *
             * This request only accepts metadata as an argument.
             */
            updateRefund(
                feeId: string,
                id: string,
                params?: FeeRefundUpdateParams,
                options?: RequestOptions
            ): Promise<ExpressPayments.Response<ExpressPayments.FeeRefund>>;
            updateRefund(
                feeId: string,
                id: string,
                options?: RequestOptions
            ): Promise<ExpressPayments.Response<ExpressPayments.FeeRefund>>;
        }
    }
}
