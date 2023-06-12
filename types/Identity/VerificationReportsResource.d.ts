// File generated from our OpenAPI spec

declare module 'expressplatby' {
    namespace ExpressPlatby {
        namespace Identity {
            interface VerificationReportRetrieveParams {
                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;
            }

            interface VerificationReportListParams extends PaginationParams {
                created?: ExpressPlatby.RangeQueryParam | number;

                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;

                /**
                 * Only return VerificationReports of this type
                 */
                type?: VerificationReportListParams.Type;

                /**
                 * Only return VerificationReports created by this VerificationSession ID. It is allowed to provide a VerificationIntent ID.
                 */
                verification_session?: string;
            }

            namespace VerificationReportListParams {
                type Type = 'document' | 'id_number';
            }

            class VerificationReportsResource {
                /**
                 * Retrieves an existing VerificationReport
                 */
                retrieve(
                    id: string,
                    params?: VerificationReportRetrieveParams,
                    options?: RequestOptions
                ): Promise<
                    ExpressPlatby.Response<
                        ExpressPlatby.Identity.VerificationReport
                    >
                >;
                retrieve(
                    id: string,
                    options?: RequestOptions
                ): Promise<
                    ExpressPlatby.Response<
                        ExpressPlatby.Identity.VerificationReport
                    >
                >;

                /**
                 * List all verification reports.
                 */
                list(
                    params?: VerificationReportListParams,
                    options?: RequestOptions
                ): ApiListPromise<ExpressPlatby.Identity.VerificationReport>;
                list(
                    options?: RequestOptions
                ): ApiListPromise<ExpressPlatby.Identity.VerificationReport>;
            }
        }
    }
}
