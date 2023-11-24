// File generated from our OpenAPI spec

declare module 'expresspayments' {
    namespace ExpressPayments {
        namespace Radar {
            interface EarlyFraudWarningRetrieveParams {
                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;
            }

            interface EarlyFraudWarningListParams extends PaginationParams {
                /**
                 * Only return early fraud warnings for the charge specified by this charge ID.
                 */
                charge?: string;

                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;

                /**
                 * Only return early fraud warnings for charges that were created by the PaymentIntent specified by this PaymentIntent ID.
                 */
                payment_intent?: string;
            }

            class EarlyFraudWarningsResource {
                /**
                 * Retrieves the details of an early fraud warning that has previously been created.
                 *
                 * Please refer to the [early fraud warning](https://docs.epayments.network/api#early_fraud_warning_object) object reference for more details.
                 */
                retrieve(
                    id: string,
                    params?: EarlyFraudWarningRetrieveParams,
                    options?: RequestOptions
                ): Promise<
                    ExpressPayments.Response<
                        ExpressPayments.Radar.EarlyFraudWarning
                    >
                >;
                retrieve(
                    id: string,
                    options?: RequestOptions
                ): Promise<
                    ExpressPayments.Response<
                        ExpressPayments.Radar.EarlyFraudWarning
                    >
                >;

                /**
                 * Returns a list of early fraud warnings.
                 */
                list(
                    params?: EarlyFraudWarningListParams,
                    options?: RequestOptions
                ): ApiListPromise<ExpressPayments.Radar.EarlyFraudWarning>;
                list(
                    options?: RequestOptions
                ): ApiListPromise<ExpressPayments.Radar.EarlyFraudWarning>;
            }
        }
    }
}
