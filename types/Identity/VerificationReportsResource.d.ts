// File generated from our OpenAPI spec

declare module 'expresspayments' {
    namespace ExpressPayments {
        namespace Identity {
            interface VerificationReportRetrieveParams {
                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;
            }

            interface VerificationReportListParams extends PaginationParams {
                created?: ExpressPayments.RangeQueryParam | number;

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
                    ExpressPayments.Response<
                        ExpressPayments.Identity.VerificationReport
                    >
                >;
                retrieve(
                    id: string,
                    options?: RequestOptions
                ): Promise<
                    ExpressPayments.Response<
                        ExpressPayments.Identity.VerificationReport
                    >
                >;

                /**
                 * List all verification reports.
                 */
                list(
                    params?: VerificationReportListParams,
                    options?: RequestOptions
                ): ApiListPromise<ExpressPayments.Identity.VerificationReport>;
                list(
                    options?: RequestOptions
                ): ApiListPromise<ExpressPayments.Identity.VerificationReport>;
            }
        }
    }
}
