// File generated from our OpenAPI spec

declare module 'expresspayments' {
    namespace ExpressPayments {
        /**
         * Login Links are single-use login link for an Express account to access their ExpressPayments dashboard.
         */
        interface LoginLink {
            /**
             * String representing the object's type. Objects of the same type share the same value.
             */
            object: 'login_link';

            /**
             * Time at which the object was created. Measured in seconds since the Unix epoch.
             */
            created: number;

            /**
             * The URL for the login link.
             */
            url: string;
        }
    }
}
