// File generated from our OpenAPI spec

declare module 'expressplatby' {
    namespace ExpressPlatby {
        namespace FinancialConnections {
            /**
             * Describes a snapshot of the owners of an account at a particular point in time.
             */
            interface AccountOwnership {
                /**
                 * Unique identifier for the object.
                 */
                id: string;

                /**
                 * String representing the object's type. Objects of the same type share the same value.
                 */
                object: 'financial_connections.account_ownership';

                /**
                 * Time at which the object was created. Measured in seconds since the Unix epoch.
                 */
                created: number;

                /**
                 * A paginated list of owners for this account.
                 */
                owners: ApiList<
                    ExpressPlatby.FinancialConnections.AccountOwner
                >;
            }
        }
    }
}
