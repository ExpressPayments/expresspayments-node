// File generated from our OpenAPI spec

declare module 'expresspayments' {
    namespace ExpressPayments {
        interface CreditNoteCreateParams {
            /**
             * ID of the invoice.
             */
            invoice: string;

            /**
             * The integer amount in cents (or local equivalent) representing the total amount of the credit note.
             */
            amount?: number;

            /**
             * The integer amount in cents (or local equivalent) representing the amount to credit the customer's balance, which will be automatically applied to their next invoice.
             */
            credit_amount?: number;

            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;

            /**
             * Line items that make up the credit note.
             */
            lines?: Array<CreditNoteCreateParams.Line>;

            /**
             * The credit note's memo appears on the credit note PDF.
             */
            memo?: string;

            /**
             * Set of [key-value pairs](https://docs.epayments.network/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
             */
            metadata?: ExpressPayments.MetadataParam;

            /**
             * The integer amount in cents (or local equivalent) representing the amount that is credited outside ExpressPayments.
             */
            out_of_band_amount?: number;

            /**
             * Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory`
             */
            reason?: CreditNoteCreateParams.Reason;

            /**
             * ID of an existing refund to link this credit note to.
             */
            refund?: string;

            /**
             * The integer amount in cents (or local equivalent) representing the amount to refund. If set, a refund will be created for the charge associated with the invoice.
             */
            refund_amount?: number;

            /**
             * When shipping_cost contains the shipping_rate from the invoice, the shipping_cost is included in the credit note.
             */
            shipping_cost?: CreditNoteCreateParams.ShippingCost;
        }

        namespace CreditNoteCreateParams {
            interface Line {
                /**
                 * The line item amount to credit. Only valid when `type` is `invoice_line_item`.
                 */
                amount?: number;

                /**
                 * The description of the credit note line item. Only valid when the `type` is `custom_line_item`.
                 */
                description?: string;

                /**
                 * The invoice line item to credit. Only valid when the `type` is `invoice_line_item`.
                 */
                invoice_line_item?: string;

                /**
                 * The line item quantity to credit.
                 */
                quantity?: number;

                /**
                 * The tax rates which apply to the credit note line item. Only valid when the `type` is `custom_line_item`.
                 */
                tax_rates?: ExpressPayments.Emptyable<Array<string>>;

                /**
                 * Type of the credit note line item, one of `invoice_line_item` or `custom_line_item`
                 */
                type: Line.Type;

                /**
                 * The integer unit amount in cents (or local equivalent) of the credit note line item. This `unit_amount` will be multiplied by the quantity to get the full amount to credit for this line item. Only valid when `type` is `custom_line_item`.
                 */
                unit_amount?: number;

                /**
                 * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
                 */
                unit_amount_decimal?: string;
            }

            namespace Line {
                type Type = 'custom_line_item' | 'invoice_line_item';
            }

            type Reason =
                | 'duplicate'
                | 'fraudulent'
                | 'order_change'
                | 'product_unsatisfactory';

            interface ShippingCost {
                /**
                 * The ID of the shipping rate to use for this order.
                 */
                shipping_rate?: string;
            }
        }

        interface CreditNoteRetrieveParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }

        interface CreditNoteUpdateParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;

            /**
             * Credit note memo.
             */
            memo?: string;

            /**
             * Set of [key-value pairs](https://docs.epayments.network/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
             */
            metadata?: ExpressPayments.MetadataParam;
        }

        interface CreditNoteListParams extends PaginationParams {
            /**
             * Only return credit notes for the customer specified by this customer ID.
             */
            customer?: string;

            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;

            /**
             * Only return credit notes for the invoice specified by this invoice ID.
             */
            invoice?: string;
        }

        interface CreditNoteLineItemListParams extends PaginationParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }

        interface CreditNoteListPreviewLineItemsParams
            extends PaginationParams {
            /**
             * ID of the invoice.
             */
            invoice: string;

            /**
             * The integer amount in cents (or local equivalent) representing the total amount of the credit note.
             */
            amount?: number;

            /**
             * The integer amount in cents (or local equivalent) representing the amount to credit the customer's balance, which will be automatically applied to their next invoice.
             */
            credit_amount?: number;

            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;

            /**
             * Line items that make up the credit note.
             */
            lines?: Array<CreditNoteListPreviewLineItemsParams.Line>;

            /**
             * The credit note's memo appears on the credit note PDF.
             */
            memo?: string;

            /**
             * Set of [key-value pairs](https://docs.epayments.network/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
             */
            metadata?: ExpressPayments.MetadataParam;

            /**
             * The integer amount in cents (or local equivalent) representing the amount that is credited outside ExpressPayments.
             */
            out_of_band_amount?: number;

            /**
             * Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory`
             */
            reason?: CreditNoteListPreviewLineItemsParams.Reason;

            /**
             * ID of an existing refund to link this credit note to.
             */
            refund?: string;

            /**
             * The integer amount in cents (or local equivalent) representing the amount to refund. If set, a refund will be created for the charge associated with the invoice.
             */
            refund_amount?: number;

            /**
             * When shipping_cost contains the shipping_rate from the invoice, the shipping_cost is included in the credit note.
             */
            shipping_cost?: CreditNoteListPreviewLineItemsParams.ShippingCost;
        }

        namespace CreditNoteListPreviewLineItemsParams {
            interface Line {
                /**
                 * The line item amount to credit. Only valid when `type` is `invoice_line_item`.
                 */
                amount?: number;

                /**
                 * The description of the credit note line item. Only valid when the `type` is `custom_line_item`.
                 */
                description?: string;

                /**
                 * The invoice line item to credit. Only valid when the `type` is `invoice_line_item`.
                 */
                invoice_line_item?: string;

                /**
                 * The line item quantity to credit.
                 */
                quantity?: number;

                /**
                 * The tax rates which apply to the credit note line item. Only valid when the `type` is `custom_line_item`.
                 */
                tax_rates?: ExpressPayments.Emptyable<Array<string>>;

                /**
                 * Type of the credit note line item, one of `invoice_line_item` or `custom_line_item`
                 */
                type: Line.Type;

                /**
                 * The integer unit amount in cents (or local equivalent) of the credit note line item. This `unit_amount` will be multiplied by the quantity to get the full amount to credit for this line item. Only valid when `type` is `custom_line_item`.
                 */
                unit_amount?: number;

                /**
                 * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
                 */
                unit_amount_decimal?: string;
            }

            namespace Line {
                type Type = 'custom_line_item' | 'invoice_line_item';
            }

            type Reason =
                | 'duplicate'
                | 'fraudulent'
                | 'order_change'
                | 'product_unsatisfactory';

            interface ShippingCost {
                /**
                 * The ID of the shipping rate to use for this order.
                 */
                shipping_rate?: string;
            }
        }

        interface CreditNotePreviewParams {
            /**
             * ID of the invoice.
             */
            invoice: string;

            /**
             * The integer amount in cents (or local equivalent) representing the total amount of the credit note.
             */
            amount?: number;

            /**
             * The integer amount in cents (or local equivalent) representing the amount to credit the customer's balance, which will be automatically applied to their next invoice.
             */
            credit_amount?: number;

            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;

            /**
             * Line items that make up the credit note.
             */
            lines?: Array<CreditNotePreviewParams.Line>;

            /**
             * The credit note's memo appears on the credit note PDF.
             */
            memo?: string;

            /**
             * Set of [key-value pairs](https://docs.epayments.network/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
             */
            metadata?: ExpressPayments.MetadataParam;

            /**
             * The integer amount in cents (or local equivalent) representing the amount that is credited outside ExpressPayments.
             */
            out_of_band_amount?: number;

            /**
             * Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory`
             */
            reason?: CreditNotePreviewParams.Reason;

            /**
             * ID of an existing refund to link this credit note to.
             */
            refund?: string;

            /**
             * The integer amount in cents (or local equivalent) representing the amount to refund. If set, a refund will be created for the charge associated with the invoice.
             */
            refund_amount?: number;

            /**
             * When shipping_cost contains the shipping_rate from the invoice, the shipping_cost is included in the credit note.
             */
            shipping_cost?: CreditNotePreviewParams.ShippingCost;
        }

        namespace CreditNotePreviewParams {
            interface Line {
                /**
                 * The line item amount to credit. Only valid when `type` is `invoice_line_item`.
                 */
                amount?: number;

                /**
                 * The description of the credit note line item. Only valid when the `type` is `custom_line_item`.
                 */
                description?: string;

                /**
                 * The invoice line item to credit. Only valid when the `type` is `invoice_line_item`.
                 */
                invoice_line_item?: string;

                /**
                 * The line item quantity to credit.
                 */
                quantity?: number;

                /**
                 * The tax rates which apply to the credit note line item. Only valid when the `type` is `custom_line_item`.
                 */
                tax_rates?: ExpressPayments.Emptyable<Array<string>>;

                /**
                 * Type of the credit note line item, one of `invoice_line_item` or `custom_line_item`
                 */
                type: Line.Type;

                /**
                 * The integer unit amount in cents (or local equivalent) of the credit note line item. This `unit_amount` will be multiplied by the quantity to get the full amount to credit for this line item. Only valid when `type` is `custom_line_item`.
                 */
                unit_amount?: number;

                /**
                 * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
                 */
                unit_amount_decimal?: string;
            }

            namespace Line {
                type Type = 'custom_line_item' | 'invoice_line_item';
            }

            type Reason =
                | 'duplicate'
                | 'fraudulent'
                | 'order_change'
                | 'product_unsatisfactory';

            interface ShippingCost {
                /**
                 * The ID of the shipping rate to use for this order.
                 */
                shipping_rate?: string;
            }
        }

        interface CreditNoteVoidCreditNoteParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }

        class CreditNotesResource {
            /**
             * Issue a credit note to adjust the amount of a finalized invoice. For a status=open invoice, a credit note reduces
             * its amount_due. For a status=paid invoice, a credit note does not affect its amount_due. Instead, it can result
             * in any combination of the following:
             *
             *
             * Refund: create a new refund (using refund_amount) or link an existing refund (using refund).
             * Customer balance credit: credit the customer's balance (using credit_amount) which will be automatically applied to their next invoice when it's finalized.
             * Outside ExpressPayments credit: record the amount that is or will be credited outside ExpressPayments (using out_of_band_amount).
             *
             *
             * For post-payment credit notes the sum of the refund, credit and outside ExpressPayments amounts must equal the credit note total.
             *
             * You may issue multiple credit notes for an invoice. Each credit note will increment the invoice's pre_payment_credit_notes_amount
             * or post_payment_credit_notes_amount depending on its status at the time of credit note creation.
             */
            create(
                params: CreditNoteCreateParams,
                options?: RequestOptions
            ): Promise<ExpressPayments.Response<ExpressPayments.CreditNote>>;

            /**
             * Retrieves the credit note object with the given identifier.
             */
            retrieve(
                id: string,
                params?: CreditNoteRetrieveParams,
                options?: RequestOptions
            ): Promise<ExpressPayments.Response<ExpressPayments.CreditNote>>;
            retrieve(
                id: string,
                options?: RequestOptions
            ): Promise<ExpressPayments.Response<ExpressPayments.CreditNote>>;

            /**
             * Updates an existing credit note.
             */
            update(
                id: string,
                params?: CreditNoteUpdateParams,
                options?: RequestOptions
            ): Promise<ExpressPayments.Response<ExpressPayments.CreditNote>>;

            /**
             * Returns a list of credit notes.
             */
            list(
                params?: CreditNoteListParams,
                options?: RequestOptions
            ): ApiListPromise<ExpressPayments.CreditNote>;
            list(
                options?: RequestOptions
            ): ApiListPromise<ExpressPayments.CreditNote>;

            /**
             * When retrieving a credit note, you'll get a lines property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.
             */
            listLineItems(
                id: string,
                params?: CreditNoteLineItemListParams,
                options?: RequestOptions
            ): ApiListPromise<ExpressPayments.CreditNoteLineItem>;
            listLineItems(
                id: string,
                options?: RequestOptions
            ): ApiListPromise<ExpressPayments.CreditNoteLineItem>;

            /**
             * When retrieving a credit note preview, you'll get a lines property containing the first handful of those items. This URL you can retrieve the full (paginated) list of line items.
             */
            listPreviewLineItems(
                params: CreditNoteListPreviewLineItemsParams,
                options?: RequestOptions
            ): ApiListPromise<ExpressPayments.CreditNoteLineItem>;

            /**
             * Get a preview of a credit note without creating it.
             */
            preview(
                params: CreditNotePreviewParams,
                options?: RequestOptions
            ): Promise<ExpressPayments.Response<ExpressPayments.CreditNote>>;

            /**
             * Marks a credit note as void. Learn more about [voiding credit notes](https://docs.epayments.network/billing/invoices/credit-notes#voiding).
             */
            voidCreditNote(
                id: string,
                params?: CreditNoteVoidCreditNoteParams,
                options?: RequestOptions
            ): Promise<ExpressPayments.Response<ExpressPayments.CreditNote>>;
            voidCreditNote(
                id: string,
                options?: RequestOptions
            ): Promise<ExpressPayments.Response<ExpressPayments.CreditNote>>;
        }
    }
}
