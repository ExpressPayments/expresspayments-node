// File generated from our OpenAPI spec

declare module 'expresspayments' {
    namespace ExpressPayments {
        interface PayoutCreateParams {
            /**
             * A positive integer in cents representing how much to payout.
             */
            amount: number;

            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://docs.epayments.network/currencies).
             */
            currency: string;

            /**
             * An arbitrary string attached to the object. Often useful for displaying to users.
             */
            description?: string;

            /**
             * The ID of a bank account or a card to send the payout to. If no destination is supplied, the default external account for the specified currency will be used.
             */
            destination?: string;

            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;

            /**
             * Set of [key-value pairs](https://docs.epayments.network/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
             */
            metadata?: ExpressPayments.MetadataParam;

            /**
             * The method used to send this payout, which can be `standard` or `instant`. `instant` is only supported for payouts to debit cards. (See [Instant payouts for marketplaces for more information](https://epayments.network/blog/instant-payouts-for-marketplaces).)
             */
            method?: PayoutCreateParams.Method;

            /**
             * The balance type of your ExpressPayments balance to draw this payout from. Balances for different payment sources are kept separately. You can find the amounts with the balances API. One of `bank_account`, `card`, or `fpx`.
             */
            source_type?: PayoutCreateParams.SourceType;

            /**
             * A string to be displayed on the recipient's bank or card statement. This may be at most 22 characters. Attempting to use a `statement_descriptor` longer than 22 characters will return an error. Note: Most banks will truncate this information and/or display it inconsistently. Some may not display it at all.
             */
            statement_descriptor?: string;
        }

        namespace PayoutCreateParams {
            type Method = 'instant' | 'standard';

            type SourceType = 'bank_account' | 'card' | 'fpx';
        }

        interface PayoutRetrieveParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }

        interface PayoutUpdateParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;

            /**
             * Set of [key-value pairs](https://docs.epayments.network/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
             */
            metadata?: ExpressPayments.Emptyable<ExpressPayments.MetadataParam>;
        }

        interface PayoutListParams extends PaginationParams {
            arrival_date?: ExpressPayments.RangeQueryParam | number;

            created?: ExpressPayments.RangeQueryParam | number;

            /**
             * The ID of an external account - only return payouts sent to this external account.
             */
            destination?: string;

            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;

            /**
             * Only return payouts that have the given status: `pending`, `paid`, `failed`, or `canceled`.
             */
            status?: string;
        }

        interface PayoutCancelParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }

        interface PayoutReverseParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;

            /**
             * Set of [key-value pairs](https://docs.epayments.network/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
             */
            metadata?: ExpressPayments.MetadataParam;
        }

        class PayoutsResource {
            /**
             * To send funds to your own bank account, you create a new payout object. Your [ExpressPayments balance](https://docs.epayments.network/api#balance) must be able to cover the payout amount, or you'll receive an “Insufficient Funds” error.
             *
             * If your API key is in test mode, money won't actually be sent, though everything else will occur as if in live mode.
             *
             * If you are creating a manual payout on an ExpressPayments account that uses multiple payment source types, you'll need to specify the source type balance that the payout should draw from. The [balance object](https://docs.epayments.network/api#balance_object) details available and pending amounts by source type.
             */
            create(
                params: PayoutCreateParams,
                options?: RequestOptions
            ): Promise<ExpressPayments.Response<ExpressPayments.Payout>>;

            /**
             * Retrieves the details of an existing payout. Supply the unique payout ID from either a payout creation request or the payout list, and ExpressPayments will return the corresponding payout information.
             */
            retrieve(
                id: string,
                params?: PayoutRetrieveParams,
                options?: RequestOptions
            ): Promise<ExpressPayments.Response<ExpressPayments.Payout>>;
            retrieve(
                id: string,
                options?: RequestOptions
            ): Promise<ExpressPayments.Response<ExpressPayments.Payout>>;

            /**
             * Updates the specified payout by setting the values of the parameters passed. Any parameters not provided will be left unchanged. This request accepts only the metadata as arguments.
             */
            update(
                id: string,
                params?: PayoutUpdateParams,
                options?: RequestOptions
            ): Promise<ExpressPayments.Response<ExpressPayments.Payout>>;

            /**
             * Returns a list of existing payouts sent to third-party bank accounts or that ExpressPayments has sent you. The payouts are returned in sorted order, with the most recently created payouts appearing first.
             */
            list(
                params?: PayoutListParams,
                options?: RequestOptions
            ): ApiListPromise<ExpressPayments.Payout>;
            list(
                options?: RequestOptions
            ): ApiListPromise<ExpressPayments.Payout>;

            /**
             * A previously created payout can be canceled if it has not yet been paid out. Funds will be refunded to your available balance. You may not cancel automatic ExpressPayments payouts.
             */
            cancel(
                id: string,
                params?: PayoutCancelParams,
                options?: RequestOptions
            ): Promise<ExpressPayments.Response<ExpressPayments.Payout>>;
            cancel(
                id: string,
                options?: RequestOptions
            ): Promise<ExpressPayments.Response<ExpressPayments.Payout>>;

            /**
             * Reverses a payout by debiting the destination bank account. Only payouts for connected accounts to US bank accounts may be reversed at this time. If the payout is in the pending status, /v1/payouts/:id/cancel should be used instead.
             *
             * By requesting a reversal via /v1/payouts/:id/reverse, you confirm that the authorized signatory of the selected bank account has authorized the debit on the bank account and that no other authorization is required.
             */
            reverse(
                id: string,
                params?: PayoutReverseParams,
                options?: RequestOptions
            ): Promise<ExpressPayments.Response<ExpressPayments.Payout>>;
            reverse(
                id: string,
                options?: RequestOptions
            ): Promise<ExpressPayments.Response<ExpressPayments.Payout>>;
        }
    }
}
