// File generated from our OpenAPI spec

declare module 'expressplatby' {
    namespace ExpressPlatby {
        interface BalanceRetrieveParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }

        class BalanceResource {
            /**
             * Retrieves the current account balance, based on the authentication that was used to make the request.
             *  For a sample request, see [Accounting for negative balances](https://expressplatby.cz/docs/connect/account-balances#accounting-for-negative-balances).
             */
            retrieve(
                params?: BalanceRetrieveParams,
                options?: RequestOptions
            ): Promise<ExpressPlatby.Response<ExpressPlatby.Balance>>;
            retrieve(
                options?: RequestOptions
            ): Promise<ExpressPlatby.Response<ExpressPlatby.Balance>>;
        }
    }
}
