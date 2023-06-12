// File generated from our OpenAPI spec

declare module 'expressplatby' {
    namespace ExpressPlatby {
        namespace Identity {
            interface VerificationSessionCreateParams {
                /**
                 * The type of [verification check](https://expressplatby.cz/docs/identity/verification-checks) to be performed.
                 */
                type: VerificationSessionCreateParams.Type;

                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;

                /**
                 * Set of [key-value pairs](https://expressplatby.cz/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
                 */
                metadata?: ExpressPlatby.MetadataParam;

                /**
                 * A set of options for the session's verification checks.
                 */
                options?: VerificationSessionCreateParams.Options;

                /**
                 * The URL that the user will be redirected to upon completing the verification flow.
                 */
                return_url?: string;
            }

            namespace VerificationSessionCreateParams {
                interface Options {
                    /**
                     * Options that apply to the [document check](https://expressplatby.cz/docs/identity/verification-checks?type=document).
                     */
                    document?: ExpressPlatby.Emptyable<Options.Document>;
                }

                namespace Options {
                    interface Document {
                        /**
                         * Array of strings of allowed identity document types. If the provided identity document isn't one of the allowed types, the verification check will fail with a document_type_not_allowed error code.
                         */
                        allowed_types?: Array<Document.AllowedType>;

                        /**
                         * Collect an ID number and perform an [ID number check](https://expressplatby.cz/docs/identity/verification-checks?type=id-number) with the document's extracted name and date of birth.
                         */
                        require_id_number?: boolean;

                        /**
                         * Disable image uploads, identity document images have to be captured using the device's camera.
                         */
                        require_live_capture?: boolean;

                        /**
                         * Capture a face image and perform a [selfie check](https://expressplatby.cz/docs/identity/verification-checks?type=selfie) comparing a photo ID and a picture of your user's face. [Learn more](https://expressplatby.cz/docs/identity/selfie).
                         */
                        require_matching_selfie?: boolean;
                    }

                    namespace Document {
                        type AllowedType =
                            | 'driving_license'
                            | 'id_card'
                            | 'passport';
                    }
                }

                type Type = 'document' | 'id_number';
            }

            interface VerificationSessionRetrieveParams {
                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;
            }

            interface VerificationSessionUpdateParams {
                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;

                /**
                 * Set of [key-value pairs](https://expressplatby.cz/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
                 */
                metadata?: ExpressPlatby.MetadataParam;

                /**
                 * A set of options for the session's verification checks.
                 */
                options?: VerificationSessionUpdateParams.Options;

                /**
                 * The type of [verification check](https://expressplatby.cz/docs/identity/verification-checks) to be performed.
                 */
                type?: VerificationSessionUpdateParams.Type;
            }

            namespace VerificationSessionUpdateParams {
                interface Options {
                    /**
                     * Options that apply to the [document check](https://expressplatby.cz/docs/identity/verification-checks?type=document).
                     */
                    document?: ExpressPlatby.Emptyable<Options.Document>;
                }

                namespace Options {
                    interface Document {
                        /**
                         * Array of strings of allowed identity document types. If the provided identity document isn't one of the allowed types, the verification check will fail with a document_type_not_allowed error code.
                         */
                        allowed_types?: Array<Document.AllowedType>;

                        /**
                         * Collect an ID number and perform an [ID number check](https://expressplatby.cz/docs/identity/verification-checks?type=id-number) with the document's extracted name and date of birth.
                         */
                        require_id_number?: boolean;

                        /**
                         * Disable image uploads, identity document images have to be captured using the device's camera.
                         */
                        require_live_capture?: boolean;

                        /**
                         * Capture a face image and perform a [selfie check](https://expressplatby.cz/docs/identity/verification-checks?type=selfie) comparing a photo ID and a picture of your user's face. [Learn more](https://expressplatby.cz/docs/identity/selfie).
                         */
                        require_matching_selfie?: boolean;
                    }

                    namespace Document {
                        type AllowedType =
                            | 'driving_license'
                            | 'id_card'
                            | 'passport';
                    }
                }

                type Type = 'document' | 'id_number';
            }

            interface VerificationSessionListParams extends PaginationParams {
                created?: ExpressPlatby.RangeQueryParam | number;

                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;

                /**
                 * Only return VerificationSessions with this status. [Learn more about the lifecycle of sessions](https://expressplatby.cz/docs/identity/how-sessions-work).
                 */
                status?: VerificationSessionListParams.Status;
            }

            namespace VerificationSessionListParams {
                type Status =
                    | 'canceled'
                    | 'processing'
                    | 'requires_input'
                    | 'verified';
            }

            interface VerificationSessionCancelParams {
                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;
            }

            interface VerificationSessionRedactParams {
                /**
                 * Specifies which fields in the response should be expanded.
                 */
                expand?: Array<string>;
            }

            class VerificationSessionsResource {
                /**
                 * Creates a VerificationSession object.
                 *
                 * After the VerificationSession is created, display a verification modal using the session client_secret or send your users to the session's url.
                 *
                 * If your API key is in test mode, verification checks won't actually process, though everything else will occur as if in live mode.
                 *
                 * Related guide: [Verify your users' identity documents](https://expressplatby.cz/docs/identity/verify-identity-documents)
                 */
                create(
                    params: VerificationSessionCreateParams,
                    options?: RequestOptions
                ): Promise<
                    ExpressPlatby.Response<
                        ExpressPlatby.Identity.VerificationSession
                    >
                >;

                /**
                 * Retrieves the details of a VerificationSession that was previously created.
                 *
                 * When the session status is requires_input, you can use this method to retrieve a valid
                 * client_secret or url to allow re-submission.
                 */
                retrieve(
                    id: string,
                    params?: VerificationSessionRetrieveParams,
                    options?: RequestOptions
                ): Promise<
                    ExpressPlatby.Response<
                        ExpressPlatby.Identity.VerificationSession
                    >
                >;
                retrieve(
                    id: string,
                    options?: RequestOptions
                ): Promise<
                    ExpressPlatby.Response<
                        ExpressPlatby.Identity.VerificationSession
                    >
                >;

                /**
                 * Updates a VerificationSession object.
                 *
                 * When the session status is requires_input, you can use this method to update the
                 * verification check and options.
                 */
                update(
                    id: string,
                    params?: VerificationSessionUpdateParams,
                    options?: RequestOptions
                ): Promise<
                    ExpressPlatby.Response<
                        ExpressPlatby.Identity.VerificationSession
                    >
                >;

                /**
                 * Returns a list of VerificationSessions
                 */
                list(
                    params?: VerificationSessionListParams,
                    options?: RequestOptions
                ): ApiListPromise<ExpressPlatby.Identity.VerificationSession>;
                list(
                    options?: RequestOptions
                ): ApiListPromise<ExpressPlatby.Identity.VerificationSession>;

                /**
                 * A VerificationSession object can be canceled when it is in requires_input [status](https://expressplatby.cz/docs/identity/how-sessions-work).
                 *
                 * Once canceled, future submission attempts are disabled. This cannot be undone. [Learn more](https://expressplatby.cz/docs/identity/verification-sessions#cancel).
                 */
                cancel(
                    id: string,
                    params?: VerificationSessionCancelParams,
                    options?: RequestOptions
                ): Promise<
                    ExpressPlatby.Response<
                        ExpressPlatby.Identity.VerificationSession
                    >
                >;
                cancel(
                    id: string,
                    options?: RequestOptions
                ): Promise<
                    ExpressPlatby.Response<
                        ExpressPlatby.Identity.VerificationSession
                    >
                >;

                /**
                 * Redact a VerificationSession to remove all collected information from ExpressPlatby. This will redact
                 * the VerificationSession and all objects related to it, including VerificationReports, Events,
                 * request logs, etc.
                 *
                 * A VerificationSession object can be redacted when it is in requires_input or verified
                 * [status](https://expressplatby.cz/docs/identity/how-sessions-work). Redacting a VerificationSession in requires_action
                 * state will automatically cancel it.
                 *
                 * The redaction process may take up to four days. When the redaction process is in progress, the
                 * VerificationSession's redaction.status field will be set to processing; when the process is
                 * finished, it will change to redacted and an identity.verification_session.redacted event
                 * will be emitted.
                 *
                 * Redaction is irreversible. Redacted objects are still accessible in the ExpressPlatby API, but all the
                 * fields that contain personal data will be replaced by the string [redacted] or a similar
                 * placeholder. The metadata field will also be erased. Redacted objects cannot be updated or
                 * used for any purpose.
                 *
                 * [Learn more](https://expressplatby.cz/docs/identity/verification-sessions#redact).
                 */
                redact(
                    id: string,
                    params?: VerificationSessionRedactParams,
                    options?: RequestOptions
                ): Promise<
                    ExpressPlatby.Response<
                        ExpressPlatby.Identity.VerificationSession
                    >
                >;
                redact(
                    id: string,
                    options?: RequestOptions
                ): Promise<
                    ExpressPlatby.Response<
                        ExpressPlatby.Identity.VerificationSession
                    >
                >;
            }
        }
    }
}
