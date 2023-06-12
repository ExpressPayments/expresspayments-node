// File generated from our OpenAPI spec

declare module 'expressplatby' {
    namespace ExpressPlatby {
        namespace Terminal {
            interface ConnectionTokenCreateParams {
                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;

                /**
                 * The id of the location that this connection token is scoped to. If specified the connection token will only be usable with readers assigned to that location, otherwise the connection token will be usable with all readers. Note that location scoping only applies to internet-connected readers. For more details, see [the docs on scoping connection tokens](https://expressplatby.cz/docs/terminal/fleet/locations#connection-tokens).
                 */
                location?: string;
            }

            class ConnectionTokensResource {
                /**
                 * To connect to a reader the ExpressPlatby Terminal SDK needs to retrieve a short-lived connection token from ExpressPlatby, proxied through your server. On your backend, add an endpoint that creates and returns a connection token.
                 */
                create(
                    params?: ConnectionTokenCreateParams,
                    options?: RequestOptions
                ): Promise<
                    ExpressPlatby.Response<
                        ExpressPlatby.Terminal.ConnectionToken
                    >
                >;
                create(
                    options?: RequestOptions
                ): Promise<
                    ExpressPlatby.Response<
                        ExpressPlatby.Terminal.ConnectionToken
                    >
                >;
            }
        }
    }
}
