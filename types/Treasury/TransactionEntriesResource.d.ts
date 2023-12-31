// File generated from our OpenAPI spec

declare module 'expresspayments' {
    namespace ExpressPayments {
        namespace Treasury {
            interface TransactionEntryRetrieveParams {
                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;
            }

            interface TransactionEntryListParams extends PaginationParams {
                /**
                 * Returns objects associated with this FinancialAccount.
                 */
                financial_account: string;

                created?: ExpressPayments.RangeQueryParam | number;

                effective_at?: ExpressPayments.RangeQueryParam | number;

                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;

                /**
                 * The results are in reverse chronological order by `created` or `effective_at`. The default is `created`.
                 */
                order_by?: TransactionEntryListParams.OrderBy;

                /**
                 * Only return TransactionEntries associated with this Transaction.
                 */
                transaction?: string;
            }

            namespace TransactionEntryListParams {
                type OrderBy = 'created' | 'effective_at';
            }

            class TransactionEntriesResource {
                /**
                 * Retrieves a TransactionEntry object.
                 */
                retrieve(
                    id: string,
                    params?: TransactionEntryRetrieveParams,
                    options?: RequestOptions
                ): Promise<
                    ExpressPayments.Response<
                        ExpressPayments.Treasury.TransactionEntry
                    >
                >;
                retrieve(
                    id: string,
                    options?: RequestOptions
                ): Promise<
                    ExpressPayments.Response<
                        ExpressPayments.Treasury.TransactionEntry
                    >
                >;

                /**
                 * Retrieves a list of TransactionEntry objects.
                 */
                list(
                    params: TransactionEntryListParams,
                    options?: RequestOptions
                ): ApiListPromise<ExpressPayments.Treasury.TransactionEntry>;
            }
        }
    }
}
