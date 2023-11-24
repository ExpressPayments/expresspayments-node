// File generated from our OpenAPI spec

declare module 'expresspayments' {
    namespace ExpressPayments {
        /**
         * A `Transfer` object is created when you move funds between ExpressPayments accounts as
         * part of Connect.
         *
         * Before April 6, 2017, transfers also represented movement of funds from a
         * ExpressPayments account to a card or bank account. This behavior has since been split
         * out into a [Payout](https://docs.epayments.network/api#payout_object) object, with corresponding payout endpoints. For more
         * information, read about the
         * [transfer/payout split](https://docs.epayments.network/transfer-payout-split).
         *
         * Related guide: [Creating separate charges and transfers](https://docs.epayments.network/connect/charges-transfers)
         */
        interface Transfer {
            /**
             * Unique identifier for the object.
             */
            id: string;

            /**
             * String representing the object's type. Objects of the same type share the same value.
             */
            object: 'transfer';

            /**
             * Amount in %s to be transferred.
             */
            amount: number;

            /**
             * Amount in %s reversed (can be less than the amount attribute on the transfer if a partial reversal was issued).
             */
            amount_reversed: number;

            /**
             * Balance transaction that describes the impact of this transfer on your account balance.
             */
            balance_transaction:
                | string
                | ExpressPayments.BalanceTransaction
                | null;

            /**
             * Time that this record of the transfer was first created.
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
             * ID of the ExpressPayments account the transfer was sent to.
             */
            destination: string | ExpressPayments.Account | null;

            /**
             * If the destination is an ExpressPayments account, this will be the ID of the payment that the destination account received for the transfer.
             */
            destination_payment?: string | ExpressPayments.Charge;

            /**
             * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
             */
            livemode: boolean;

            /**
             * Set of [key-value pairs](https://docs.epayments.network/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
             */
            metadata: ExpressPayments.Metadata;

            /**
             * A list of reversals that have been applied to the transfer.
             */
            reversals: ApiList<ExpressPayments.TransferReversal>;

            /**
             * Whether the transfer has been fully reversed. If the transfer is only partially reversed, this attribute will still be false.
             */
            reversed: boolean;

            /**
             * ID of the charge or payment that was used to fund the transfer. If null, the transfer was funded from the available balance.
             */
            source_transaction: string | ExpressPayments.Charge | null;

            /**
             * The source balance this transfer came from. One of `card`, `fpx`, or `bank_account`.
             */
            source_type?: string;

            /**
             * A string that identifies this transaction as part of a group. See the [Connect documentation](https://docs.epayments.network/connect/charges-transfers#transfer-options) for details.
             */
            transfer_group: string | null;
        }
    }
}
