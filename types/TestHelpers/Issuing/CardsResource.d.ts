// File generated from our OpenAPI spec

declare module 'expresspayments' {
    namespace ExpressPayments {
        namespace TestHelpers {
            namespace Issuing {
                interface CardDeliverCardParams {
                    /**
                     * Specifies which fields in the response should be expanded.
                     */
                    expand?: Array<string>;
                }
            }

            namespace Issuing {
                interface CardFailCardParams {
                    /**
                     * Specifies which fields in the response should be expanded.
                     */
                    expand?: Array<string>;
                }
            }

            namespace Issuing {
                interface CardReturnCardParams {
                    /**
                     * Specifies which fields in the response should be expanded.
                     */
                    expand?: Array<string>;
                }
            }

            namespace Issuing {
                interface CardShipCardParams {
                    /**
                     * Specifies which fields in the response should be expanded.
                     */
                    expand?: Array<string>;
                }
            }

            namespace Issuing {
                class CardsResource {
                    /**
                     * Updates the shipping status of the specified Issuing Card object to delivered.
                     */
                    deliverCard(
                        id: string,
                        params?: CardDeliverCardParams,
                        options?: RequestOptions
                    ): Promise<
                        ExpressPayments.Response<ExpressPayments.Issuing.Card>
                    >;
                    deliverCard(
                        id: string,
                        options?: RequestOptions
                    ): Promise<
                        ExpressPayments.Response<ExpressPayments.Issuing.Card>
                    >;

                    /**
                     * Updates the shipping status of the specified Issuing Card object to failure.
                     */
                    failCard(
                        id: string,
                        params?: CardFailCardParams,
                        options?: RequestOptions
                    ): Promise<
                        ExpressPayments.Response<ExpressPayments.Issuing.Card>
                    >;
                    failCard(
                        id: string,
                        options?: RequestOptions
                    ): Promise<
                        ExpressPayments.Response<ExpressPayments.Issuing.Card>
                    >;

                    /**
                     * Updates the shipping status of the specified Issuing Card object to returned.
                     */
                    returnCard(
                        id: string,
                        params?: CardReturnCardParams,
                        options?: RequestOptions
                    ): Promise<
                        ExpressPayments.Response<ExpressPayments.Issuing.Card>
                    >;
                    returnCard(
                        id: string,
                        options?: RequestOptions
                    ): Promise<
                        ExpressPayments.Response<ExpressPayments.Issuing.Card>
                    >;

                    /**
                     * Updates the shipping status of the specified Issuing Card object to shipped.
                     */
                    shipCard(
                        id: string,
                        params?: CardShipCardParams,
                        options?: RequestOptions
                    ): Promise<
                        ExpressPayments.Response<ExpressPayments.Issuing.Card>
                    >;
                    shipCard(
                        id: string,
                        options?: RequestOptions
                    ): Promise<
                        ExpressPayments.Response<ExpressPayments.Issuing.Card>
                    >;
                }
            }
        }
    }
}
