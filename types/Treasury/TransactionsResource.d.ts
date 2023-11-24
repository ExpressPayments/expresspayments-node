// File generated from our OpenAPI spec

declare module 'expresspayments' {
    namespace ExpressPayments {
        namespace Treasury {
            interface TransactionRetrieveParams {
                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;
            }

            interface TransactionListParams extends PaginationParams {
                /**
                 * Returns objects associated with this FinancialAccount.
                 */
                financial_account: string;

                created?: ExpressPayments.RangeQueryParam | number;

                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;

                /**
                 * The results are in reverse chronological order by `created` or `posted_at`. The default is `created`.
                 */
                order_by?: TransactionListParams.OrderBy;

                /**
                 * Only return Transactions that have the given status: `open`, `posted`, or `void`.
                 */
                status?: TransactionListParams.Status;

                /**
                 * A filter for the `status_transitions.posted_at` timestamp. When using this filter, `status=posted` and `order_by=posted_at` must also be specified.
                 */
                status_transitions?: TransactionListParams.StatusTransitions;
            }

            namespace TransactionListParams {
                type OrderBy = 'created' | 'posted_at';

                type Status = 'open' | 'posted' | 'void';

                interface StatusTransitions {
                    /**
                     * Returns Transactions with `posted_at` within the specified range.
                     */
                    posted_at?: ExpressPayments.RangeQueryParam | number;
                }
            }

            class TransactionsResource {
                /**
                 * Retrieves the details of an existing Transaction.
                 */
                retrieve(
                    id: string,
                    params?: TransactionRetrieveParams,
                    options?: RequestOptions
                ): Promise<
                    ExpressPayments.Response<ExpressPayments.Treasury.Transaction>
                >;
                retrieve(
                    id: string,
                    options?: RequestOptions
                ): Promise<
                    ExpressPayments.Response<ExpressPayments.Treasury.Transaction>
                >;

                /**
                 * Retrieves a list of Transaction objects.
                 */
                list(
                    params: TransactionListParams,
                    options?: RequestOptions
                ): ApiListPromise<ExpressPayments.Treasury.Transaction>;
            }
        }
    }
}
