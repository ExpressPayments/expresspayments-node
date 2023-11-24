// File generated from our OpenAPI spec

declare module 'expresspayments' {
    namespace ExpressPayments {
        namespace Sigma {
            interface ScheduledQueryRunRetrieveParams {
                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;
            }

            interface ScheduledQueryRunListParams extends PaginationParams {
                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;
            }

            class ScheduledQueryRunsResource {
                /**
                 * Retrieves the details of an scheduled query run.
                 */
                retrieve(
                    id: string,
                    params?: ScheduledQueryRunRetrieveParams,
                    options?: RequestOptions
                ): Promise<
                  ExpressPayments.Response<
                        ExpressPayments.Sigma.ScheduledQueryRun
                    >
                >;
                retrieve(
                    id: string,
                    options?: RequestOptions
                ): Promise<
                    ExpressPayments.Response<
                        ExpressPayments.Sigma.ScheduledQueryRun
                    >
                >;

                /**
                 * Returns a list of scheduled query runs.
                 */
                list(
                    params?: ScheduledQueryRunListParams,
                    options?: RequestOptions
                ): ApiListPromise<ExpressPayments.Sigma.ScheduledQueryRun>;
                list(
                    options?: RequestOptions
                ): ApiListPromise<ExpressPayments.Sigma.ScheduledQueryRun>;
            }
        }
    }
}
