// File generated from our OpenAPI spec

declare module 'expresspayments' {
    namespace ExpressPayments {
        /**
         * The Application object.
         */
        interface Application {
            /**
             * Unique identifier for the object.
             */
            id: string;

            /**
             * String representing the object's type. Objects of the same type share the same value.
             */
            object: 'application';

            deleted?: void;

            /**
             * The name of the application.
             */
            name: string | null;
        }

        /**
         * The DeletedApplication object.
         */
        interface DeletedApplication {
            /**
             * Unique identifier for the object.
             */
            id: string;

            /**
             * String representing the object's type. Objects of the same type share the same value.
             */
            object: 'application';

            /**
             * Always true for a deleted object
             */
            deleted: true;

            /**
             * The name of the application.
             */
            name: string | null;
        }
    }
}
