// File generated from our OpenAPI spec

declare module 'expressplatby' {
    namespace ExpressPlatby {
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
                    ExpressPlatby.Response<
                        ExpressPlatby.Sigma.ScheduledQueryRun
                    >
                >;
                retrieve(
                    id: string,
                    options?: RequestOptions
                ): Promise<
                    ExpressPlatby.Response<
                        ExpressPlatby.Sigma.ScheduledQueryRun
                    >
                >;

                /**
                 * Returns a list of scheduled query runs.
                 */
                list(
                    params?: ScheduledQueryRunListParams,
                    options?: RequestOptions
                ): ApiListPromise<ExpressPlatby.Sigma.ScheduledQueryRun>;
                list(
                    options?: RequestOptions
                ): ApiListPromise<ExpressPlatby.Sigma.ScheduledQueryRun>;
            }
        }
    }
}
