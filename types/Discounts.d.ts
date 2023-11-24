// File generated from our OpenAPI spec

declare module 'expresspayments' {
    namespace ExpressPayments {
        /**
         * A discount represents the actual application of a [coupon](https://docs.epayments.network/api#coupons) or [promotion code](https://docs.epayments.network/api#promotion_codes).
         * It contains information about when the discount began, when it will end, and what it is applied to.
         *
         * Related guide: [Applying discounts to subscriptions](https://docs.epayments.network/billing/subscriptions/discounts)
         */
        interface Discount {
            /**
             * The ID of the discount object. Discounts cannot be fetched by ID. Use `expand[]=discounts` in API calls to expand discount IDs in an array.
             */
            id: string;

            /**
             * String representing the object's type. Objects of the same type share the same value.
             */
            object: 'discount';

            /**
             * The Checkout session that this coupon is applied to, if it is applied to a particular session in payment mode. Will not be present for subscription mode.
             */
            checkout_session: string | null;

            /**
             * A coupon contains information about a percent-off or amount-off discount you
             * might want to apply to a customer. Coupons may be applied to [subscriptions](https://docs.epayments.network/api#subscriptions), [invoices](https://docs.epayments.network/api#invoices),
             * [checkout sessions](https://docs.epayments.network/api/checkout/sessions), [quotes](https://docs.epayments.network/api#quotes), and more. Coupons do not work with conventional one-off [charges](https://docs.epayments.network/api#create_charge) or [payment intents](https://docs.epayments.network/api/payment_intents).
             */
            coupon: ExpressPayments.Coupon;

            /**
             * The ID of the customer associated with this discount.
             */
            customer:
                | string
                | ExpressPayments.Customer
                | ExpressPayments.DeletedCustomer
                | null;

            deleted?: void;

            /**
             * If the coupon has a duration of `repeating`, the date that this discount will end. If the coupon has a duration of `once` or `forever`, this attribute will be null.
             */
            end: number | null;

            /**
             * The invoice that the discount's coupon was applied to, if it was applied directly to a particular invoice.
             */
            invoice: string | null;

            /**
             * The invoice item `id` (or invoice line item `id` for invoice line items of type='subscription') that the discount's coupon was applied to, if it was applied directly to a particular invoice item or invoice line item.
             */
            invoice_item: string | null;

            /**
             * The promotion code applied to create this discount.
             */
            promotion_code: string | ExpressPayments.PromotionCode | null;

            /**
             * Date that the coupon was applied.
             */
            start: number;

            /**
             * The subscription that this coupon is applied to, if it is applied to a particular subscription.
             */
            subscription: string | null;
        }

        /**
         * The DeletedDiscount object.
         */
        interface DeletedDiscount {
            /**
             * The ID of the discount object. Discounts cannot be fetched by ID. Use `expand[]=discounts` in API calls to expand discount IDs in an array.
             */
            id: string;

            /**
             * String representing the object's type. Objects of the same type share the same value.
             */
            object: 'discount';

            /**
             * The Checkout session that this coupon is applied to, if it is applied to a particular session in payment mode. Will not be present for subscription mode.
             */
            checkout_session: string | null;

            /**
             * A coupon contains information about a percent-off or amount-off discount you
             * might want to apply to a customer. Coupons may be applied to [subscriptions](https://docs.epayments.network/api#subscriptions), [invoices](https://docs.epayments.network/api#invoices),
             * [checkout sessions](https://docs.epayments.network/api/checkout/sessions), [quotes](https://docs.epayments.network/api#quotes), and more. Coupons do not work with conventional one-off [charges](https://docs.epayments.network/api#create_charge) or [payment intents](https://docs.epayments.network/api/payment_intents).
             */
            coupon: ExpressPayments.Coupon;

            /**
             * The ID of the customer associated with this discount.
             */
            customer:
                | string
                | ExpressPayments.Customer
                | ExpressPayments.DeletedCustomer
                | null;

            /**
             * Always true for a deleted object
             */
            deleted: true;

            /**
             * The invoice that the discount's coupon was applied to, if it was applied directly to a particular invoice.
             */
            invoice: string | null;

            /**
             * The invoice item `id` (or invoice line item `id` for invoice line items of type='subscription') that the discount's coupon was applied to, if it was applied directly to a particular invoice item or invoice line item.
             */
            invoice_item: string | null;

            /**
             * The promotion code applied to create this discount.
             */
            promotion_code: string | ExpressPayments.PromotionCode | null;

            /**
             * Date that the coupon was applied.
             */
            start: number;

            /**
             * The subscription that this coupon is applied to, if it is applied to a particular subscription.
             */
            subscription: string | null;
        }
    }
}
