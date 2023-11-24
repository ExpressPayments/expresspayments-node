// File generated from our OpenAPI spec

declare module 'expresspayments' {
    namespace ExpressPayments {
        /**
         * You can configure [webhook endpoints](https://docs.epayments.network/webhooks/) via the API to be
         * notified about events that happen in your ExpressPayments account or connected
         * accounts.
         *
         * Most users configure webhooks from [the dashboard](https://dashboard.epayments.network/webhooks), which provides a user interface for registering and testing your webhook endpoints.
         *
         * Related guide: [Setting up webhooks](https://docs.epayments.network/webhooks/configure)
         */
        interface WebhookEndpoint {
            /**
             * Unique identifier for the object.
             */
            id: string;

            /**
             * String representing the object's type. Objects of the same type share the same value.
             */
            object: 'webhook_endpoint';

            /**
             * The API version events are rendered as for this webhook endpoint.
             */
            api_version: string | null;

            /**
             * The ID of the associated Connect application.
             */
            application: string | null;

            /**
             * Time at which the object was created. Measured in seconds since the Unix epoch.
             */
            created: number;

            deleted?: void;

            /**
             * An optional description of what the webhook is used for.
             */
            description: string | null;

            /**
             * The list of events to enable for this endpoint. `['*']` indicates that all events are enabled, except those that require explicit selection.
             */
            enabled_events: Array<string>;

            /**
             * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
             */
            livemode: boolean;

            /**
             * Set of [key-value pairs](https://docs.epayments.network/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
             */
            metadata: ExpressPayments.Metadata;

            /**
             * The endpoint's secret, used to generate [webhook signatures](https://docs.epayments.network/webhooks/signatures). Only returned at creation.
             */
            secret?: string;

            /**
             * The status of the webhook. It can be `enabled` or `disabled`.
             */
            status: string;

            /**
             * The URL of the webhook endpoint.
             */
            url: string;
        }

        /**
         * The DeletedWebhookEndpoint object.
         */
        interface DeletedWebhookEndpoint {
            /**
             * Unique identifier for the object.
             */
            id: string;

            /**
             * String representing the object's type. Objects of the same type share the same value.
             */
            object: 'webhook_endpoint';

            /**
             * Always true for a deleted object
             */
            deleted: true;
        }
    }
}
