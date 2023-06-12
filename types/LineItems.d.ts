// File generated from our OpenAPI spec

declare module 'expressplatby' {
    namespace ExpressPlatby {
        /**
         * A line item.
         */
        interface LineItem {
            /**
             * Unique identifier for the object.
             */
            id: string;

            /**
             * String representing the object's type. Objects of the same type share the same value.
             */
            object: 'item';

            /**
             * Total discount amount applied. If no discounts were applied, defaults to 0.
             */
            amount_discount: number;

            /**
             * Total before any discounts or taxes are applied.
             */
            amount_subtotal: number;

            /**
             * Total tax amount applied. If no tax was applied, defaults to 0.
             */
            amount_tax: number;

            /**
             * Total after discounts and taxes.
             */
            amount_total: number;

            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://expressplatby.cz/docs/currencies).
             */
            currency: string;

            /**
             * An arbitrary string attached to the object. Often useful for displaying to users. Defaults to product name.
             */
            description: string;

            /**
             * The discounts applied to the line item.
             */
            discounts?: Array<LineItem.Discount>;

            /**
             * The price used to generate the line item.
             */
            price: ExpressPlatby.Price | null;

            /**
             * The quantity of products being purchased.
             */
            quantity: number | null;

            /**
             * The taxes applied to the line item.
             */
            taxes?: Array<LineItem.Tax>;
        }

        namespace LineItem {
            interface Discount {
                /**
                 * The amount discounted.
                 */
                amount: number;

                /**
                 * A discount represents the actual application of a [coupon](https://expressplatby.cz/docs/api#coupons) or [promotion code](https://expressplatby.cz/docs/api#promotion_codes).
                 * It contains information about when the discount began, when it will end, and what it is applied to.
                 *
                 * Related guide: [Applying discounts to subscriptions](https://expressplatby.cz/docs/billing/subscriptions/discounts)
                 */
                discount: ExpressPlatby.Discount;
            }

            interface Tax {
                /**
                 * Amount of tax applied for this rate.
                 */
                amount: number;

                /**
                 * Tax rates can be applied to [invoices](https://expressplatby.cz/docs/billing/invoices/tax-rates), [subscriptions](https://expressplatby.cz/docs/billing/subscriptions/taxes) and [Checkout Sessions](https://expressplatby.cz/docs/payments/checkout/set-up-a-subscription#tax-rates) to collect tax.
                 *
                 * Related guide: [Tax rates](https://expressplatby.cz/docs/billing/taxes/tax-rates)
                 */
                rate: ExpressPlatby.TaxRate;

                /**
                 * The reasoning behind this tax, for example, if the product is tax-exempt. The possible values for this field may be extended as new tax rules are supported.
                 */
                taxability_reason: Tax.TaxabilityReason | null;

                /**
                 * The amount on which tax is calculated, in %s.
                 */
                taxable_amount: number | null;
            }

            namespace Tax {
                type TaxabilityReason =
                    | 'customer_exempt'
                    | 'excluded_territory'
                    | 'jurisdiction_unsupported'
                    | 'not_collecting'
                    | 'not_subject_to_tax'
                    | 'not_supported'
                    | 'portion_product_exempt'
                    | 'portion_reduced_rated'
                    | 'portion_standard_rated'
                    | 'product_exempt'
                    | 'product_exempt_holiday'
                    | 'proportionally_rated'
                    | 'reduced_rated'
                    | 'reverse_charge'
                    | 'standard_rated'
                    | 'taxable_basis_reduced'
                    | 'vat_exempt'
                    | 'zero_rated';
            }
        }
    }
}
