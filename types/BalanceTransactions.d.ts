// File generated from our OpenAPI spec

declare module 'expresspayments' {
    namespace ExpressPayments {
        /**
         * Balance transactions represent funds moving through your ExpressPayments account.
         * They're created for every type of transaction that comes into or flows out of your ExpressPayments account balance.
         *
         * Related guide: [Balance transaction types](https://docs.epayments.network/reports/balance-transaction-types)
         */
        interface BalanceTransaction {
            /**
             * Unique identifier for the object.
             */
            id: string;

            /**
             * String representing the object's type. Objects of the same type share the same value.
             */
            object: 'balance_transaction';

            /**
             * Gross amount of the transaction, in %s.
             */
            amount: number;

            /**
             * The date the transaction's net funds will become available in the ExpressPayments balance.
             */
            available_on: number;

            /**
             * Time at which the object was created. Measured in seconds since the Unix epoch.
             */
            created: number;

            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://docs.epayments.network/currencies).
             */
            currency: string;

            /**
             * An arbitrary string attached to the object. Often useful for displaying to users.
             */
            description: string | null;

            /**
             * The exchange rate used, if applicable, for this transaction. Specifically, if money was converted from currency A to currency B, then the `amount` in currency A, times `exchange_rate`, would be the `amount` in currency B. For example, suppose you charged a customer 10.00 EUR. Then the PaymentIntent's `amount` would be `1000` and `currency` would be `eur`. Suppose this was converted into 12.34 USD in your ExpressPayments account. Then the BalanceTransaction's `amount` would be `1234`, `currency` would be `usd`, and `exchange_rate` would be `1.234`.
             */
            exchange_rate: number | null;

            /**
             * Fees (in %s) paid for this transaction.
             */
            fee: number;

            /**
             * Detailed breakdown of fees (in %s) paid for this transaction.
             */
            fee_details: Array<BalanceTransaction.FeeDetail>;

            /**
             * Net amount of the transaction, in %s.
             */
            net: number;

            /**
             * [Learn more](https://docs.epayments.network/reports/reporting-categories) about how reporting categories can help you understand balance transactions from an accounting perspective.
             */
            reporting_category: string;

            /**
             * The ExpressPayments object to which this transaction is related.
             */
            source:
                | string
                | ExpressPayments.ApplicationFee
                | ExpressPayments.Charge
                | ExpressPayments.ConnectCollectionTransfer
                | ExpressPayments.Dispute
                | ExpressPayments.FeeRefund
                | ExpressPayments.Issuing.Authorization
                | ExpressPayments.Issuing.Dispute
                | ExpressPayments.Issuing.Transaction
                | ExpressPayments.Payout
                | ExpressPayments.PlatformTaxFee
                | ExpressPayments.Refund
                | ExpressPayments.ReserveTransaction
                | ExpressPayments.TaxDeductedAtSource
                | ExpressPayments.Topup
                | ExpressPayments.Transfer
                | ExpressPayments.TransferReversal
                | null;

            /**
             * If the transaction's net funds are available in the ExpressPayments balance yet. Either `available` or `pending`.
             */
            status: string;

            /**
             * Transaction type: `adjustment`, `advance`, `advance_funding`, `anticipation_repayment`, `application_fee`, `application_fee_refund`, `charge`, `connect_collection_transfer`, `contribution`, `issuing_authorization_hold`, `issuing_authorization_release`, `issuing_dispute`, `issuing_transaction`, `payment`, `payment_failure_refund`, `payment_refund`, `payout`, `payout_cancel`, `payout_failure`, `refund`, `refund_failure`, `reserve_transaction`, `reserved_funds`, `ep_fee`, `ep_fx_fee`, `tax_fee`, `topup`, `topup_reversal`, `transfer`, `transfer_cancel`, `transfer_failure`, or `transfer_refund`. [Learn more](https://docs.epayments.network/reports/balance-transaction-types) about balance transaction types and what they represent. If you are looking to classify transactions for accounting purposes, you might want to consider `reporting_category` instead.
             */
            type: BalanceTransaction.Type;
        }

        namespace BalanceTransaction {
            interface FeeDetail {
                /**
                 * Amount of the fee, in cents.
                 */
                amount: number;

                /**
                 * ID of the Connect application that earned the fee.
                 */
                application: string | null;

                /**
                 * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://docs.epayments.network/currencies).
                 */
                currency: string;

                /**
                 * An arbitrary string attached to the object. Often useful for displaying to users.
                 */
                description: string | null;

                /**
                 * Type of the fee, one of: `application_fee`, `ep_fee` or `tax`.
                 */
                type: string;
            }

            type Type =
                | 'adjustment'
                | 'advance'
                | 'advance_funding'
                | 'anticipation_repayment'
                | 'application_fee'
                | 'application_fee_refund'
                | 'charge'
                | 'connect_collection_transfer'
                | 'contribution'
                | 'issuing_authorization_hold'
                | 'issuing_authorization_release'
                | 'issuing_dispute'
                | 'issuing_transaction'
                | 'payment'
                | 'payment_failure_refund'
                | 'payment_refund'
                | 'payout'
                | 'payout_cancel'
                | 'payout_failure'
                | 'refund'
                | 'refund_failure'
                | 'reserve_transaction'
                | 'reserved_funds'
                | 'ep_fee'
                | 'ep_fx_fee'
                | 'tax_fee'
                | 'topup'
                | 'topup_reversal'
                | 'transfer'
                | 'transfer_cancel'
                | 'transfer_failure'
                | 'transfer_refund';
        }
    }
}
