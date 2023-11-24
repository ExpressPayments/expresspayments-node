// File generated from our OpenAPI spec

declare module 'expresspayments' {
    namespace ExpressPayments {
        namespace Terminal {
            interface LocationCreateParams {
                /**
                 * The full address of the location.
                 */
                address: LocationCreateParams.Address;

                /**
                 * A name for the location.
                 */
                display_name: string;

                /**
                 * The ID of a configuration that will be used to customize all readers in this location.
                 */
                configuration_overrides?: string;

                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;

                /**
                 * Set of [key-value pairs](https://docs.epayments.network/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
                 */
                metadata?: ExpressPayments.Emptyable<
                    ExpressPayments.MetadataParam
                >;
            }

            namespace LocationCreateParams {
                interface Address {
                    /**
                     * City, district, suburb, town, or village.
                     */
                    city?: string;

                    /**
                     * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                     */
                    country: string;

                    /**
                     * Address line 1 (e.g., street, PO Box, or company name).
                     */
                    line1?: string;

                    /**
                     * Address line 2 (e.g., apartment, suite, unit, or building).
                     */
                    line2?: string;

                    /**
                     * ZIP or postal code.
                     */
                    postal_code?: string;

                    /**
                     * State, county, province, or region.
                     */
                    state?: string;
                }
            }

            interface LocationRetrieveParams {
                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;
            }

            interface LocationUpdateParams {
                /**
                 * The full address of the location.
                 */
                address?: ExpressPayments.AddressParam;

                /**
                 * The ID of a configuration that will be used to customize all readers in this location.
                 */
                configuration_overrides?: string;

                /**
                 * A name for the location.
                 */
                display_name?: string;

                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;

                /**
                 * Set of [key-value pairs](https://docs.epayments.network/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
                 */
                metadata?: ExpressPayments.Emptyable<
                    ExpressPayments.MetadataParam
                >;
            }

            interface LocationListParams extends PaginationParams {
                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;
            }

            interface LocationDeleteParams {}

            class LocationsResource {
                /**
                 * Creates a new Location object.
                 * For further details, including which address fields are required in each country, see the [Manage locations](https://docs.epayments.network/terminal/fleet/locations) guide.
                 */
                create(
                    params: LocationCreateParams,
                    options?: RequestOptions
                ): Promise<
                    ExpressPayments.Response<ExpressPayments.Terminal.Location>
                >;

                /**
                 * Retrieves a Location object.
                 */
                retrieve(
                    id: string,
                    params?: LocationRetrieveParams,
                    options?: RequestOptions
                ): Promise<
                    ExpressPayments.Response<
                        | ExpressPayments.Terminal.Location
                        | ExpressPayments.Terminal.DeletedLocation
                    >
                >;
                retrieve(
                    id: string,
                    options?: RequestOptions
                ): Promise<
                    ExpressPayments.Response<
                        | ExpressPayments.Terminal.Location
                        | ExpressPayments.Terminal.DeletedLocation
                    >
                >;

                /**
                 * Updates a Location object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
                 */
                update(
                    id: string,
                    params?: LocationUpdateParams,
                    options?: RequestOptions
                ): Promise<
                    ExpressPayments.Response<
                        | ExpressPayments.Terminal.Location
                        | ExpressPayments.Terminal.DeletedLocation
                    >
                >;

                /**
                 * Returns a list of Location objects.
                 */
                list(
                    params?: LocationListParams,
                    options?: RequestOptions
                ): ApiListPromise<ExpressPayments.Terminal.Location>;
                list(
                    options?: RequestOptions
                ): ApiListPromise<ExpressPayments.Terminal.Location>;

                /**
                 * Deletes a Location object.
                 */
                del(
                    id: string,
                    params?: LocationDeleteParams,
                    options?: RequestOptions
                ): Promise<
                    ExpressPayments.Response<
                        ExpressPayments.Terminal.DeletedLocation
                    >
                >;
                del(
                    id: string,
                    options?: RequestOptions
                ): Promise<
                    ExpressPayments.Response<
                        ExpressPayments.Terminal.DeletedLocation
                    >
                >;
            }
        }
    }
}
