// File generated from our OpenAPI spec

declare module 'expresspayments' {
    namespace ExpressPayments {
        namespace TestHelpers {
            interface RefundExpireParams {
                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;
            }

            class RefundsResource {
                /**
                 * Expire a refund with a status of requires_action.
                 */
                expire(
                    id: string,
                    params?: RefundExpireParams,
                    options?: RequestOptions
                ): Promise<ExpressPayments.Response<ExpressPayments.Refund>>;
                expire(
                    id: string,
                    options?: RequestOptions
                ): Promise<ExpressPayments.Response<ExpressPayments.Refund>>;
            }
        }
    }
}
