// File generated from our OpenAPI spec

declare module 'expressplatby' {
    namespace ExpressPlatby {
        /**
         * The EphemeralKey object.
         */
        interface EphemeralKey {
            /**
             * Unique identifier for the object.
             */
            id: string;

            /**
             * String representing the object's type. Objects of the same type share the same value.
             */
            object: 'ephemeral_key';

            /**
             * Time at which the object was created. Measured in seconds since the Unix epoch.
             */
            created: number;

            /**
             * Time at which the key will expire. Measured in seconds since the Unix epoch.
             */
            expires: number;

            /**
             * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
             */
            livemode: boolean;

            /**
             * The key's secret. You can use this value to make authorized requests to the ExpressPlatby API.
             */
            secret?: string;
        }
    }
}
