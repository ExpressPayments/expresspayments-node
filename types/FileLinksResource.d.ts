// File generated from our OpenAPI spec

declare module 'expressplatby' {
    namespace ExpressPlatby {
        interface FileLinkCreateParams {
            /**
             * The ID of the file. The file's `purpose` must be one of the following: `business_icon`, `business_logo`, `customer_signature`, `dispute_evidence`, `finance_report_run`, `identity_document_downloadable`, `pci_document`, `selfie`, `sigma_scheduled_query`, `tax_document_user_upload`, or `terminal_reader_splashscreen`.
             */
            file: string;

            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;

            /**
             * A future timestamp after which the link will no longer be usable.
             */
            expires_at?: number;

            /**
             * Set of [key-value pairs](https://expressplatby.cz/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
             */
            metadata?: ExpressPlatby.Emptyable<ExpressPlatby.MetadataParam>;
        }

        interface FileLinkRetrieveParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }

        interface FileLinkUpdateParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;

            /**
             * A future timestamp after which the link will no longer be usable, or `now` to expire the link immediately.
             */
            expires_at?: ExpressPlatby.Emptyable<'now' | number>;

            /**
             * Set of [key-value pairs](https://expressplatby.cz/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
             */
            metadata?: ExpressPlatby.Emptyable<ExpressPlatby.MetadataParam>;
        }

        interface FileLinkListParams extends PaginationParams {
            created?: ExpressPlatby.RangeQueryParam | number;

            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;

            /**
             * Filter links by their expiration status. By default, all links are returned.
             */
            expired?: boolean;

            /**
             * Only return links for the given file.
             */
            file?: string;
        }

        class FileLinksResource {
            /**
             * Creates a new file link object.
             */
            create(
                params: FileLinkCreateParams,
                options?: RequestOptions
            ): Promise<ExpressPlatby.Response<ExpressPlatby.FileLink>>;

            /**
             * Retrieves the file link with the given ID.
             */
            retrieve(
                id: string,
                params?: FileLinkRetrieveParams,
                options?: RequestOptions
            ): Promise<ExpressPlatby.Response<ExpressPlatby.FileLink>>;
            retrieve(
                id: string,
                options?: RequestOptions
            ): Promise<ExpressPlatby.Response<ExpressPlatby.FileLink>>;

            /**
             * Updates an existing file link object. Expired links can no longer be updated.
             */
            update(
                id: string,
                params?: FileLinkUpdateParams,
                options?: RequestOptions
            ): Promise<ExpressPlatby.Response<ExpressPlatby.FileLink>>;

            /**
             * Returns a list of file links.
             */
            list(
                params?: FileLinkListParams,
                options?: RequestOptions
            ): ApiListPromise<ExpressPlatby.FileLink>;
            list(
                options?: RequestOptions
            ): ApiListPromise<ExpressPlatby.FileLink>;
        }
    }
}
