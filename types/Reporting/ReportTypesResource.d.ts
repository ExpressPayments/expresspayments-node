// File generated from our OpenAPI spec

declare module 'expresspayments' {
    namespace ExpressPayments {
        namespace Reporting {
            interface ReportTypeRetrieveParams {
                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;
            }

            interface ReportTypeListParams {
                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;
            }

            class ReportTypesResource {
                /**
                 * Retrieves the details of a Report Type. (Certain report types require a [live-mode API key](https://docs.epayments.network/keys#test-live-modes).)
                 */
                retrieve(
                    id: string,
                    params?: ReportTypeRetrieveParams,
                    options?: RequestOptions
                ): Promise<
                  ExpressPayments.Response<ExpressPayments.Reporting.ReportType>
                >;
                retrieve(
                    id: string,
                    options?: RequestOptions
                ): Promise<
                  ExpressPayments.Response<ExpressPayments.Reporting.ReportType>
                >;

                /**
                 * Returns a full list of Report Types.
                 */
                list(
                    params?: ReportTypeListParams,
                    options?: RequestOptions
                ): ApiListPromise<ExpressPayments.Reporting.ReportType>;
                list(
                    options?: RequestOptions
                ): ApiListPromise<ExpressPayments.Reporting.ReportType>;
            }
        }
    }
}
