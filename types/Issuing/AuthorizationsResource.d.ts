// File generated from our OpenAPI spec

declare module 'expresspayments' {
    namespace ExpressPayments {
        namespace Issuing {
            interface AuthorizationRetrieveParams {
                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;
            }

            interface AuthorizationUpdateParams {
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

            interface AuthorizationListParams extends PaginationParams {
                /**
                 * Only return authorizations that belong to the given card.
                 */
                card?: string;

                /**
                 * Only return authorizations that belong to the given cardholder.
                 */
                cardholder?: string;

                /**
                 * Only return authorizations that were created during the given date interval.
                 */
                created?: ExpressPayments.RangeQueryParam | number;

                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;

                /**
                 * Only return authorizations with the given status. One of `pending`, `closed`, or `reversed`.
                 */
                status?: AuthorizationListParams.Status;
            }

            namespace AuthorizationListParams {
                type Status = 'closed' | 'pending' | 'reversed';
            }

            interface AuthorizationApproveParams {
                /**
                 * If the authorization's `pending_request.is_amount_controllable` property is `true`, you may provide this value to control how much to hold for the authorization. Must be positive (use [`decline`](https://docs.epayments.network/api/issuing/authorizations/decline) to decline an authorization request).
                 */
                amount?: number;

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

            interface AuthorizationDeclineParams {
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

            class AuthorizationsResource {
                /**
                 * Retrieves an Issuing Authorization object.
                 */
                retrieve(
                    id: string,
                    params?: AuthorizationRetrieveParams,
                    options?: RequestOptions
                ): Promise<
                    ExpressPayments.Response<
                        ExpressPayments.Issuing.Authorization
                    >
                >;
                retrieve(
                    id: string,
                    options?: RequestOptions
                ): Promise<
                    ExpressPayments.Response<
                        ExpressPayments.Issuing.Authorization
                    >
                >;

                /**
                 * Updates the specified Issuing Authorization object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
                 */
                update(
                    id: string,
                    params?: AuthorizationUpdateParams,
                    options?: RequestOptions
                ): Promise<
                    ExpressPayments.Response<
                        ExpressPayments.Issuing.Authorization
                    >
                >;

                /**
                 * Returns a list of Issuing Authorization objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
                 */
                list(
                    params?: AuthorizationListParams,
                    options?: RequestOptions
                ): ApiListPromise<ExpressPayments.Issuing.Authorization>;
                list(
                    options?: RequestOptions
                ): ApiListPromise<ExpressPayments.Issuing.Authorization>;

                /**
                 * Approves a pending Issuing Authorization object. This request should be made within the timeout window of the [real-time authorization](https://docs.epayments.network/issuing/controls/real-time-authorizations) flow.
                 * You can also respond directly to the webhook request to approve an authorization (preferred). More details can be found [here](https://docs.epayments.network/issuing/controls/real-time-authorizations#authorization-handling).
                 */
                approve(
                    id: string,
                    params?: AuthorizationApproveParams,
                    options?: RequestOptions
                ): Promise<
                    ExpressPayments.Response<
                        ExpressPayments.Issuing.Authorization
                    >
                >;
                approve(
                    id: string,
                    options?: RequestOptions
                ): Promise<
                    ExpressPayments.Response<
                        ExpressPayments.Issuing.Authorization
                    >
                >;

                /**
                 * Declines a pending Issuing Authorization object. This request should be made within the timeout window of the [real time authorization](https://docs.epayments.network/issuing/controls/real-time-authorizations) flow.
                 * You can also respond directly to the webhook request to decline an authorization (preferred). More details can be found [here](https://docs.epayments.network/issuing/controls/real-time-authorizations#authorization-handling).
                 */
                decline(
                    id: string,
                    params?: AuthorizationDeclineParams,
                    options?: RequestOptions
                ): Promise<
                    ExpressPayments.Response<
                        ExpressPayments.Issuing.Authorization
                    >
                >;
                decline(
                    id: string,
                    options?: RequestOptions
                ): Promise<
                    ExpressPayments.Response<
                        ExpressPayments.Issuing.Authorization
                    >
                >;
            }
        }
    }
}
