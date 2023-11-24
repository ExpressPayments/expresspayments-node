// File generated from our OpenAPI spec

declare module 'expresspayments' {
    namespace ExpressPayments {
        /**
         * The TaxDeductedAtSource object.
         */
        interface TaxDeductedAtSource {
            /**
             * Unique identifier for the object.
             */
            id: string;

            /**
             * String representing the object's type. Objects of the same type share the same value.
             */
            object: 'tax_deducted_at_source';

            /**
             * The end of the invoicing period. This TDS applies to ExpressPayments fees collected during this invoicing period.
             */
            period_end: number;

            /**
             * The start of the invoicing period. This TDS applies to ExpressPayments fees collected during this invoicing period.
             */
            period_start: number;

            /**
             * The TAN that was supplied to ExpressPayments when TDS was assessed
             */
            tax_deduction_account_number: string;
        }
    }
}
