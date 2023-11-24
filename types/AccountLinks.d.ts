// File generated from our OpenAPI spec

declare module 'expresspayments' {
    namespace ExpressPayments {
        /**
         * Account Links are the means by which a Connect platform grants a connected account permission to access
         * ExpressPayments-hosted applications, such as Connect Onboarding.
         *
         * Related guide: [Connect Onboarding](https://docs.epayments.network/connect/connect-onboarding)
         */
        interface AccountLink {
            /**
             * String representing the object's type. Objects of the same type share the same value.
             */
            object: 'account_link';

            /**
             * Time at which the object was created. Measured in seconds since the Unix epoch.
             */
            created: number;

            /**
             * The timestamp at which this account link will expire.
             */
            expires_at: number;

            /**
             * The URL for the account link.
             */
            url: string;
        }
    }
}
