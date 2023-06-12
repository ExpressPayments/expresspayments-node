// File generated from our OpenAPI spec

declare module 'expressplatby' {
    namespace ExpressPlatby {
        interface EventRetrieveParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }

        interface EventListParams extends PaginationParams {
            created?: ExpressPlatby.RangeQueryParam | number;

            /**
             * Filter events by whether all webhooks were successfully delivered. If false, events which are still pending or have failed all delivery attempts to a webhook endpoint will be returned.
             */
            delivery_success?: boolean;

            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;

            /**
             * A string containing a specific event name, or group of events using * as a wildcard. The list will be filtered to include only events with a matching event property.
             */
            type?: string;

            /**
             * An array of up to 20 strings containing specific event names. The list will be filtered to include only events with a matching event property. You may pass either `type` or `types`, but not both.
             */
            types?: Array<string>;
        }

        class EventsResource {
            /**
             * Retrieves the details of an event. Supply the unique identifier of the event, which you might have received in a webhook.
             */
            retrieve(
                id: string,
                params?: EventRetrieveParams,
                options?: RequestOptions
            ): Promise<ExpressPlatby.Response<ExpressPlatby.Event>>;
            retrieve(
                id: string,
                options?: RequestOptions
            ): Promise<ExpressPlatby.Response<ExpressPlatby.Event>>;

            /**
             * List events, going back up to 30 days. Each event data is rendered according to ExpressPlatby API version at its creation time, specified in [event object](https://expressplatby.cz/docs/api/events/object) api_version attribute (not according to your current ExpressPlatby API version or ExpressPlatby-Version header).
             */
            list(
                params?: EventListParams,
                options?: RequestOptions
            ): ApiListPromise<ExpressPlatby.Event>;
            list(options?: RequestOptions): ApiListPromise<ExpressPlatby.Event>;
        }
    }
}
