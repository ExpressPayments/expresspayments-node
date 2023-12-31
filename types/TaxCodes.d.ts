// File generated from our OpenAPI spec

declare module 'expresspayments' {
    namespace ExpressPayments {
        /**
         * [Tax codes](https://docs.epayments.network/tax/tax-categories) classify goods and services for tax purposes.
         */
        interface TaxCode {
            /**
             * Unique identifier for the object.
             */
            id: string;

            /**
             * String representing the object's type. Objects of the same type share the same value.
             */
            object: 'tax_code';

            /**
             * A detailed description of which types of products the tax code represents.
             */
            description: string;

            /**
             * A short name for the tax code.
             */
            name: string;
        }
    }
}
