// File generated from our OpenAPI spec

declare module 'expresspayments' {
    namespace ExpressPayments {
        /**
         * The ConnectCollectionTransfer object.
         */
        interface ConnectCollectionTransfer {
            /**
             * Unique identifier for the object.
             */
            id: string;

            /**
             * String representing the object's type. Objects of the same type share the same value.
             */
            object: 'connect_collection_transfer';

            /**
             * Amount transferred, in %s.
             */
            amount: number;

            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://docs.epayments.network/currencies).
             */
            currency: string;

            /**
             * ID of the account that funds are being collected for.
             */
            destination: string | ExpressPayments.Account;

            /**
             * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
             */
            livemode: boolean;
        }
    }
}
