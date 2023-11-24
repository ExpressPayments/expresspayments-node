// File generated from our OpenAPI spec

import ExpressPayments from "expresspayments";

declare module 'expresspayments' {
    namespace ExpressPayments {
        interface WebhookEndpointCreateParams {
            /**
             * The list of events to enable for this endpoint. You may specify `['*']` to enable all events, except those that require explicit selection.
             */
            enabled_events: Array<WebhookEndpointCreateParams.EnabledEvent>;

            /**
             * The URL of the webhook endpoint.
             */
            url: string;

            /**
             * Events sent to this endpoint will be generated with this ExpressPayments Version instead of your account's default ExpressPayments Version.
             */
            api_version?: WebhookEndpointCreateParams.ApiVersion;

            /**
             * Whether this endpoint should receive events from connected accounts (`true`), or from your account (`false`). Defaults to `false`.
             */
            connect?: boolean;

            /**
             * An optional description of what the webhook is used for.
             */
            description?: string;

            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;

            /**
             * Set of [key-value pairs](https://docs.epayments.network/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
             */
            metadata?: ExpressPayments.Emptyable<ExpressPayments.MetadataParam>;
        }

        namespace WebhookEndpointCreateParams {
            type ApiVersion = '2023-11-01';

            type EnabledEvent =
                | '*'
                | 'account.application.authorized'
                | 'account.application.deauthorized'
                | 'account.external_account.created'
                | 'account.external_account.deleted'
                | 'account.external_account.updated'
                | 'account.updated'
                | 'application_fee.created'
                | 'application_fee.refund.updated'
                | 'application_fee.refunded'
                | 'balance.available'
                | 'billing_portal.configuration.created'
                | 'billing_portal.configuration.updated'
                | 'billing_portal.session.created'
                | 'capability.updated'
                | 'cash_balance.funds_available'
                | 'charge.captured'
                | 'charge.dispute.closed'
                | 'charge.dispute.created'
                | 'charge.dispute.funds_reinstated'
                | 'charge.dispute.funds_withdrawn'
                | 'charge.dispute.updated'
                | 'charge.expired'
                | 'charge.failed'
                | 'charge.pending'
                | 'charge.refund.updated'
                | 'charge.refunded'
                | 'charge.succeeded'
                | 'charge.updated'
                | 'checkout.session.async_payment_failed'
                | 'checkout.session.async_payment_succeeded'
                | 'checkout.session.completed'
                | 'checkout.session.expired'
                | 'coupon.created'
                | 'coupon.deleted'
                | 'coupon.updated'
                | 'credit_note.created'
                | 'credit_note.updated'
                | 'credit_note.voided'
                | 'customer.created'
                | 'customer.deleted'
                | 'customer.discount.created'
                | 'customer.discount.deleted'
                | 'customer.discount.updated'
                | 'customer.source.created'
                | 'customer.source.deleted'
                | 'customer.source.expiring'
                | 'customer.source.updated'
                | 'customer.subscription.created'
                | 'customer.subscription.deleted'
                | 'customer.subscription.paused'
                | 'customer.subscription.pending_update_applied'
                | 'customer.subscription.pending_update_expired'
                | 'customer.subscription.resumed'
                | 'customer.subscription.trial_will_end'
                | 'customer.subscription.updated'
                | 'customer.tax_id.created'
                | 'customer.tax_id.deleted'
                | 'customer.tax_id.updated'
                | 'customer.updated'
                | 'customer_cash_balance_transaction.created'
                | 'file.created'
                | 'financial_connections.account.created'
                | 'financial_connections.account.deactivated'
                | 'financial_connections.account.disconnected'
                | 'financial_connections.account.reactivated'
                | 'financial_connections.account.refreshed_balance'
                | 'identity.verification_session.canceled'
                | 'identity.verification_session.created'
                | 'identity.verification_session.processing'
                | 'identity.verification_session.redacted'
                | 'identity.verification_session.requires_input'
                | 'identity.verification_session.verified'
                | 'invoice.created'
                | 'invoice.deleted'
                | 'invoice.finalization_failed'
                | 'invoice.finalized'
                | 'invoice.marked_uncollectible'
                | 'invoice.paid'
                | 'invoice.payment_action_required'
                | 'invoice.payment_failed'
                | 'invoice.payment_succeeded'
                | 'invoice.sent'
                | 'invoice.upcoming'
                | 'invoice.updated'
                | 'invoice.voided'
                | 'invoiceitem.created'
                | 'invoiceitem.deleted'
                | 'invoiceitem.updated'
                | 'issuing_authorization.created'
                | 'issuing_authorization.request'
                | 'issuing_authorization.updated'
                | 'issuing_card.created'
                | 'issuing_card.updated'
                | 'issuing_cardholder.created'
                | 'issuing_cardholder.updated'
                | 'issuing_dispute.closed'
                | 'issuing_dispute.created'
                | 'issuing_dispute.funds_reinstated'
                | 'issuing_dispute.submitted'
                | 'issuing_dispute.updated'
                | 'issuing_transaction.created'
                | 'issuing_transaction.updated'
                | 'mandate.updated'
                | 'order.created'
                | 'payment_intent.amount_capturable_updated'
                | 'payment_intent.canceled'
                | 'payment_intent.created'
                | 'payment_intent.partially_funded'
                | 'payment_intent.payment_failed'
                | 'payment_intent.processing'
                | 'payment_intent.requires_action'
                | 'payment_intent.succeeded'
                | 'payment_link.created'
                | 'payment_link.updated'
                | 'payment_method.attached'
                | 'payment_method.automatically_updated'
                | 'payment_method.detached'
                | 'payment_method.updated'
                | 'payout.canceled'
                | 'payout.created'
                | 'payout.failed'
                | 'payout.paid'
                | 'payout.reconciliation_completed'
                | 'payout.updated'
                | 'person.created'
                | 'person.deleted'
                | 'person.updated'
                | 'plan.created'
                | 'plan.deleted'
                | 'plan.updated'
                | 'price.created'
                | 'price.deleted'
                | 'price.updated'
                | 'product.created'
                | 'product.deleted'
                | 'product.updated'
                | 'promotion_code.created'
                | 'promotion_code.updated'
                | 'quote.accepted'
                | 'quote.canceled'
                | 'quote.created'
                | 'quote.finalized'
                | 'radar.early_fraud_warning.created'
                | 'radar.early_fraud_warning.updated'
                | 'recipient.created'
                | 'recipient.deleted'
                | 'recipient.updated'
                | 'refund.created'
                | 'refund.updated'
                | 'reporting.report_run.failed'
                | 'reporting.report_run.succeeded'
                | 'reporting.report_type.updated'
                | 'review.closed'
                | 'review.opened'
                | 'setup_intent.canceled'
                | 'setup_intent.created'
                | 'setup_intent.requires_action'
                | 'setup_intent.setup_failed'
                | 'setup_intent.succeeded'
                | 'sigma.scheduled_query_run.created'
                | 'sku.created'
                | 'sku.deleted'
                | 'sku.updated'
                | 'source.canceled'
                | 'source.chargeable'
                | 'source.failed'
                | 'source.mandate_notification'
                | 'source.refund_attributes_required'
                | 'source.transaction.created'
                | 'source.transaction.updated'
                | 'subscription_schedule.aborted'
                | 'subscription_schedule.canceled'
                | 'subscription_schedule.completed'
                | 'subscription_schedule.created'
                | 'subscription_schedule.expiring'
                | 'subscription_schedule.released'
                | 'subscription_schedule.updated'
                | 'tax_rate.created'
                | 'tax_rate.updated'
                | 'terminal.reader.action_failed'
                | 'terminal.reader.action_succeeded'
                | 'test_helpers.test_clock.advancing'
                | 'test_helpers.test_clock.created'
                | 'test_helpers.test_clock.deleted'
                | 'test_helpers.test_clock.internal_failure'
                | 'test_helpers.test_clock.ready'
                | 'topup.canceled'
                | 'topup.created'
                | 'topup.failed'
                | 'topup.reversed'
                | 'topup.succeeded'
                | 'transfer.created'
                | 'transfer.reversed'
                | 'transfer.updated'
                | 'treasury.credit_reversal.created'
                | 'treasury.credit_reversal.posted'
                | 'treasury.debit_reversal.completed'
                | 'treasury.debit_reversal.created'
                | 'treasury.debit_reversal.initial_credit_granted'
                | 'treasury.financial_account.closed'
                | 'treasury.financial_account.created'
                | 'treasury.financial_account.features_status_updated'
                | 'treasury.inbound_transfer.canceled'
                | 'treasury.inbound_transfer.created'
                | 'treasury.inbound_transfer.failed'
                | 'treasury.inbound_transfer.succeeded'
                | 'treasury.outbound_payment.canceled'
                | 'treasury.outbound_payment.created'
                | 'treasury.outbound_payment.expected_arrival_date_updated'
                | 'treasury.outbound_payment.failed'
                | 'treasury.outbound_payment.posted'
                | 'treasury.outbound_payment.returned'
                | 'treasury.outbound_transfer.canceled'
                | 'treasury.outbound_transfer.created'
                | 'treasury.outbound_transfer.expected_arrival_date_updated'
                | 'treasury.outbound_transfer.failed'
                | 'treasury.outbound_transfer.posted'
                | 'treasury.outbound_transfer.returned'
                | 'treasury.received_credit.created'
                | 'treasury.received_credit.failed'
                | 'treasury.received_credit.succeeded'
                | 'treasury.received_debit.created';
        }

        interface WebhookEndpointRetrieveParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }

        interface WebhookEndpointUpdateParams {
            /**
             * An optional description of what the webhook is used for.
             */
            description?: string;

            /**
             * Disable the webhook endpoint if set to true.
             */
            disabled?: boolean;

            /**
             * The list of events to enable for this endpoint. You may specify `['*']` to enable all events, except those that require explicit selection.
             */
            enabled_events?: Array<WebhookEndpointUpdateParams.EnabledEvent>;

            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;

            /**
             * Set of [key-value pairs](https://docs.epayments.network/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
             */
            metadata?: ExpressPayments.Emptyable<ExpressPayments.MetadataParam>;

            /**
             * The URL of the webhook endpoint.
             */
            url?: string;
        }

        namespace WebhookEndpointUpdateParams {
            type EnabledEvent =
                | '*'
                | 'account.application.authorized'
                | 'account.application.deauthorized'
                | 'account.external_account.created'
                | 'account.external_account.deleted'
                | 'account.external_account.updated'
                | 'account.updated'
                | 'application_fee.created'
                | 'application_fee.refund.updated'
                | 'application_fee.refunded'
                | 'balance.available'
                | 'billing_portal.configuration.created'
                | 'billing_portal.configuration.updated'
                | 'billing_portal.session.created'
                | 'capability.updated'
                | 'cash_balance.funds_available'
                | 'charge.captured'
                | 'charge.dispute.closed'
                | 'charge.dispute.created'
                | 'charge.dispute.funds_reinstated'
                | 'charge.dispute.funds_withdrawn'
                | 'charge.dispute.updated'
                | 'charge.expired'
                | 'charge.failed'
                | 'charge.pending'
                | 'charge.refund.updated'
                | 'charge.refunded'
                | 'charge.succeeded'
                | 'charge.updated'
                | 'checkout.session.async_payment_failed'
                | 'checkout.session.async_payment_succeeded'
                | 'checkout.session.completed'
                | 'checkout.session.expired'
                | 'coupon.created'
                | 'coupon.deleted'
                | 'coupon.updated'
                | 'credit_note.created'
                | 'credit_note.updated'
                | 'credit_note.voided'
                | 'customer.created'
                | 'customer.deleted'
                | 'customer.discount.created'
                | 'customer.discount.deleted'
                | 'customer.discount.updated'
                | 'customer.source.created'
                | 'customer.source.deleted'
                | 'customer.source.expiring'
                | 'customer.source.updated'
                | 'customer.subscription.created'
                | 'customer.subscription.deleted'
                | 'customer.subscription.paused'
                | 'customer.subscription.pending_update_applied'
                | 'customer.subscription.pending_update_expired'
                | 'customer.subscription.resumed'
                | 'customer.subscription.trial_will_end'
                | 'customer.subscription.updated'
                | 'customer.tax_id.created'
                | 'customer.tax_id.deleted'
                | 'customer.tax_id.updated'
                | 'customer.updated'
                | 'customer_cash_balance_transaction.created'
                | 'file.created'
                | 'financial_connections.account.created'
                | 'financial_connections.account.deactivated'
                | 'financial_connections.account.disconnected'
                | 'financial_connections.account.reactivated'
                | 'financial_connections.account.refreshed_balance'
                | 'identity.verification_session.canceled'
                | 'identity.verification_session.created'
                | 'identity.verification_session.processing'
                | 'identity.verification_session.redacted'
                | 'identity.verification_session.requires_input'
                | 'identity.verification_session.verified'
                | 'invoice.created'
                | 'invoice.deleted'
                | 'invoice.finalization_failed'
                | 'invoice.finalized'
                | 'invoice.marked_uncollectible'
                | 'invoice.paid'
                | 'invoice.payment_action_required'
                | 'invoice.payment_failed'
                | 'invoice.payment_succeeded'
                | 'invoice.sent'
                | 'invoice.upcoming'
                | 'invoice.updated'
                | 'invoice.voided'
                | 'invoiceitem.created'
                | 'invoiceitem.deleted'
                | 'invoiceitem.updated'
                | 'issuing_authorization.created'
                | 'issuing_authorization.request'
                | 'issuing_authorization.updated'
                | 'issuing_card.created'
                | 'issuing_card.updated'
                | 'issuing_cardholder.created'
                | 'issuing_cardholder.updated'
                | 'issuing_dispute.closed'
                | 'issuing_dispute.created'
                | 'issuing_dispute.funds_reinstated'
                | 'issuing_dispute.submitted'
                | 'issuing_dispute.updated'
                | 'issuing_transaction.created'
                | 'issuing_transaction.updated'
                | 'mandate.updated'
                | 'order.created'
                | 'payment_intent.amount_capturable_updated'
                | 'payment_intent.canceled'
                | 'payment_intent.created'
                | 'payment_intent.partially_funded'
                | 'payment_intent.payment_failed'
                | 'payment_intent.processing'
                | 'payment_intent.requires_action'
                | 'payment_intent.succeeded'
                | 'payment_link.created'
                | 'payment_link.updated'
                | 'payment_method.attached'
                | 'payment_method.automatically_updated'
                | 'payment_method.detached'
                | 'payment_method.updated'
                | 'payout.canceled'
                | 'payout.created'
                | 'payout.failed'
                | 'payout.paid'
                | 'payout.reconciliation_completed'
                | 'payout.updated'
                | 'person.created'
                | 'person.deleted'
                | 'person.updated'
                | 'plan.created'
                | 'plan.deleted'
                | 'plan.updated'
                | 'price.created'
                | 'price.deleted'
                | 'price.updated'
                | 'product.created'
                | 'product.deleted'
                | 'product.updated'
                | 'promotion_code.created'
                | 'promotion_code.updated'
                | 'quote.accepted'
                | 'quote.canceled'
                | 'quote.created'
                | 'quote.finalized'
                | 'radar.early_fraud_warning.created'
                | 'radar.early_fraud_warning.updated'
                | 'recipient.created'
                | 'recipient.deleted'
                | 'recipient.updated'
                | 'refund.created'
                | 'refund.updated'
                | 'reporting.report_run.failed'
                | 'reporting.report_run.succeeded'
                | 'reporting.report_type.updated'
                | 'review.closed'
                | 'review.opened'
                | 'setup_intent.canceled'
                | 'setup_intent.created'
                | 'setup_intent.requires_action'
                | 'setup_intent.setup_failed'
                | 'setup_intent.succeeded'
                | 'sigma.scheduled_query_run.created'
                | 'sku.created'
                | 'sku.deleted'
                | 'sku.updated'
                | 'source.canceled'
                | 'source.chargeable'
                | 'source.failed'
                | 'source.mandate_notification'
                | 'source.refund_attributes_required'
                | 'source.transaction.created'
                | 'source.transaction.updated'
                | 'subscription_schedule.aborted'
                | 'subscription_schedule.canceled'
                | 'subscription_schedule.completed'
                | 'subscription_schedule.created'
                | 'subscription_schedule.expiring'
                | 'subscription_schedule.released'
                | 'subscription_schedule.updated'
                | 'tax_rate.created'
                | 'tax_rate.updated'
                | 'terminal.reader.action_failed'
                | 'terminal.reader.action_succeeded'
                | 'test_helpers.test_clock.advancing'
                | 'test_helpers.test_clock.created'
                | 'test_helpers.test_clock.deleted'
                | 'test_helpers.test_clock.internal_failure'
                | 'test_helpers.test_clock.ready'
                | 'topup.canceled'
                | 'topup.created'
                | 'topup.failed'
                | 'topup.reversed'
                | 'topup.succeeded'
                | 'transfer.created'
                | 'transfer.reversed'
                | 'transfer.updated'
                | 'treasury.credit_reversal.created'
                | 'treasury.credit_reversal.posted'
                | 'treasury.debit_reversal.completed'
                | 'treasury.debit_reversal.created'
                | 'treasury.debit_reversal.initial_credit_granted'
                | 'treasury.financial_account.closed'
                | 'treasury.financial_account.created'
                | 'treasury.financial_account.features_status_updated'
                | 'treasury.inbound_transfer.canceled'
                | 'treasury.inbound_transfer.created'
                | 'treasury.inbound_transfer.failed'
                | 'treasury.inbound_transfer.succeeded'
                | 'treasury.outbound_payment.canceled'
                | 'treasury.outbound_payment.created'
                | 'treasury.outbound_payment.expected_arrival_date_updated'
                | 'treasury.outbound_payment.failed'
                | 'treasury.outbound_payment.posted'
                | 'treasury.outbound_payment.returned'
                | 'treasury.outbound_transfer.canceled'
                | 'treasury.outbound_transfer.created'
                | 'treasury.outbound_transfer.expected_arrival_date_updated'
                | 'treasury.outbound_transfer.failed'
                | 'treasury.outbound_transfer.posted'
                | 'treasury.outbound_transfer.returned'
                | 'treasury.received_credit.created'
                | 'treasury.received_credit.failed'
                | 'treasury.received_credit.succeeded'
                | 'treasury.received_debit.created';
        }

        interface WebhookEndpointListParams extends PaginationParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }

        interface WebhookEndpointDeleteParams {}

        class WebhookEndpointsResource {
            /**
             * A webhook endpoint must have an url and a list of enabled_events. You may optionally specify the Boolean connect parameter. If set to true, then a Connect webhook endpoint that notifies the specified url about events from all connected accounts is created; otherwise an account webhook endpoint that notifies the specified url only about events from your account is created. You can also create webhook endpoints in the [webhooks settings](https://dashboard.epayments.network/account/webhooks) section of the Dashboard.
             */
            create(
                params: WebhookEndpointCreateParams,
                options?: RequestOptions
            ): Promise<ExpressPayments.Response<ExpressPayments.WebhookEndpoint>>;

            /**
             * Retrieves the webhook endpoint with the given ID.
             */
            retrieve(
                id: string,
                params?: WebhookEndpointRetrieveParams,
                options?: RequestOptions
            ): Promise<ExpressPayments.Response<ExpressPayments.WebhookEndpoint>>;
            retrieve(
                id: string,
                options?: RequestOptions
            ): Promise<ExpressPayments.Response<ExpressPayments.WebhookEndpoint>>;

            /**
             * Updates the webhook endpoint. You may edit the url, the list of enabled_events, and the status of your endpoint.
             */
            update(
                id: string,
                params?: WebhookEndpointUpdateParams,
                options?: RequestOptions
            ): Promise<ExpressPayments.Response<ExpressPayments.WebhookEndpoint>>;

            /**
             * Returns a list of your webhook endpoints.
             */
            list(
                params?: WebhookEndpointListParams,
                options?: RequestOptions
            ): ApiListPromise<ExpressPayments.WebhookEndpoint>;
            list(
                options?: RequestOptions
            ): ApiListPromise<ExpressPayments.WebhookEndpoint>;

            /**
             * You can also delete webhook endpoints via the [webhook endpoint management](https://dashboard.epayments.network/account/webhooks) page of the ExpressPayments dashboard.
             */
            del(
                id: string,
                params?: WebhookEndpointDeleteParams,
                options?: RequestOptions
            ): Promise<
                ExpressPayments.Response<ExpressPayments.DeletedWebhookEndpoint>
            >;
            del(
                id: string,
                options?: RequestOptions
            ): Promise<
                ExpressPayments.Response<ExpressPayments.DeletedWebhookEndpoint>
            >;
        }
    }
}
