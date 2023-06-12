// File generated from our OpenAPI spec

declare module 'expressplatby' {
    namespace ExpressPlatby {
        interface ReviewRetrieveParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }

        interface ReviewListParams extends PaginationParams {
            created?: ExpressPlatby.RangeQueryParam | number;

            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }

        interface ReviewApproveParams {
            /**
             * Specifies which fields in the response should be expanded.
             */
            expand?: Array<string>;
        }

        class ReviewsResource {
            /**
             * Retrieves a Review object.
             */
            retrieve(
                id: string,
                params?: ReviewRetrieveParams,
                options?: RequestOptions
            ): Promise<ExpressPlatby.Response<ExpressPlatby.Review>>;
            retrieve(
                id: string,
                options?: RequestOptions
            ): Promise<ExpressPlatby.Response<ExpressPlatby.Review>>;

            /**
             * Returns a list of Review objects that have open set to true. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
             */
            list(
                params?: ReviewListParams,
                options?: RequestOptions
            ): ApiListPromise<ExpressPlatby.Review>;
            list(
                options?: RequestOptions
            ): ApiListPromise<ExpressPlatby.Review>;

            /**
             * Approves a Review object, closing it and removing it from the list of reviews.
             */
            approve(
                id: string,
                params?: ReviewApproveParams,
                options?: RequestOptions
            ): Promise<ExpressPlatby.Response<ExpressPlatby.Review>>;
            approve(
                id: string,
                options?: RequestOptions
            ): Promise<ExpressPlatby.Response<ExpressPlatby.Review>>;
        }
    }
}
