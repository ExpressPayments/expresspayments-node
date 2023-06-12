// File generated from our OpenAPI spec

declare module 'expressplatby' {
    namespace ExpressPlatby {
        namespace Treasury {
            interface CreditReversalCreateParams {
                /**
                 * The ReceivedCredit to reverse.
                 */
                received_credit: string;

                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;

                /**
                 * Set of [key-value pairs](https://expressplatby.cz/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
                 */
                metadata?: ExpressPlatby.MetadataParam;
            }

            interface CreditReversalRetrieveParams {
                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;
            }

            interface CreditReversalListParams extends PaginationParams {
                /**
                 * Returns objects associated with this FinancialAccount.
                 */
                financial_account: string;

                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;

                /**
                 * Only return CreditReversals for the ReceivedCredit ID.
                 */
                received_credit?: string;

                /**
                 * Only return CreditReversals for a given status.
                 */
                status?: CreditReversalListParams.Status;
            }

            namespace CreditReversalListParams {
                type Status = 'canceled' | 'posted' | 'processing';
            }

            class CreditReversalsResource {
                /**
                 * Reverses a ReceivedCredit and creates a CreditReversal object.
                 */
                create(
                    params: CreditReversalCreateParams,
                    options?: RequestOptions
                ): Promise<
                    ExpressPlatby.Response<
                        ExpressPlatby.Treasury.CreditReversal
                    >
                >;

                /**
                 * Retrieves the details of an existing CreditReversal by passing the unique CreditReversal ID from either the CreditReversal creation request or CreditReversal list
                 */
                retrieve(
                    id: string,
                    params?: CreditReversalRetrieveParams,
                    options?: RequestOptions
                ): Promise<
                    ExpressPlatby.Response<
                        ExpressPlatby.Treasury.CreditReversal
                    >
                >;
                retrieve(
                    id: string,
                    options?: RequestOptions
                ): Promise<
                    ExpressPlatby.Response<
                        ExpressPlatby.Treasury.CreditReversal
                    >
                >;

                /**
                 * Returns a list of CreditReversals.
                 */
                list(
                    params: CreditReversalListParams,
                    options?: RequestOptions
                ): ApiListPromise<ExpressPlatby.Treasury.CreditReversal>;
            }
        }
    }
}
