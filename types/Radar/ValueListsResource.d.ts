// File generated from our OpenAPI spec

declare module 'expresspayments' {
    namespace ExpressPayments {
        namespace Radar {
            interface ValueListCreateParams {
                /**
                 * The name of the value list for use in rules.
                 */
                alias: string;

                /**
                 * The human-readable name of the value list.
                 */
                name: string;

                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;

                /**
                 * Type of the items in the value list. One of `card_fingerprint`, `card_bin`, `email`, `ip_address`, `country`, `string`, `case_sensitive_string`, or `customer_id`. Use `string` if the item type is unknown or mixed.
                 */
                item_type?: ValueListCreateParams.ItemType;

                /**
                 * Set of [key-value pairs](https://docs.epayments.network/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
                 */
                metadata?: ExpressPayments.MetadataParam;
            }

            namespace ValueListCreateParams {
                type ItemType =
                    | 'card_bin'
                    | 'card_fingerprint'
                    | 'case_sensitive_string'
                    | 'country'
                    | 'customer_id'
                    | 'email'
                    | 'ip_address'
                    | 'string';
            }

            interface ValueListRetrieveParams {
                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;
            }

            interface ValueListUpdateParams {
                /**
                 * The name of the value list for use in rules.
                 */
                alias?: string;

                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;

                /**
                 * Set of [key-value pairs](https://docs.epayments.network/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
                 */
                metadata?: ExpressPayments.MetadataParam;

                /**
                 * The human-readable name of the value list.
                 */
                name?: string;
            }

            interface ValueListListParams extends PaginationParams {
                /**
                 * The alias used to reference the value list when writing rules.
                 */
                alias?: string;

                /**
                 * A value contained within a value list - returns all value lists containing this value.
                 */
                contains?: string;

                created?: ExpressPayments.RangeQueryParam | number;

                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;
            }

            interface ValueListDeleteParams {}

            class ValueListsResource {
                /**
                 * Creates a new ValueList object, which can then be referenced in rules.
                 */
                create(
                    params: ValueListCreateParams,
                    options?: RequestOptions
                ): Promise<
                  ExpressPayments.Response<ExpressPayments.Radar.ValueList>
                >;

                /**
                 * Retrieves a ValueList object.
                 */
                retrieve(
                    id: string,
                    params?: ValueListRetrieveParams,
                    options?: RequestOptions
                ): Promise<
                  ExpressPayments.Response<ExpressPayments.Radar.ValueList>
                >;
                retrieve(
                    id: string,
                    options?: RequestOptions
                ): Promise<
                  ExpressPayments.Response<ExpressPayments.Radar.ValueList>
                >;

                /**
                 * Updates a ValueList object by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Note that item_type is immutable.
                 */
                update(
                    id: string,
                    params?: ValueListUpdateParams,
                    options?: RequestOptions
                ): Promise<
                  ExpressPayments.Response<ExpressPayments.Radar.ValueList>
                >;

                /**
                 * Returns a list of ValueList objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
                 */
                list(
                    params?: ValueListListParams,
                    options?: RequestOptions
                ): ApiListPromise<ExpressPayments.Radar.ValueList>;
                list(
                    options?: RequestOptions
                ): ApiListPromise<ExpressPayments.Radar.ValueList>;

                /**
                 * Deletes a ValueList object, also deleting any items contained within the value list. To be deleted, a value list must not be referenced in any rules.
                 */
                del(
                    id: string,
                    params?: ValueListDeleteParams,
                    options?: RequestOptions
                ): Promise<
                    ExpressPayments.Response<ExpressPayments.Radar.DeletedValueList>
                >;
                del(
                    id: string,
                    options?: RequestOptions
                ): Promise<
                    ExpressPayments.Response<ExpressPayments.Radar.DeletedValueList>
                >;
            }
        }
    }
}
