// File generated from our OpenAPI spec

declare module 'expresspayments' {
    namespace ExpressPayments {
        /**
         * To share the contents of a `File` object with non-ExpressPayments users, you can
         * create a `FileLink`. `FileLink`s contain a URL that can be used to
         * retrieve the contents of the file without authentication.
         */
        interface FileLink {
            /**
             * Unique identifier for the object.
             */
            id: string;

            /**
             * String representing the object's type. Objects of the same type share the same value.
             */
            object: 'file_link';

            /**
             * Time at which the object was created. Measured in seconds since the Unix epoch.
             */
            created: number;

            /**
             * Whether this link is already expired.
             */
            expired: boolean;

            /**
             * Time at which the link expires.
             */
            expires_at: number | null;

            /**
             * The file object this link points to.
             */
            file: string | ExpressPayments.File;

            /**
             * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
             */
            livemode: boolean;

            /**
             * Set of [key-value pairs](https://docs.epayments.network/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
             */
            metadata: ExpressPayments.Metadata;

            /**
             * The publicly accessible URL to download the file.
             */
            url: string | null;
        }
    }
}
