// File generated from our OpenAPI spec

declare module 'expresspayments' {
    namespace ExpressPayments {
        interface FileCreateParams {
            /**
             * A file to upload. The file should follow the specifications of RFC 2388 (which defines file transfers for the `multipart/form-data` protocol).
             */
            file: FileData;

            /**
             * The [purpose](https://docs.epayments.network/file-upload#uploading-a-file) of the uploaded file.
             */
            purpose: FileCreateParams.Purpose;

            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;

            /**
             * Optional parameters to automatically create a [file link](https://docs.epayments.network/api#file_links) for the newly created file.
             */
            file_link_data?: FileCreateParams.FileLinkData;
        }

        namespace FileCreateParams {
            interface FileLinkData {
                /**
                 * Set this to `true` to create a file link for the newly created file. Creating a link is only possible when the file's `purpose` is one of the following: `business_icon`, `business_logo`, `customer_signature`, `dispute_evidence`, `pci_document`, `tax_document_user_upload`, or `terminal_reader_splashscreen`.
                 */
                create: boolean;

                /**
                 * A future timestamp after which the link will no longer be usable.
                 */
                expires_at?: number;

                /**
                 * Set of [key-value pairs](https://docs.epayments.network/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
                 */
                metadata?: ExpressPayments.Emptyable<
                    ExpressPayments.MetadataParam
                >;
            }

            type Purpose =
                | 'account_requirement'
                | 'additional_verification'
                | 'business_icon'
                | 'business_logo'
                | 'customer_signature'
                | 'dispute_evidence'
                | 'identity_document'
                | 'pci_document'
                | 'tax_document_user_upload'
                | 'terminal_reader_splashscreen';
        }

        interface FileRetrieveParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }

        interface FileListParams extends PaginationParams {
            created?: ExpressPayments.RangeQueryParam | number;

            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;

            /**
             * The file purpose to filter queries by. If none is provided, files will not be filtered by purpose.
             */
            purpose?: FileListParams.Purpose;
        }

        namespace FileListParams {
            type Purpose =
                | 'account_requirement'
                | 'additional_verification'
                | 'business_icon'
                | 'business_logo'
                | 'customer_signature'
                | 'dispute_evidence'
                | 'document_provider_identity_document'
                | 'finance_report_run'
                | 'identity_document'
                | 'identity_document_downloadable'
                | 'pci_document'
                | 'selfie'
                | 'sigma_scheduled_query'
                | 'tax_document_user_upload'
                | 'terminal_reader_splashscreen';
        }

        class FilesResource {
            /**
             * To upload a file to ExpressPayments, you'll need to send a request of type multipart/form-data. The request should contain the file you would like to upload, as well as the parameters for creating a file.
             *
             * All of ExpressPayments' officially supported Client libraries should have support for sending multipart/form-data.
             */
            create(
                params: FileCreateParams,
                options?: RequestOptions
            ): Promise<ExpressPayments.Response<ExpressPayments.File>>;

            /**
             * Retrieves the details of an existing file object. Supply the unique file ID from a file, and ExpressPayments will return the corresponding file object. To access file contents, see the [File Upload Guide](https://docs.epayments.network/file-upload#download-file-contents).
             */
            retrieve(
                id: string,
                params?: FileRetrieveParams,
                options?: RequestOptions
            ): Promise<ExpressPayments.Response<ExpressPayments.File>>;
            retrieve(
                id: string,
                options?: RequestOptions
            ): Promise<ExpressPayments.Response<ExpressPayments.File>>;

            /**
             * Returns a list of the files that your account has access to. The files are returned sorted by creation date, with the most recently created files appearing first.
             */
            list(
                params?: FileListParams,
                options?: RequestOptions
            ): ApiListPromise<ExpressPayments.File>;
            list(options?: RequestOptions): ApiListPromise<ExpressPayments.File>;
        }
    }
}
