// File generated from our OpenAPI spec

declare module 'expresspayments' {
    namespace ExpressPayments {
        namespace Issuing {
            interface DisputeCreateParams {
                /**
                 * The dispute amount in the card's currency and in the [smallest currency unit](https://docs.epayments.network/currencies#zero-decimal). If not set, defaults to the full transaction amount.
                 */
                amount?: number;

                /**
                 * Evidence provided for the dispute.
                 */
                evidence?: DisputeCreateParams.Evidence;

                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;

                /**
                 * Set of [key-value pairs](https://docs.epayments.network/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
                 */
                metadata?: ExpressPayments.MetadataParam;

                /**
                 * The ID of the issuing transaction to create a dispute for. For transaction on Treasury FinancialAccounts, use `treasury.received_debit`.
                 */
                transaction?: string;

                /**
                 * Params for disputes related to Treasury FinancialAccounts
                 */
                treasury?: DisputeCreateParams.Treasury;
            }

            namespace DisputeCreateParams {
                interface Evidence {
                    /**
                     * Evidence provided when `reason` is 'canceled'.
                     */
                    canceled?: ExpressPayments.Emptyable<Evidence.Canceled>;

                    /**
                     * Evidence provided when `reason` is 'duplicate'.
                     */
                    duplicate?: ExpressPayments.Emptyable<Evidence.Duplicate>;

                    /**
                     * Evidence provided when `reason` is 'fraudulent'.
                     */
                    fraudulent?: ExpressPayments.Emptyable<Evidence.Fraudulent>;

                    /**
                     * Evidence provided when `reason` is 'merchandise_not_as_described'.
                     */
                    merchandise_not_as_described?: ExpressPayments.Emptyable<
                        Evidence.MerchandiseNotAsDescribed
                    >;

                    /**
                     * Evidence provided when `reason` is 'not_received'.
                     */
                    not_received?: ExpressPayments.Emptyable<
                        Evidence.NotReceived
                    >;

                    /**
                     * Evidence provided when `reason` is 'other'.
                     */
                    other?: ExpressPayments.Emptyable<Evidence.Other>;

                    /**
                     * The reason for filing the dispute. The evidence should be submitted in the field of the same name.
                     */
                    reason?: Evidence.Reason;

                    /**
                     * Evidence provided when `reason` is 'service_not_as_described'.
                     */
                    service_not_as_described?: ExpressPayments.Emptyable<
                        Evidence.ServiceNotAsDescribed
                    >;
                }

                namespace Evidence {
                    interface Canceled {
                        /**
                         * (ID of a [file upload](https://docs.epayments.network/guides/file-upload)) Additional documentation supporting the dispute.
                         */
                        additional_documentation?: ExpressPayments.Emptyable<
                            string
                        >;

                        /**
                         * Date when order was canceled.
                         */
                        canceled_at?: ExpressPayments.Emptyable<number>;

                        /**
                         * Whether the cardholder was provided with a cancellation policy.
                         */
                        cancellation_policy_provided?: ExpressPayments.Emptyable<
                            boolean
                        >;

                        /**
                         * Reason for canceling the order.
                         */
                        cancellation_reason?: string;

                        /**
                         * Date when the cardholder expected to receive the product.
                         */
                        expected_at?: ExpressPayments.Emptyable<number>;

                        /**
                         * Explanation of why the cardholder is disputing this transaction.
                         */
                        explanation?: string;

                        /**
                         * Description of the merchandise or service that was purchased.
                         */
                        product_description?: string;

                        /**
                         * Whether the product was a merchandise or service.
                         */
                        product_type?: ExpressPayments.Emptyable<
                            Canceled.ProductType
                        >;

                        /**
                         * Result of cardholder's attempt to return the product.
                         */
                        return_status?: ExpressPayments.Emptyable<
                            Canceled.ReturnStatus
                        >;

                        /**
                         * Date when the product was returned or attempted to be returned.
                         */
                        returned_at?: ExpressPayments.Emptyable<number>;
                    }

                    namespace Canceled {
                        type ProductType = 'merchandise' | 'service';

                        type ReturnStatus = 'merchant_rejected' | 'successful';
                    }

                    interface Duplicate {
                        /**
                         * (ID of a [file upload](https://docs.epayments.network/guides/file-upload)) Additional documentation supporting the dispute.
                         */
                        additional_documentation?: ExpressPayments.Emptyable<
                            string
                        >;

                        /**
                         * (ID of a [file upload](https://docs.epayments.network/guides/file-upload)) Copy of the card statement showing that the product had already been paid for.
                         */
                        card_statement?: ExpressPayments.Emptyable<string>;

                        /**
                         * (ID of a [file upload](https://docs.epayments.network/guides/file-upload)) Copy of the receipt showing that the product had been paid for in cash.
                         */
                        cash_receipt?: ExpressPayments.Emptyable<string>;

                        /**
                         * (ID of a [file upload](https://docs.epayments.network/guides/file-upload)) Image of the front and back of the check that was used to pay for the product.
                         */
                        check_image?: ExpressPayments.Emptyable<string>;

                        /**
                         * Explanation of why the cardholder is disputing this transaction.
                         */
                        explanation?: string;

                        /**
                         * Transaction (e.g., ipi_...) that the disputed transaction is a duplicate of. Of the two or more transactions that are copies of each other, this is original undisputed one.
                         */
                        original_transaction?: string;
                    }

                    interface Fraudulent {
                        /**
                         * (ID of a [file upload](https://docs.epayments.network/guides/file-upload)) Additional documentation supporting the dispute.
                         */
                        additional_documentation?: ExpressPayments.Emptyable<
                            string
                        >;

                        /**
                         * Explanation of why the cardholder is disputing this transaction.
                         */
                        explanation?: string;
                    }

                    interface MerchandiseNotAsDescribed {
                        /**
                         * (ID of a [file upload](https://docs.epayments.network/guides/file-upload)) Additional documentation supporting the dispute.
                         */
                        additional_documentation?: ExpressPayments.Emptyable<
                            string
                        >;

                        /**
                         * Explanation of why the cardholder is disputing this transaction.
                         */
                        explanation?: string;

                        /**
                         * Date when the product was received.
                         */
                        received_at?: ExpressPayments.Emptyable<number>;

                        /**
                         * Description of the cardholder's attempt to return the product.
                         */
                        return_description?: string;

                        /**
                         * Result of cardholder's attempt to return the product.
                         */
                        return_status?: ExpressPayments.Emptyable<
                            MerchandiseNotAsDescribed.ReturnStatus
                        >;

                        /**
                         * Date when the product was returned or attempted to be returned.
                         */
                        returned_at?: ExpressPayments.Emptyable<number>;
                    }

                    namespace MerchandiseNotAsDescribed {
                        type ReturnStatus = 'merchant_rejected' | 'successful';
                    }

                    interface NotReceived {
                        /**
                         * (ID of a [file upload](https://docs.epayments.network/guides/file-upload)) Additional documentation supporting the dispute.
                         */
                        additional_documentation?: ExpressPayments.Emptyable<
                            string
                        >;

                        /**
                         * Date when the cardholder expected to receive the product.
                         */
                        expected_at?: ExpressPayments.Emptyable<number>;

                        /**
                         * Explanation of why the cardholder is disputing this transaction.
                         */
                        explanation?: string;

                        /**
                         * Description of the merchandise or service that was purchased.
                         */
                        product_description?: string;

                        /**
                         * Whether the product was a merchandise or service.
                         */
                        product_type?: ExpressPayments.Emptyable<
                            NotReceived.ProductType
                        >;
                    }

                    namespace NotReceived {
                        type ProductType = 'merchandise' | 'service';
                    }

                    interface Other {
                        /**
                         * (ID of a [file upload](https://docs.epayments.network/guides/file-upload)) Additional documentation supporting the dispute.
                         */
                        additional_documentation?: ExpressPayments.Emptyable<
                            string
                        >;

                        /**
                         * Explanation of why the cardholder is disputing this transaction.
                         */
                        explanation?: string;

                        /**
                         * Description of the merchandise or service that was purchased.
                         */
                        product_description?: string;

                        /**
                         * Whether the product was a merchandise or service.
                         */
                        product_type?: ExpressPayments.Emptyable<
                            Other.ProductType
                        >;
                    }

                    namespace Other {
                        type ProductType = 'merchandise' | 'service';
                    }

                    type Reason =
                        | 'canceled'
                        | 'duplicate'
                        | 'fraudulent'
                        | 'merchandise_not_as_described'
                        | 'not_received'
                        | 'other'
                        | 'service_not_as_described';

                    interface ServiceNotAsDescribed {
                        /**
                         * (ID of a [file upload](https://docs.epayments.network/guides/file-upload)) Additional documentation supporting the dispute.
                         */
                        additional_documentation?: ExpressPayments.Emptyable<
                            string
                        >;

                        /**
                         * Date when order was canceled.
                         */
                        canceled_at?: ExpressPayments.Emptyable<number>;

                        /**
                         * Reason for canceling the order.
                         */
                        cancellation_reason?: string;

                        /**
                         * Explanation of why the cardholder is disputing this transaction.
                         */
                        explanation?: string;

                        /**
                         * Date when the product was received.
                         */
                        received_at?: ExpressPayments.Emptyable<number>;
                    }
                }

                interface Treasury {
                    /**
                     * The ID of the ReceivedDebit to initiate an Issuings dispute for.
                     */
                    received_debit: string;
                }
            }

            interface DisputeRetrieveParams {
                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;
            }

            interface DisputeUpdateParams {
                /**
                 * The dispute amount in the card's currency and in the [smallest currency unit](https://docs.epayments.network/currencies#zero-decimal).
                 */
                amount?: number;

                /**
                 * Evidence provided for the dispute.
                 */
                evidence?: DisputeUpdateParams.Evidence;

                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;

                /**
                 * Set of [key-value pairs](https://docs.epayments.network/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
                 */
                metadata?: ExpressPayments.Emptyable<ExpressPayments.MetadataParam>;
            }

            namespace DisputeUpdateParams {
                interface Evidence {
                    /**
                     * Evidence provided when `reason` is 'canceled'.
                     */
                    canceled?: ExpressPayments.Emptyable<Evidence.Canceled>;

                    /**
                     * Evidence provided when `reason` is 'duplicate'.
                     */
                    duplicate?: ExpressPayments.Emptyable<Evidence.Duplicate>;

                    /**
                     * Evidence provided when `reason` is 'fraudulent'.
                     */
                    fraudulent?: ExpressPayments.Emptyable<Evidence.Fraudulent>;

                    /**
                     * Evidence provided when `reason` is 'merchandise_not_as_described'.
                     */
                    merchandise_not_as_described?: ExpressPayments.Emptyable<
                        Evidence.MerchandiseNotAsDescribed
                    >;

                    /**
                     * Evidence provided when `reason` is 'not_received'.
                     */
                    not_received?: ExpressPayments.Emptyable<
                        Evidence.NotReceived
                    >;

                    /**
                     * Evidence provided when `reason` is 'other'.
                     */
                    other?: ExpressPayments.Emptyable<Evidence.Other>;

                    /**
                     * The reason for filing the dispute. The evidence should be submitted in the field of the same name.
                     */
                    reason?: Evidence.Reason;

                    /**
                     * Evidence provided when `reason` is 'service_not_as_described'.
                     */
                    service_not_as_described?: ExpressPayments.Emptyable<
                        Evidence.ServiceNotAsDescribed
                    >;
                }

                namespace Evidence {
                    interface Canceled {
                        /**
                         * (ID of a [file upload](https://docs.epayments.network/guides/file-upload)) Additional documentation supporting the dispute.
                         */
                        additional_documentation?: ExpressPayments.Emptyable<
                            string
                        >;

                        /**
                         * Date when order was canceled.
                         */
                        canceled_at?: ExpressPayments.Emptyable<number>;

                        /**
                         * Whether the cardholder was provided with a cancellation policy.
                         */
                        cancellation_policy_provided?: ExpressPayments.Emptyable<
                            boolean
                        >;

                        /**
                         * Reason for canceling the order.
                         */
                        cancellation_reason?: string;

                        /**
                         * Date when the cardholder expected to receive the product.
                         */
                        expected_at?: ExpressPayments.Emptyable<number>;

                        /**
                         * Explanation of why the cardholder is disputing this transaction.
                         */
                        explanation?: string;

                        /**
                         * Description of the merchandise or service that was purchased.
                         */
                        product_description?: string;

                        /**
                         * Whether the product was a merchandise or service.
                         */
                        product_type?: ExpressPayments.Emptyable<
                            Canceled.ProductType
                        >;

                        /**
                         * Result of cardholder's attempt to return the product.
                         */
                        return_status?: ExpressPayments.Emptyable<
                            Canceled.ReturnStatus
                        >;

                        /**
                         * Date when the product was returned or attempted to be returned.
                         */
                        returned_at?: ExpressPayments.Emptyable<number>;
                    }

                    namespace Canceled {
                        type ProductType = 'merchandise' | 'service';

                        type ReturnStatus = 'merchant_rejected' | 'successful';
                    }

                    interface Duplicate {
                        /**
                         * (ID of a [file upload](https://docs.epayments.network/guides/file-upload)) Additional documentation supporting the dispute.
                         */
                        additional_documentation?: ExpressPayments.Emptyable<
                            string
                        >;

                        /**
                         * (ID of a [file upload](https://docs.epayments.network/guides/file-upload)) Copy of the card statement showing that the product had already been paid for.
                         */
                        card_statement?: ExpressPayments.Emptyable<string>;

                        /**
                         * (ID of a [file upload](https://docs.epayments.network/guides/file-upload)) Copy of the receipt showing that the product had been paid for in cash.
                         */
                        cash_receipt?: ExpressPayments.Emptyable<string>;

                        /**
                         * (ID of a [file upload](https://docs.epayments.network/guides/file-upload)) Image of the front and back of the check that was used to pay for the product.
                         */
                        check_image?: ExpressPayments.Emptyable<string>;

                        /**
                         * Explanation of why the cardholder is disputing this transaction.
                         */
                        explanation?: string;

                        /**
                         * Transaction (e.g., ipi_...) that the disputed transaction is a duplicate of. Of the two or more transactions that are copies of each other, this is original undisputed one.
                         */
                        original_transaction?: string;
                    }

                    interface Fraudulent {
                        /**
                         * (ID of a [file upload](https://docs.epayments.network/guides/file-upload)) Additional documentation supporting the dispute.
                         */
                        additional_documentation?: ExpressPayments.Emptyable<
                            string
                        >;

                        /**
                         * Explanation of why the cardholder is disputing this transaction.
                         */
                        explanation?: string;
                    }

                    interface MerchandiseNotAsDescribed {
                        /**
                         * (ID of a [file upload](https://docs.epayments.network/guides/file-upload)) Additional documentation supporting the dispute.
                         */
                        additional_documentation?: ExpressPayments.Emptyable<
                            string
                        >;

                        /**
                         * Explanation of why the cardholder is disputing this transaction.
                         */
                        explanation?: string;

                        /**
                         * Date when the product was received.
                         */
                        received_at?: ExpressPayments.Emptyable<number>;

                        /**
                         * Description of the cardholder's attempt to return the product.
                         */
                        return_description?: string;

                        /**
                         * Result of cardholder's attempt to return the product.
                         */
                        return_status?: ExpressPayments.Emptyable<
                            MerchandiseNotAsDescribed.ReturnStatus
                        >;

                        /**
                         * Date when the product was returned or attempted to be returned.
                         */
                        returned_at?: ExpressPayments.Emptyable<number>;
                    }

                    namespace MerchandiseNotAsDescribed {
                        type ReturnStatus = 'merchant_rejected' | 'successful';
                    }

                    interface NotReceived {
                        /**
                         * (ID of a [file upload](https://docs.epayments.network/guides/file-upload)) Additional documentation supporting the dispute.
                         */
                        additional_documentation?: ExpressPayments.Emptyable<
                            string
                        >;

                        /**
                         * Date when the cardholder expected to receive the product.
                         */
                        expected_at?: ExpressPayments.Emptyable<number>;

                        /**
                         * Explanation of why the cardholder is disputing this transaction.
                         */
                        explanation?: string;

                        /**
                         * Description of the merchandise or service that was purchased.
                         */
                        product_description?: string;

                        /**
                         * Whether the product was a merchandise or service.
                         */
                        product_type?: ExpressPayments.Emptyable<
                            NotReceived.ProductType
                        >;
                    }

                    namespace NotReceived {
                        type ProductType = 'merchandise' | 'service';
                    }

                    interface Other {
                        /**
                         * (ID of a [file upload](https://docs.epayments.network/guides/file-upload)) Additional documentation supporting the dispute.
                         */
                        additional_documentation?: ExpressPayments.Emptyable<
                            string
                        >;

                        /**
                         * Explanation of why the cardholder is disputing this transaction.
                         */
                        explanation?: string;

                        /**
                         * Description of the merchandise or service that was purchased.
                         */
                        product_description?: string;

                        /**
                         * Whether the product was a merchandise or service.
                         */
                        product_type?: ExpressPayments.Emptyable<
                            Other.ProductType
                        >;
                    }

                    namespace Other {
                        type ProductType = 'merchandise' | 'service';
                    }

                    type Reason =
                        | 'canceled'
                        | 'duplicate'
                        | 'fraudulent'
                        | 'merchandise_not_as_described'
                        | 'not_received'
                        | 'other'
                        | 'service_not_as_described';

                    interface ServiceNotAsDescribed {
                        /**
                         * (ID of a [file upload](https://docs.epayments.network/guides/file-upload)) Additional documentation supporting the dispute.
                         */
                        additional_documentation?: ExpressPayments.Emptyable<
                            string
                        >;

                        /**
                         * Date when order was canceled.
                         */
                        canceled_at?: ExpressPayments.Emptyable<number>;

                        /**
                         * Reason for canceling the order.
                         */
                        cancellation_reason?: string;

                        /**
                         * Explanation of why the cardholder is disputing this transaction.
                         */
                        explanation?: string;

                        /**
                         * Date when the product was received.
                         */
                        received_at?: ExpressPayments.Emptyable<number>;
                    }
                }
            }

            interface DisputeListParams extends PaginationParams {
                /**
                 * Select Issuing disputes that were created during the given date interval.
                 */
                created?: ExpressPayments.RangeQueryParam | number;

                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;

                /**
                 * Select Issuing disputes with the given status.
                 */
                status?: DisputeListParams.Status;

                /**
                 * Select the Issuing dispute for the given transaction.
                 */
                transaction?: string;
            }

            namespace DisputeListParams {
                type Status =
                    | 'expired'
                    | 'lost'
                    | 'submitted'
                    | 'unsubmitted'
                    | 'won';
            }

            interface DisputeSubmitParams {
                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;

                /**
                 * Set of [key-value pairs](https://docs.epayments.network/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
                 */
                metadata?: ExpressPayments.Emptyable<ExpressPayments.MetadataParam>;
            }

            class DisputesResource {
                /**
                 * Creates an Issuing Dispute object. Individual pieces of evidence within the evidence object are optional at this point. ExpressPayments only validates that required evidence is present during submission. Refer to [Dispute reasons and evidence](https://docs.epayments.network/issuing/purchases/disputes#dispute-reasons-and-evidence) for more details about evidence requirements.
                 */
                create(
                    params?: DisputeCreateParams,
                    options?: RequestOptions
                ): Promise<
                    ExpressPayments.Response<ExpressPayments.Issuing.Dispute>
                >;
                create(
                    options?: RequestOptions
                ): Promise<
                    ExpressPayments.Response<ExpressPayments.Issuing.Dispute>
                >;

                /**
                 * Retrieves an Issuing Dispute object.
                 */
                retrieve(
                    id: string,
                    params?: DisputeRetrieveParams,
                    options?: RequestOptions
                ): Promise<
                    ExpressPayments.Response<ExpressPayments.Issuing.Dispute>
                >;
                retrieve(
                    id: string,
                    options?: RequestOptions
                ): Promise<
                    ExpressPayments.Response<ExpressPayments.Issuing.Dispute>
                >;

                /**
                 * Updates the specified Issuing Dispute object by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Properties on the evidence object can be unset by passing in an empty string.
                 */
                update(
                    id: string,
                    params?: DisputeUpdateParams,
                    options?: RequestOptions
                ): Promise<
                    ExpressPayments.Response<ExpressPayments.Issuing.Dispute>
                >;

                /**
                 * Returns a list of Issuing Dispute objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
                 */
                list(
                    params?: DisputeListParams,
                    options?: RequestOptions
                ): ApiListPromise<ExpressPayments.Issuing.Dispute>;
                list(
                    options?: RequestOptions
                ): ApiListPromise<ExpressPayments.Issuing.Dispute>;

                /**
                 * Submits an Issuing Dispute to the card network. ExpressPayments validates that all evidence fields required for the dispute's reason are present. For more details, see [Dispute reasons and evidence](https://docs.epayments.network/issuing/purchases/disputes#dispute-reasons-and-evidence).
                 */
                submit(
                    id: string,
                    params?: DisputeSubmitParams,
                    options?: RequestOptions
                ): Promise<
                    ExpressPayments.Response<ExpressPayments.Issuing.Dispute>
                >;
                submit(
                    id: string,
                    options?: RequestOptions
                ): Promise<
                    ExpressPayments.Response<ExpressPayments.Issuing.Dispute>
                >;
            }
        }
    }
}
