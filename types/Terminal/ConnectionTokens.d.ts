// File generated from our OpenAPI spec

declare module 'expresspayments' {
    namespace ExpressPayments {
        namespace Terminal {
            /**
             * A Connection Token is used by the ExpressPayments Terminal SDK to connect to a reader.
             *
             * Related guide: [Fleet management](https://docs.epayments.network/terminal/fleet/locations)
             */
            interface ConnectionToken {
                /**
                 * String representing the object's type. Objects of the same type share the same value.
                 */
                object: 'terminal.connection_token';

                /**
                 * The id of the location that this connection token is scoped to. Note that location scoping only applies to internet-connected readers. For more details, see [the docs on scoping connection tokens](https://docs.epayments.network/terminal/fleet/locations#connection-tokens).
                 */
                location?: string;

                /**
                 * Your application should pass this token to the ExpressPayments Terminal SDK.
                 */
                secret: string;
            }
        }
    }
}
