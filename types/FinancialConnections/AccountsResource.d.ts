// File generated from our OpenAPI spec

declare module 'expresspayments' {
    namespace ExpressPayments {
        namespace FinancialConnections {
            interface AccountRetrieveParams {
                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;
            }

            interface AccountListParams extends PaginationParams {
                /**
                 * If present, only return accounts that belong to the specified account holder. `account_holder[customer]` and `account_holder[account]` are mutually exclusive.
                 */
                account_holder?: AccountListParams.AccountHolder;

                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;

                /**
                 * If present, only return accounts that were collected as part of the given session.
                 */
                session?: string;
            }

            namespace AccountListParams {
                interface AccountHolder {
                    /**
                     * The ID of the ExpressPayments account whose accounts will be retrieved.
                     */
                    account?: string;

                    /**
                     * The ID of the ExpressPayments customer whose accounts will be retrieved.
                     */
                    customer?: string;
                }
            }

            interface AccountDisconnectParams {
                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;
            }

            interface AccountListOwnersParams extends PaginationParams {
                /**
                 * The ID of the ownership object to fetch owners from.
                 */
                ownership: string;

                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;
            }

            interface AccountRefreshParams {
                /**
                 * The list of account features that you would like to refresh.
                 */
                features: Array<AccountRefreshParams.Feature>;

                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;
            }

            namespace AccountRefreshParams {
                type Feature = 'balance' | 'ownership';
            }

            class AccountsResource {
                /**
                 * Retrieves the details of an Financial Connections Account.
                 */
                retrieve(
                    id: string,
                    params?: AccountRetrieveParams,
                    options?: RequestOptions
                ): Promise<
                    ExpressPayments.Response<
                        ExpressPayments.FinancialConnections.Account
                    >
                >;
                retrieve(
                    id: string,
                    options?: RequestOptions
                ): Promise<
                    ExpressPayments.Response<
                        ExpressPayments.FinancialConnections.Account
                    >
                >;

                /**
                 * Returns a list of Financial Connections Account objects.
                 */
                list(
                    params?: AccountListParams,
                    options?: RequestOptions
                ): ApiListPromise<ExpressPayments.FinancialConnections.Account>;
                list(
                    options?: RequestOptions
                ): ApiListPromise<ExpressPayments.FinancialConnections.Account>;

                /**
                 * Disables your access to a Financial Connections Account. You will no longer be able to access data associated with the account (e.g. balances, transactions).
                 */
                disconnect(
                    id: string,
                    params?: AccountDisconnectParams,
                    options?: RequestOptions
                ): Promise<
                    ExpressPayments.Response<
                        ExpressPayments.FinancialConnections.Account
                    >
                >;
                disconnect(
                    id: string,
                    options?: RequestOptions
                ): Promise<
                    ExpressPayments.Response<
                        ExpressPayments.FinancialConnections.Account
                    >
                >;

                /**
                 * Lists all owners for a given Account
                 */
                listOwners(
                    id: string,
                    params: AccountListOwnersParams,
                    options?: RequestOptions
                ): ApiListPromise<
                    ExpressPayments.FinancialConnections.AccountOwner
                >;

                /**
                 * Refreshes the data associated with a Financial Connections Account.
                 */
                refresh(
                    id: string,
                    params: AccountRefreshParams,
                    options?: RequestOptions
                ): Promise<
                    ExpressPayments.Response<
                        ExpressPayments.FinancialConnections.Account
                    >
                >;
            }
        }
    }
}
