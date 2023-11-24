// File generated from our OpenAPI spec

declare module 'expresspayments' {
    namespace ExpressPayments {
        interface BalanceTransactionRetrieveParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }

        interface BalanceTransactionListParams extends PaginationParams {
            /**
             * This parameter is deprecated, and we recommend listing by created and filtering in memory instead.
             */
            available_on?: ExpressPayments.RangeQueryParam | number;

            created?: ExpressPayments.RangeQueryParam | number;

            /**
             * Only return transactions in a certain currency. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://docs.epayments.network/currencies).
             */
            currency?: string;

            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;

            /**
             * For automatic ExpressPayments payouts only, only returns transactions that were paid out on the specified payout ID.
             */
            payout?: string;

            /**
             * Only returns the original transaction.
             */
            source?: string;

            /**
             * Only returns transactions of the given type. One of: `adjustment`, `advance`, `advance_funding`, `anticipation_repayment`, `application_fee`, `application_fee_refund`, `charge`, `connect_collection_transfer`, `contribution`, `issuing_authorization_hold`, `issuing_authorization_release`, `issuing_dispute`, `issuing_transaction`, `payment`, `payment_failure_refund`, `payment_refund`, `payout`, `payout_cancel`, `payout_failure`, `refund`, `refund_failure`, `reserve_transaction`, `reserved_funds`, `ep_fee`, `ep_fx_fee`, `tax_fee`, `topup`, `topup_reversal`, `transfer`, `transfer_cancel`, `transfer_failure`, or `transfer_refund`.
             */
            type?: string;
        }

        class BalanceTransactionsResource {
            /**
             * Retrieves the balance transaction with the given ID.
             *
             * Note that this endpoint previously used the path /v1/balance/history/:id.
             */
            retrieve(
                id: string,
                params?: BalanceTransactionRetrieveParams,
                options?: RequestOptions
            ): Promise<
                ExpressPayments.Response<ExpressPayments.BalanceTransaction>
            >;
            retrieve(
                id: string,
                options?: RequestOptions
            ): Promise<
                ExpressPayments.Response<ExpressPayments.BalanceTransaction>
            >;

            /**
             * Returns a list of transactions that have contributed to the ExpressPayments account balance (e.g., charges, transfers, and so forth). The transactions are returned in sorted order, with the most recent transactions appearing first.
             *
             * Note that this endpoint was previously called “Balance history” and used the path /v1/balance/history.
             */
            list(
                params?: BalanceTransactionListParams,
                options?: RequestOptions
            ): ApiListPromise<ExpressPayments.BalanceTransaction>;
            list(
                options?: RequestOptions
            ): ApiListPromise<ExpressPayments.BalanceTransaction>;
        }
    }
}
