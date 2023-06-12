// File generated from our OpenAPI spec

declare module 'expressplatby' {
    namespace ExpressPlatby {
        namespace Terminal {
            /**
             * A Connection Token is used by the ExpressPlatby Terminal SDK to connect to a reader.
             *
             * Related guide: [Fleet management](https://expressplatby.cz/docs/terminal/fleet/locations)
             */
            interface ConnectionToken {
                /**
                 * String representing the object's type. Objects of the same type share the same value.
                 */
                object: 'terminal.connection_token';

                /**
                 * The id of the location that this connection token is scoped to. Note that location scoping only applies to internet-connected readers. For more details, see [the docs on scoping connection tokens](https://expressplatby.cz/docs/terminal/fleet/locations#connection-tokens).
                 */
                location?: string;

                /**
                 * Your application should pass this token to the ExpressPlatby Terminal SDK.
                 */
                secret: string;
            }
        }
    }
}
