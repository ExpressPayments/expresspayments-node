// File generated from our OpenAPI spec

declare module 'expressplatby' {
    namespace ExpressPlatby {
        interface MandateRetrieveParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }

        class MandatesResource {
            /**
             * Retrieves a Mandate object.
             */
            retrieve(
                id: string,
                params?: MandateRetrieveParams,
                options?: RequestOptions
            ): Promise<ExpressPlatby.Response<ExpressPlatby.Mandate>>;
            retrieve(
                id: string,
                options?: RequestOptions
            ): Promise<ExpressPlatby.Response<ExpressPlatby.Mandate>>;
        }
    }
}
