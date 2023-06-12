// File generated from our OpenAPI spec

declare module 'expressplatby' {
    namespace ExpressPlatby {
        interface ApplePayDomainCreateParams {
            domain_name: string;

            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }

        interface ApplePayDomainRetrieveParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }

        interface ApplePayDomainListParams extends PaginationParams {
            domain_name?: string;

            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }

        interface ApplePayDomainDeleteParams {}

        class ApplePayDomainsResource {
            /**
             * Create an apple pay domain.
             */
            create(
                params: ApplePayDomainCreateParams,
                options?: RequestOptions
            ): Promise<ExpressPlatby.Response<ExpressPlatby.ApplePayDomain>>;

            /**
             * Retrieve an apple pay domain.
             */
            retrieve(
                id: string,
                params?: ApplePayDomainRetrieveParams,
                options?: RequestOptions
            ): Promise<ExpressPlatby.Response<ExpressPlatby.ApplePayDomain>>;
            retrieve(
                id: string,
                options?: RequestOptions
            ): Promise<ExpressPlatby.Response<ExpressPlatby.ApplePayDomain>>;

            /**
             * List apple pay domains.
             */
            list(
                params?: ApplePayDomainListParams,
                options?: RequestOptions
            ): ApiListPromise<ExpressPlatby.ApplePayDomain>;
            list(
                options?: RequestOptions
            ): ApiListPromise<ExpressPlatby.ApplePayDomain>;

            /**
             * Delete an apple pay domain.
             */
            del(
                id: string,
                params?: ApplePayDomainDeleteParams,
                options?: RequestOptions
            ): Promise<
                ExpressPlatby.Response<ExpressPlatby.DeletedApplePayDomain>
            >;
            del(
                id: string,
                options?: RequestOptions
            ): Promise<
                ExpressPlatby.Response<ExpressPlatby.DeletedApplePayDomain>
            >;
        }
    }
}
