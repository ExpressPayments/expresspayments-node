// File generated from our OpenAPI spec

'use strict';

const testUtils = require('../testUtils.js');
const expressPayments = testUtils.getExpressPaymentsMockClient();
const expect = require('chai').expect;

describe('Accounts', function() {
    it('listExternalAccounts method', async function() {
        const externalAccount = await expressPayments.accounts.listExternalAccounts(
            'acct_xxxxxxxxxxxxx',
            {
                limit: 3,
            }
        );
        expect(externalAccount).not.to.be.null;
    });

    it('list method', async function() {
        const accounts = await expressPayments.accounts.list({
            limit: 3,
        });
        expect(accounts).not.to.be.null;
    });

    it('create method', async function() {
        const account = await expressPayments.accounts.create({
            type: 'custom',
            country: 'US',
            email: 'martin.najemi@example.com',
            capabilities: {
                card_payments: {
                    requested: true,
                },
                transfers: {
                    requested: true,
                },
            },
        });
        expect(account).not.to.be.null;
    });

    it('del method', async function() {
        const deleted = await expressPayments.accounts.del(
            'acct_xxxxxxxxxxxxx'
        );
        expect(deleted).not.to.be.null;
    });

    it('retrieve method', async function() {
        const account = await expressPayments.accounts.retrieve(
            'acct_xxxxxxxxxxxxx'
        );
        expect(account).not.to.be.null;
    });

    it('update method', async function() {
        const account = await expressPayments.accounts.update(
            'acct_xxxxxxxxxxxxx',
            {
                metadata: {
                    order_id: '6735',
                },
            }
        );
        expect(account).not.to.be.null;
    });

    it('reject method', async function() {
        const account = await expressPayments.accounts.reject(
            'acct_xxxxxxxxxxxxx',
            {
                reason: 'fraud',
            }
        );
        expect(account).not.to.be.null;
    });

    it('listCapabilities method', async function() {
        const capabilities = await expressPayments.accounts.listCapabilities(
            'acct_xxxxxxxxxxxxx'
        );
        expect(capabilities).not.to.be.null;
    });

    it('retrieveCapability method', async function() {
        const capability = await expressPayments.accounts.retrieveCapability(
            'acct_xxxxxxxxxxxxx',
            'card_payments'
        );
        expect(capability).not.to.be.null;
    });

    it('updateCapability method', async function() {
        const capability = await expressPayments.accounts.updateCapability(
            'acct_xxxxxxxxxxxxx',
            'card_payments',
            {
                requested: true,
            }
        );
        expect(capability).not.to.be.null;
    });

    it('createExternalAccount method', async function() {
        const externalAccount = await expressPayments.accounts.createExternalAccount(
            'acct_xxxxxxxxxxxxx',
            {
                external_account: 'btok_xxxxxxxxxxxxx',
            }
        );
        expect(externalAccount).not.to.be.null;
    });

    it('createExternalAccount method', async function() {
        const externalAccount = await expressPayments.accounts.createExternalAccount(
            'acct_xxxxxxxxxxxxx',
            {
                external_account: 'tok_xxxx_debit',
            }
        );
        expect(externalAccount).not.to.be.null;
    });

    it('deleteExternalAccount method', async function() {
        const deletedExternalAccount = await expressPayments.accounts.deleteExternalAccount(
            'acct_xxxxxxxxxxxxx',
            'ba_xxxxxxxxxxxxx'
        );
        expect(deletedExternalAccount).not.to.be.null;
    });

    it('deleteExternalAccount method', async function() {
        const deletedExternalAccount = await expressPayments.accounts.deleteExternalAccount(
            'acct_xxxxxxxxxxxxx',
            'card_xxxxxxxxxxxxx'
        );
        expect(deletedExternalAccount).not.to.be.null;
    });

    it('retrieveExternalAccount method', async function() {
        const externalAccount = await expressPayments.accounts.retrieveExternalAccount(
            'acct_xxxxxxxxxxxxx',
            'ba_xxxxxxxxxxxxx'
        );
        expect(externalAccount).not.to.be.null;
    });

    it('retrieveExternalAccount method', async function() {
        const externalAccount = await expressPayments.accounts.retrieveExternalAccount(
            'acct_xxxxxxxxxxxxx',
            'card_xxxxxxxxxxxxx'
        );
        expect(externalAccount).not.to.be.null;
    });

    it('updateExternalAccount method', async function() {
        const externalAccount = await expressPayments.accounts.updateExternalAccount(
            'acct_xxxxxxxxxxxxx',
            'ba_xxxxxxxxxxxxx',
            {
                metadata: {
                    order_id: '6735',
                },
            }
        );
        expect(externalAccount).not.to.be.null;
    });

    it('updateExternalAccount method', async function() {
        const externalAccount = await expressPayments.accounts.updateExternalAccount(
            'acct_xxxxxxxxxxxxx',
            'card_xxxxxxxxxxxxx',
            {
                metadata: {
                    order_id: '6735',
                },
            }
        );
        expect(externalAccount).not.to.be.null;
    });

    it('createLoginLink method', async function() {
        const loginLink = await expressPayments.accounts.createLoginLink(
            'acct_xxxxxxxxxxxxx'
        );
        expect(loginLink).not.to.be.null;
    });

    it('listPersons method', async function() {
        const persons = await expressPayments.accounts.listPersons(
            'acct_xxxxxxxxxxxxx',
            {
                limit: 3,
            }
        );
        expect(persons).not.to.be.null;
    });

    it('createPerson method', async function() {
        const person = await expressPayments.accounts.createPerson(
            'acct_xxxxxxxxxxxxx',
            {
                first_name: 'Jane',
                last_name: 'Diaz',
            }
        );
        expect(person).not.to.be.null;
    });

    it('deletePerson method', async function() {
        const deleted = await expressPayments.accounts.deletePerson(
            'acct_xxxxxxxxxxxxx',
            'person_xxxxxxxxxxxxx'
        );
        expect(deleted).not.to.be.null;
    });

    it('retrievePerson method', async function() {
        const person = await expressPayments.accounts.retrievePerson(
            'acct_xxxxxxxxxxxxx',
            'person_xxxxxxxxxxxxx'
        );
        expect(person).not.to.be.null;
    });

    it('updatePerson method', async function() {
        const person = await expressPayments.accounts.updatePerson(
            'acct_xxxxxxxxxxxxx',
            'person_xxxxxxxxxxxxx',
            {
                metadata: {
                    order_id: '6735',
                },
            }
        );
        expect(person).not.to.be.null;
    });

    it('retrieve method', async function() {
        const expressPayments = testUtils.createMockClient([
            {
                method: 'GET',
                path: '/v1/accounts/acc_123',
                response:
                    '{"business_profile":{"mcc":"mcc","name":"name","product_description":"product_description","support_address":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state"},"support_email":"support_email","support_phone":"support_phone","support_url":"support_url","url":"url"},"business_type":"government_entity","capabilities":{"acss_debit_payments":"inactive","affirm_payments":"pending","afterpay_clearpay_payments":"inactive","au_becs_debit_payments":"active","bacs_debit_payments":"active","bancontact_payments":"inactive","bank_transfer_payments":"pending","blik_payments":"inactive","boleto_payments":"inactive","card_issuing":"active","card_payments":"active","cartes_bancaires_payments":"active","cashapp_payments":"active","eps_payments":"inactive","fpx_payments":"active","giropay_payments":"active","grabpay_payments":"pending","ideal_payments":"inactive","india_international_payments":"inactive","jcb_payments":"inactive","klarna_payments":"active","konbini_payments":"active","legacy_payments":"active","link_payments":"inactive","oxxo_payments":"pending","p24_payments":"inactive","paynow_payments":"active","promptpay_payments":"active","sepa_debit_payments":"inactive","sofort_payments":"active","tax_reporting_us_1099_k":"inactive","tax_reporting_us_1099_misc":"pending","transfers":"inactive","treasury":"pending","us_bank_account_ach_payments":"pending","zip_payments":"pending"},"charges_enabled":true,"company":{"address":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state"},"address_kana":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state","town":"town"},"address_kanji":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state","town":"town"},"directors_provided":true,"executives_provided":true,"export_license_id":"export_license_id","export_purpose_code":"export_purpose_code","name":"name","name_kana":"name_kana","name_kanji":"name_kanji","owners_provided":true,"ownership_declaration":{"date":"3076014","ip":"ip","user_agent":"user_agent"},"phone":"phone","structure":"sole_establishment","tax_id_provided":true,"tax_id_registrar":"tax_id_registrar","vat_id_provided":true,"verification":{"document":{"back":{"created":"1028554472","expires_at":"833811170","filename":"filename","id":"obj_123","links":null,"object":"file","purpose":"finance_report_run","size":3530753,"title":"title","type":"type","url":"url"},"details":"details","details_code":"details_code","front":{"created":"1028554472","expires_at":"833811170","filename":"filename","id":"obj_123","links":null,"object":"file","purpose":"finance_report_run","size":3530753,"title":"title","type":"type","url":"url"}}}},"controller":{"is_controller":true,"type":"account"},"country":"country","created":"1028554472","default_currency":"default_currency","details_submitted":true,"email":"email","external_accounts":null,"future_requirements":{"alternatives":[{"alternative_fields_due":["alternative_fields_due"],"original_fields_due":["original_fields_due"]}],"current_deadline":"270965154","currently_due":["currently_due"],"disabled_reason":"disabled_reason","errors":[{"code":"verification_document_failed_copy","reason":"reason","requirement":"requirement"}],"eventually_due":["eventually_due"],"past_due":["past_due"],"pending_verification":["pending_verification"]},"id":"obj_123","individual":{"account":"account","address":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state"},"address_kana":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state","town":"town"},"address_kanji":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state","town":"town"},"created":"1028554472","dob":{"day":99228,"month":104080000,"year":3704893},"email":"email","first_name":"first_name","first_name_kana":"first_name_kana","first_name_kanji":"first_name_kanji","full_name_aliases":["full_name_aliases"],"future_requirements":{"alternatives":[{"alternative_fields_due":["alternative_fields_due"],"original_fields_due":["original_fields_due"]}],"currently_due":["currently_due"],"errors":[{"code":"verification_document_failed_copy","reason":"reason","requirement":"requirement"}],"eventually_due":["eventually_due"],"past_due":["past_due"],"pending_verification":["pending_verification"]},"gender":"gender","id":"obj_123","id_number_provided":true,"id_number_secondary_provided":true,"last_name":"last_name","last_name_kana":"last_name_kana","last_name_kanji":"last_name_kanji","maiden_name":"maiden_name","metadata":{"undefined":"metadata"},"nationality":"nationality","object":"person","phone":"phone","political_exposure":"none","registered_address":{"city":"city","country":"country","line1":"line1","line2":"line2","postal_code":"postal_code","state":"state"},"relationship":{"director":true,"executive":true,"owner":true,"percent_ownership":760989685,"representative":true,"title":"title"},"requirements":{"alternatives":[{"alternative_fields_due":["alternative_fields_due"],"original_fields_due":["original_fields_due"]}],"currently_due":["currently_due"],"errors":[{"code":"verification_document_failed_copy","reason":"reason","requirement":"requirement"}],"eventually_due":["eventually_due"],"past_due":["past_due"],"pending_verification":["pending_verification"]},"ssn_last_4_provided":true,"verification":{"additional_document":{"back":{"created":"1028554472","expires_at":"833811170","filename":"filename","id":"obj_123","links":null,"object":"file","purpose":"finance_report_run","size":3530753,"title":"title","type":"type","url":"url"},"details":"details","details_code":"details_code","front":{"created":"1028554472","expires_at":"833811170","filename":"filename","id":"obj_123","links":null,"object":"file","purpose":"finance_report_run","size":3530753,"title":"title","type":"type","url":"url"}},"details":"details","details_code":"details_code","document":{"back":{"created":"1028554472","expires_at":"833811170","filename":"filename","id":"obj_123","links":null,"object":"file","purpose":"finance_report_run","size":3530753,"title":"title","type":"type","url":"url"},"details":"details","details_code":"details_code","front":{"created":"1028554472","expires_at":"833811170","filename":"filename","id":"obj_123","links":null,"object":"file","purpose":"finance_report_run","size":3530753,"title":"title","type":"type","url":"url"}},"status":"status"}},"metadata":{"undefined":"metadata"},"object":"account","payouts_enabled":true,"requirements":{"alternatives":[{"alternative_fields_due":["alternative_fields_due"],"original_fields_due":["original_fields_due"]}],"current_deadline":"270965154","currently_due":["currently_due"],"disabled_reason":"disabled_reason","errors":[{"code":"verification_document_failed_copy","reason":"reason","requirement":"requirement"}],"eventually_due":["eventually_due"],"past_due":["past_due"],"pending_verification":["pending_verification"]},"settings":{"bacs_debit_payments":{"display_name":"display_name"},"branding":{"icon":{"created":"1028554472","expires_at":"833811170","filename":"filename","id":"obj_123","links":null,"object":"file","purpose":"finance_report_run","size":3530753,"title":"title","type":"type","url":"url"},"logo":{"created":"1028554472","expires_at":"833811170","filename":"filename","id":"obj_123","links":null,"object":"file","purpose":"finance_report_run","size":3530753,"title":"title","type":"type","url":"url"},"primary_color":"primary_color","secondary_color":"secondary_color"},"card_issuing":{"tos_acceptance":{"date":3076014,"ip":"ip","user_agent":"user_agent"}},"card_payments":{"decline_on":{"avs_failure":true,"cvc_failure":true},"statement_descriptor_prefix":"statement_descriptor_prefix","statement_descriptor_prefix_kana":"statement_descriptor_prefix_kana","statement_descriptor_prefix_kanji":"statement_descriptor_prefix_kanji"},"dashboard":{"display_name":"display_name","timezone":"timezone"},"payments":{"statement_descriptor":"statement_descriptor","statement_descriptor_kana":"statement_descriptor_kana","statement_descriptor_kanji":"statement_descriptor_kanji","statement_descriptor_prefix_kana":"statement_descriptor_prefix_kana","statement_descriptor_prefix_kanji":"statement_descriptor_prefix_kanji"},"payouts":{"debit_negative_balances":true,"schedule":{"delay_days":1647351405,"interval":"interval","monthly_anchor":1920305369,"weekly_anchor":"weekly_anchor"},"statement_descriptor":"statement_descriptor"},"sepa_debit_payments":{"creditor_id":"creditor_id"},"treasury":{"tos_acceptance":{"date":3076014,"ip":"ip","user_agent":"user_agent"}}},"tos_acceptance":{"date":"3076014","ip":"ip","service_agreement":"service_agreement","user_agent":"user_agent"},"type":"custom"}',
            },
        ]);
        const account = await expressPayments.accounts.retrieve('acc_123');
        expect(account).not.to.be.null;
    });
});

describe('Apps.Secrets', function() {
    it('list method', async function() {
        const secrets = await expressPayments.apps.secrets.list({
            scope: {
                type: 'account',
            },
            limit: 2,
        });
        expect(secrets).not.to.be.null;
    });

    it('create method', async function() {
        const secret = await expressPayments.apps.secrets.create({
            name: 'sec_123',
            payload: 'very secret string',
            scope: {
                type: 'account',
            },
        });
        expect(secret).not.to.be.null;
    });

    it('deleteWhere method', async function() {
        const secret = await expressPayments.apps.secrets.deleteWhere({
            name: 'my-api-key',
            scope: {
                type: 'account',
            },
        });
        expect(secret).not.to.be.null;
    });

    it('find method', async function() {
        const secret = await expressPayments.apps.secrets.find({
            name: 'sec_123',
            scope: {
                type: 'account',
            },
        });
        expect(secret).not.to.be.null;
    });

    it('list method', async function() {
        const secrets = await expressPayments.apps.secrets.list({
            scope: {
                type: 'account',
            },
            limit: 2,
        });
        expect(secrets).not.to.be.null;
    });

    it('create method', async function() {
        const secret = await expressPayments.apps.secrets.create({
            name: 'my-api-key',
            payload: 'secret_key_xxxxxx',
            scope: {
                type: 'account',
            },
        });
        expect(secret).not.to.be.null;
    });
});

describe('Checkout.Sessions', function() {
    it('create method', async function() {
        const session = await expressPayments.checkout.sessions.create({
            success_url: 'https://example.com/success',
            cancel_url: 'https://example.com/cancel',
            mode: 'payment',
            shipping_options: [
                {
                    shipping_rate: 'shr_standard',
                },
                {
                    shipping_rate_data: {
                        display_name: 'Standard',
                        delivery_estimate: {
                            minimum: {
                                unit: 'day',
                                value: 5,
                            },
                            maximum: {
                                unit: 'day',
                                value: 7,
                            },
                        },
                    },
                },
            ],
        });
        expect(session).not.to.be.null;
    });

    it('expire method', async function() {
        const session = await expressPayments.checkout.sessions.expire(
            'sess_xyz'
        );
        expect(session).not.to.be.null;
    });

    it('listLineItems method', async function() {
        const lineItems = await expressPayments.checkout.sessions.listLineItems(
            'sess_xyz'
        );
        expect(lineItems).not.to.be.null;
    });

    it('list method', async function() {
        const sessions = await expressPayments.checkout.sessions.list({
            limit: 3,
        });
        expect(sessions).not.to.be.null;
    });

    it('create method', async function() {
        const session = await expressPayments.checkout.sessions.create({
            success_url: 'https://example.com/success',
            line_items: [
                {
                    price: 'price_xxxxxxxxxxxxx',
                    quantity: 2,
                },
            ],
            mode: 'payment',
        });
        expect(session).not.to.be.null;
    });

    it('retrieve method', async function() {
        const session = await expressPayments.checkout.sessions.retrieve(
            'cs_test_xxxxxxxxxxxxx'
        );
        expect(session).not.to.be.null;
    });

    it('expire method', async function() {
        const session = await expressPayments.checkout.sessions.expire(
            'cs_test_xxxxxxxxxxxxx'
        );
        expect(session).not.to.be.null;
    });
});

describe('Customers', function() {
    it('retrieveCashBalance method', async function() {
        const cashBalance = await expressPayments.customers.retrieveCashBalance(
            'cus_123'
        );
        expect(cashBalance).not.to.be.null;
    });

    it('updateCashBalance method', async function() {
        const cashBalance = await expressPayments.customers.updateCashBalance(
            'cus_123',
            {
                settings: {
                    reconciliation_mode: 'manual',
                },
            }
        );
        expect(cashBalance).not.to.be.null;
    });

    it('createFundingInstructions method', async function() {
        const fundingInstructions = await expressPayments.customers.createFundingInstructions(
            'cus_123',
            {
                bank_transfer: {
                    requested_address_types: ['zengin'],
                    type: 'jp_bank_transfer',
                },
                currency: 'usd',
                funding_type: 'bank_transfer',
            }
        );
        expect(fundingInstructions).not.to.be.null;
    });

    it('listPaymentMethods method', async function() {
        const paymentMethods = await expressPayments.customers.listPaymentMethods(
            'cus_xyz',
            {
                type: 'card',
            }
        );
        expect(paymentMethods).not.to.be.null;
    });

    it('updateSource method', async function() {
        const card = await expressPayments.customers.updateSource(
            'cus_123',
            'card_123',
            {
                account_holder_name: 'Kamil',
            }
        );
        expect(card).not.to.be.null;
    });

    it('list method', async function() {
        const customers = await expressPayments.customers.list({
            limit: 3,
        });
        expect(customers).not.to.be.null;
    });

    it('list method', async function() {
        const customers = await expressPayments.customers.list({
            limit: 3,
        });
        expect(customers).not.to.be.null;
    });

    it('create method', async function() {
        const customer = await expressPayments.customers.create({
            description:
                'My First Test Customer (created for API docs at https://www.docs.epayments.network/api)',
        });
        expect(customer).not.to.be.null;
    });

    it('del method', async function() {
        const deleted = await expressPayments.customers.del(
            'cus_xxxxxxxxxxxxx'
        );
        expect(deleted).not.to.be.null;
    });

    it('retrieve method', async function() {
        const customer = await expressPayments.customers.retrieve(
            'cus_xxxxxxxxxxxxx'
        );
        expect(customer).not.to.be.null;
    });

    it('update method', async function() {
        const customer = await expressPayments.customers.update(
            'cus_xxxxxxxxxxxxx',
            {
                metadata: {
                    order_id: '6735',
                },
            }
        );
        expect(customer).not.to.be.null;
    });

    it('listBalanceTransactions method', async function() {
        const customerBalanceTransactions = await expressPayments.customers.listBalanceTransactions(
            'cus_xxxxxxxxxxxxx',
            {
                limit: 3,
            }
        );
        expect(customerBalanceTransactions).not.to.be.null;
    });

    it('createBalanceTransaction method', async function() {
        const customerBalanceTransaction = await expressPayments.customers.createBalanceTransaction(
            'cus_xxxxxxxxxxxxx',
            {
                amount: -500,
                currency: 'usd',
            }
        );
        expect(customerBalanceTransaction).not.to.be.null;
    });

    it('retrieveBalanceTransaction method', async function() {
        const customerBalanceTransaction = await expressPayments.customers.retrieveBalanceTransaction(
            'cus_xxxxxxxxxxxxx',
            'cbtxn_xxxxxxxxxxxxx'
        );
        expect(customerBalanceTransaction).not.to.be.null;
    });

    it('updateBalanceTransaction method', async function() {
        const customerBalanceTransaction = await expressPayments.customers.updateBalanceTransaction(
            'cus_xxxxxxxxxxxxx',
            'cbtxn_xxxxxxxxxxxxx',
            {
                metadata: {
                    order_id: '6735',
                },
            }
        );
        expect(customerBalanceTransaction).not.to.be.null;
    });

    it('listPaymentMethods method', async function() {
        const paymentMethods = await expressPayments.customers.listPaymentMethods(
            'cus_xxxxxxxxxxxxx',
            {
                type: 'card',
            }
        );
        expect(paymentMethods).not.to.be.null;
    });

    it('listSources method', async function() {
        const paymentSource = await expressPayments.customers.listSources(
            'cus_xxxxxxxxxxxxx',
            {
                object: 'bank_account',
                limit: 3,
            }
        );
        expect(paymentSource).not.to.be.null;
    });

    it('listSources method', async function() {
        const paymentSource = await expressPayments.customers.listSources(
            'cus_xxxxxxxxxxxxx',
            {
                object: 'card',
                limit: 3,
            }
        );
        expect(paymentSource).not.to.be.null;
    });

    it('createSource method', async function() {
        const paymentSource = await expressPayments.customers.createSource(
            'cus_xxxxxxxxxxxxx',
            {
                source: 'btok_xxxxxxxxxxxxx',
            }
        );
        expect(paymentSource).not.to.be.null;
    });

    it('createSource method', async function() {
        const paymentSource = await expressPayments.customers.createSource(
            'cus_xxxxxxxxxxxxx',
            {
                source: 'tok_xxxx',
            }
        );
        expect(paymentSource).not.to.be.null;
    });

    it('deleteSource method', async function() {
        const paymentSource = await expressPayments.customers.deleteSource(
            'cus_xxxxxxxxxxxxx',
            'ba_xxxxxxxxxxxxx'
        );
        expect(paymentSource).not.to.be.null;
    });

    it('deleteSource method', async function() {
        const paymentSource = await expressPayments.customers.deleteSource(
            'cus_xxxxxxxxxxxxx',
            'card_xxxxxxxxxxxxx'
        );
        expect(paymentSource).not.to.be.null;
    });

    it('retrieveSource method', async function() {
        const paymentSource = await expressPayments.customers.retrieveSource(
            'cus_xxxxxxxxxxxxx',
            'ba_xxxxxxxxxxxxx'
        );
        expect(paymentSource).not.to.be.null;
    });

    it('retrieveSource method', async function() {
        const paymentSource = await expressPayments.customers.retrieveSource(
            'cus_xxxxxxxxxxxxx',
            'card_xxxxxxxxxxxxx'
        );
        expect(paymentSource).not.to.be.null;
    });

    it('updateSource method', async function() {
        const card = await expressPayments.customers.updateSource(
            'cus_xxxxxxxxxxxxx',
            'ba_xxxxxxxxxxxxx',
            {
                metadata: {
                    order_id: '6735',
                },
            }
        );
        expect(card).not.to.be.null;
    });

    it('updateSource method', async function() {
        const card = await expressPayments.customers.updateSource(
            'cus_xxxxxxxxxxxxx',
            'card_xxxxxxxxxxxxx',
            {
                name: 'Jenny Rosen',
            }
        );
        expect(card).not.to.be.null;
    });

    it('verifySource method', async function() {
        const bankAccount = await expressPayments.customers.verifySource(
            'cus_xxxxxxxxxxxxx',
            'ba_xxxxxxxxxxxxx',
            {
                amounts: [32, 45],
            }
        );
        expect(bankAccount).not.to.be.null;
    });

    it('listTaxIds method', async function() {
        const taxIds = await expressPayments.customers.listTaxIds(
            'cus_xxxxxxxxxxxxx',
            {
                limit: 3,
            }
        );
        expect(taxIds).not.to.be.null;
    });

    it('createTaxId method', async function() {
        const taxId = await expressPayments.customers.createTaxId(
            'cus_xxxxxxxxxxxxx',
            {
                type: 'eu_vat',
                value: 'DE123456789',
            }
        );
        expect(taxId).not.to.be.null;
    });

    it('deleteTaxId method', async function() {
        const deleted = await expressPayments.customers.deleteTaxId(
            'cus_xxxxxxxxxxxxx',
            'txi_xxxxxxxxxxxxx'
        );
        expect(deleted).not.to.be.null;
    });

    it('retrieveTaxId method', async function() {
        const taxId = await expressPayments.customers.retrieveTaxId(
            'cus_xxxxxxxxxxxxx',
            'txi_xxxxxxxxxxxxx'
        );
        expect(taxId).not.to.be.null;
    });

    it('search method', async function() {
        const customers = await expressPayments.customers.search({
            query: "name:'fakename' AND metadata['foo']:'bar'",
        });
        expect(customers).not.to.be.null;
    });

    it('search method', async function() {
        const customers = await expressPayments.customers.search({
            query: "name:'fakename' AND metadata['foo']:'bar'",
        });
        expect(customers).not.to.be.null;
    });
});

describe('FinancialConnections.Accounts', function() {
    it('list method', async function() {
        const accounts = await expressPayments.financialConnections.accounts.list();
        expect(accounts).not.to.be.null;
    });

    it('retrieve method', async function() {
        const account = await expressPayments.financialConnections.accounts.retrieve(
            'fca_xyz'
        );
        expect(account).not.to.be.null;
    });

    it('disconnect method', async function() {
        const account = await expressPayments.financialConnections.accounts.disconnect(
            'fca_xyz'
        );
        expect(account).not.to.be.null;
    });

    it('listOwners method', async function() {
        const accountOwners = await expressPayments.financialConnections.accounts.listOwners(
            'fca_xyz',
            {
                ownership: 'fcaowns_xyz',
            }
        );
        expect(accountOwners).not.to.be.null;
    });

    it('refresh method', async function() {
        const account = await expressPayments.financialConnections.accounts.refresh(
            'fca_xyz',
            {
                features: ['balance'],
            }
        );
        expect(account).not.to.be.null;
    });

    it('list method', async function() {
        const accounts = await expressPayments.financialConnections.accounts.list(
            {
                account_holder: {
                    customer: 'cus_xxxxxxxxxxxxx',
                },
            }
        );
        expect(accounts).not.to.be.null;
    });

    it('retrieve method', async function() {
        const account = await expressPayments.financialConnections.accounts.retrieve(
            'fca_xxxxxxxxxxxxx'
        );
        expect(account).not.to.be.null;
    });

    it('disconnect method', async function() {
        const account = await expressPayments.financialConnections.accounts.disconnect(
            'fca_xxxxxxxxxxxxx'
        );
        expect(account).not.to.be.null;
    });

    it('listOwners method', async function() {
        const accountOwners = await expressPayments.financialConnections.accounts.listOwners(
            'fca_xxxxxxxxxxxxx',
            {
                limit: 3,
                ownership: 'fcaowns_xxxxxxxxxxxxx',
            }
        );
        expect(accountOwners).not.to.be.null;
    });
});

describe('FinancialConnections.Sessions', function() {
    it('create method', async function() {
        const session = await expressPayments.financialConnections.sessions.create(
            {
                account_holder: {
                    type: 'customer',
                    customer: 'cus_123',
                },
                permissions: ['balances'],
            }
        );
        expect(session).not.to.be.null;
    });

    it('retrieve method', async function() {
        const session = await expressPayments.financialConnections.sessions.retrieve(
            'fcsess_xyz'
        );
        expect(session).not.to.be.null;
    });

    it('create method', async function() {
        const session = await expressPayments.financialConnections.sessions.create(
            {
                account_holder: {
                    type: 'customer',
                    customer: 'cus_xxxxxxxxxxxxx',
                },
                permissions: ['payment_method', 'balances'],
                filters: {
                    countries: ['US'],
                },
            }
        );
        expect(session).not.to.be.null;
    });

    it('retrieve method', async function() {
        const session = await expressPayments.financialConnections.sessions.retrieve(
            'fcsess_xxxxxxxxxxxxx'
        );
        expect(session).not.to.be.null;
    });
});

describe('Invoices', function() {
    it('retrieveUpcoming method', async function() {
        const upcomingInvoice = await expressPayments.invoices.retrieveUpcoming(
            {
                customer: 'cus_9utnxg47pWjV1e',
            }
        );
        expect(upcomingInvoice).not.to.be.null;
    });

    it('list method', async function() {
        const invoices = await expressPayments.invoices.list({
            limit: 3,
        });
        expect(invoices).not.to.be.null;
    });

    it('create method', async function() {
        const invoice = await expressPayments.invoices.create({
            customer: 'cus_xxxxxxxxxxxxx',
        });
        expect(invoice).not.to.be.null;
    });

    it('del method', async function() {
        const deleted = await expressPayments.invoices.del('in_xxxxxxxxxxxxx');
        expect(deleted).not.to.be.null;
    });

    it('retrieve method', async function() {
        const invoice = await expressPayments.invoices.retrieve(
            'in_xxxxxxxxxxxxx'
        );
        expect(invoice).not.to.be.null;
    });

    it('retrieve method', async function() {
        const invoice = await expressPayments.invoices.retrieve(
            'in_xxxxxxxxxxxxx',
            {
                expand: ['customer'],
            }
        );
        expect(invoice).not.to.be.null;
    });

    it('update method', async function() {
        const invoice = await expressPayments.invoices.update(
            'in_xxxxxxxxxxxxx',
            {
                metadata: {
                    order_id: '6735',
                },
            }
        );
        expect(invoice).not.to.be.null;
    });

    it('finalizeInvoice method', async function() {
        const invoice = await expressPayments.invoices.finalizeInvoice(
            'in_xxxxxxxxxxxxx'
        );
        expect(invoice).not.to.be.null;
    });

    it('markUncollectible method', async function() {
        const invoice = await expressPayments.invoices.markUncollectible(
            'in_xxxxxxxxxxxxx'
        );
        expect(invoice).not.to.be.null;
    });

    it('pay method', async function() {
        const invoice = await expressPayments.invoices.pay('in_xxxxxxxxxxxxx');
        expect(invoice).not.to.be.null;
    });

    it('sendInvoice method', async function() {
        const invoice = await expressPayments.invoices.sendInvoice(
            'in_xxxxxxxxxxxxx'
        );
        expect(invoice).not.to.be.null;
    });

    it('voidInvoice method', async function() {
        const invoice = await expressPayments.invoices.voidInvoice(
            'in_xxxxxxxxxxxxx'
        );
        expect(invoice).not.to.be.null;
    });

    it('search method', async function() {
        const invoices = await expressPayments.invoices.search({
            query: "total>999 AND metadata['order_id']:'6735'",
        });
        expect(invoices).not.to.be.null;
    });
});

describe('PaymentIntents', function() {
    it('create method', async function() {
        const paymentIntent = await expressPayments.paymentIntents.create({
            amount: 1099,
            currency: 'eur',
            automatic_payment_methods: {
                enabled: true,
            },
        });
        expect(paymentIntent).not.to.be.null;
    });

    it('verifyMicrodeposits method', async function() {
        const paymentIntent = await expressPayments.paymentIntents.verifyMicrodeposits(
            'pi_xxxxxxxxxxxxx'
        );
        expect(paymentIntent).not.to.be.null;
    });

    it('list method', async function() {
        const paymentIntents = await expressPayments.paymentIntents.list({
            limit: 3,
        });
        expect(paymentIntents).not.to.be.null;
    });

    it('create method', async function() {
        const paymentIntent = await expressPayments.paymentIntents.create({
            amount: 2000,
            currency: 'usd',
            automatic_payment_methods: {
                enabled: true,
            },
        });
        expect(paymentIntent).not.to.be.null;
    });

    it('retrieve method', async function() {
        const paymentIntent = await expressPayments.paymentIntents.retrieve(
            'pi_xxxxxxxxxxxxx'
        );
        expect(paymentIntent).not.to.be.null;
    });

    it('update method', async function() {
        const paymentIntent = await expressPayments.paymentIntents.update(
            'pi_xxxxxxxxxxxxx',
            {
                metadata: {
                    order_id: '6735',
                },
            }
        );
        expect(paymentIntent).not.to.be.null;
    });

    it('applyCustomerBalance method', async function() {
        const paymentIntent = await expressPayments.paymentIntents.applyCustomerBalance(
            'pi_xxxxxxxxxxxxx'
        );
        expect(paymentIntent).not.to.be.null;
    });

    it('cancel method', async function() {
        const paymentIntent = await expressPayments.paymentIntents.cancel(
            'pi_xxxxxxxxxxxxx'
        );
        expect(paymentIntent).not.to.be.null;
    });

    it('capture method', async function() {
        const paymentIntent = await expressPayments.paymentIntents.capture(
            'pi_xxxxxxxxxxxxx'
        );
        expect(paymentIntent).not.to.be.null;
    });

    it('confirm method', async function() {
        const paymentIntent = await expressPayments.paymentIntents.confirm(
            'pi_xxxxxxxxxxxxx',
            {
                payment_method: 'pm_card_visa',
            }
        );
        expect(paymentIntent).not.to.be.null;
    });

    it('incrementAuthorization method', async function() {
        const paymentIntent = await expressPayments.paymentIntents.incrementAuthorization(
            'pi_xxxxxxxxxxxxx',
            {
                amount: 2099,
            }
        );
        expect(paymentIntent).not.to.be.null;
    });

    it('verifyMicrodeposits method', async function() {
        const paymentIntent = await expressPayments.paymentIntents.verifyMicrodeposits(
            'pi_xxxxxxxxxxxxx',
            {
                amounts: [32, 45],
            }
        );
        expect(paymentIntent).not.to.be.null;
    });

    it('search method', async function() {
        const paymentIntents = await expressPayments.paymentIntents.search({
            query: "status:'succeeded' AND metadata['order_id']:'6735'",
        });
        expect(paymentIntents).not.to.be.null;
    });

    it('create method', async function() {
        const paymentIntent = await expressPayments.paymentIntents.create({
            amount: 200,
            currency: 'usd',
            payment_method_data: {
                type: 'p24',
                p24: {
                    bank: 'blik',
                },
            },
        });
        expect(paymentIntent).not.to.be.null;
    });
});

describe('PaymentLinks', function() {
    it('create method', async function() {
        const paymentLink = await expressPayments.paymentLinks.create({
            line_items: [
                {
                    price: 'price_xxxxxxxxxxxxx',
                    quantity: 1,
                },
            ],
        });
        expect(paymentLink).not.to.be.null;
    });

    it('retrieve method', async function() {
        const paymentLink = await expressPayments.paymentLinks.retrieve(
            'pl_xyz'
        );
        expect(paymentLink).not.to.be.null;
    });

    it('listLineItems method', async function() {
        const lineItems = await expressPayments.paymentLinks.listLineItems(
            'pl_xyz'
        );
        expect(lineItems).not.to.be.null;
    });

    it('list method', async function() {
        const paymentLinks = await expressPayments.paymentLinks.list({
            limit: 3,
        });
        expect(paymentLinks).not.to.be.null;
    });

    it('create method', async function() {
        const paymentLink = await expressPayments.paymentLinks.create({
            line_items: [
                {
                    price: 'price_xxxxxxxxxxxxx',
                    quantity: 1,
                },
            ],
        });
        expect(paymentLink).not.to.be.null;
    });

    it('retrieve method', async function() {
        const paymentLink = await expressPayments.paymentLinks.retrieve(
            'plink_xxxxxxxxxxxxx'
        );
        expect(paymentLink).not.to.be.null;
    });

    it('update method', async function() {
        const paymentLink = await expressPayments.paymentLinks.update(
            'plink_xxxxxxxxxxxxx',
            {
                active: false,
            }
        );
        expect(paymentLink).not.to.be.null;
    });
});

describe('Prices', function() {
    it('create method', async function() {
        const price = await expressPayments.prices.create({
            unit_amount: 2000,
            currency: 'usd',
            currency_options: {
                uah: {
                    unit_amount: 5000,
                },
                eur: {
                    unit_amount: 1800,
                },
            },
            recurring: {
                interval: 'month',
            },
            product: 'prod_xxxxxxxxxxxxx',
        });
        expect(price).not.to.be.null;
    });

    it('list method', async function() {
        const prices = await expressPayments.prices.list({
            limit: 3,
        });
        expect(prices).not.to.be.null;
    });

    it('create method', async function() {
        const price = await expressPayments.prices.create({
            unit_amount: 2000,
            currency: 'usd',
            recurring: {
                interval: 'month',
            },
            product: 'prod_xxxxxxxxxxxxx',
        });
        expect(price).not.to.be.null;
    });

    it('retrieve method', async function() {
        const price = await expressPayments.prices.retrieve(
            'price_xxxxxxxxxxxxx'
        );
        expect(price).not.to.be.null;
    });

    it('update method', async function() {
        const price = await expressPayments.prices.update(
            'price_xxxxxxxxxxxxx',
            {
                metadata: {
                    order_id: '6735',
                },
            }
        );
        expect(price).not.to.be.null;
    });

    it('search method', async function() {
        const prices = await expressPayments.prices.search({
            query: "active:'true' AND metadata['order_id']:'6735'",
        });
        expect(prices).not.to.be.null;
    });
});

describe('SetupAttempts', function() {
    it('list method', async function() {
        const setupAttempts = await expressPayments.setupAttempts.list({
            limit: 3,
            setup_intent: 'si_xyz',
        });
        expect(setupAttempts).not.to.be.null;
    });
});

describe('SetupIntents', function() {
    it('verifyMicrodeposits method', async function() {
        const setupIntent = await expressPayments.setupIntents.verifyMicrodeposits(
            'seti_xxxxxxxxxxxxx'
        );
        expect(setupIntent).not.to.be.null;
    });

    it('list method', async function() {
        const setupIntents = await expressPayments.setupIntents.list({
            limit: 3,
        });
        expect(setupIntents).not.to.be.null;
    });

    it('create method', async function() {
        const setupIntent = await expressPayments.setupIntents.create({
            payment_method_types: ['card'],
        });
        expect(setupIntent).not.to.be.null;
    });

    it('retrieve method', async function() {
        const setupIntent = await expressPayments.setupIntents.retrieve(
            'seti_xxxxxxxxxxxxx'
        );
        expect(setupIntent).not.to.be.null;
    });

    it('update method', async function() {
        const setupIntent = await expressPayments.setupIntents.update(
            'seti_xxxxxxxxxxxxx',
            {
                metadata: {
                    user_id: '3435453',
                },
            }
        );
        expect(setupIntent).not.to.be.null;
    });

    it('cancel method', async function() {
        const setupIntent = await expressPayments.setupIntents.cancel(
            'seti_xxxxxxxxxxxxx'
        );
        expect(setupIntent).not.to.be.null;
    });

    it('confirm method', async function() {
        const setupIntent = await expressPayments.setupIntents.confirm(
            'seti_xxxxxxxxxxxxx',
            {
                payment_method: 'pm_card_visa',
            }
        );
        expect(setupIntent).not.to.be.null;
    });

    it('verifyMicrodeposits method', async function() {
        const setupIntent = await expressPayments.setupIntents.verifyMicrodeposits(
            'seti_xxxxxxxxxxxxx',
            {
                amounts: [32, 45],
            }
        );
        expect(setupIntent).not.to.be.null;
    });
});

describe('ShippingRates', function() {
    it('list method', async function() {
        const shippingRates = await expressPayments.shippingRates.list();
        expect(shippingRates).not.to.be.null;
    });

    it('create method', async function() {
        const shippingRate = await expressPayments.shippingRates.create({
            display_name: 'Sample Shipper',
            fixed_amount: {
                currency: 'usd',
                amount: 400,
            },
            type: 'fixed_amount',
        });
        expect(shippingRate).not.to.be.null;
    });

    it('list method', async function() {
        const shippingRates = await expressPayments.shippingRates.list({
            limit: 3,
        });
        expect(shippingRates).not.to.be.null;
    });

    it('create method', async function() {
        const shippingRate = await expressPayments.shippingRates.create({
            display_name: 'Ground shipping',
            type: 'fixed_amount',
            fixed_amount: {
                amount: 500,
                currency: 'usd',
            },
        });
        expect(shippingRate).not.to.be.null;
    });

    it('retrieve method', async function() {
        const shippingRate = await expressPayments.shippingRates.retrieve(
            'shr_xxxxxxxxxxxxx'
        );
        expect(shippingRate).not.to.be.null;
    });

    it('update method', async function() {
        const shippingRate = await expressPayments.shippingRates.update(
            'shr_xxxxxxxxxxxxx',
            {
                metadata: {
                    order_id: '6735',
                },
            }
        );
        expect(shippingRate).not.to.be.null;
    });
});

describe('Terminal.Configurations', function() {
    it('list method', async function() {
        const configurations = await expressPayments.terminal.configurations.list();
        expect(configurations).not.to.be.null;
    });

    it('create method', async function() {
        const configuration = await expressPayments.terminal.configurations.create();
        expect(configuration).not.to.be.null;
    });

    it('del method', async function() {
        const deleted = await expressPayments.terminal.configurations.del(
            'uc_123'
        );
        expect(deleted).not.to.be.null;
    });

    it('retrieve method', async function() {
        const configuration = await expressPayments.terminal.configurations.retrieve(
            'uc_123'
        );
        expect(configuration).not.to.be.null;
    });

    it('update method', async function() {
        const configuration = await expressPayments.terminal.configurations.update(
            'uc_123',
            {
                tipping: {
                    usd: {
                        fixed_amounts: [10],
                    },
                },
            }
        );
        expect(configuration).not.to.be.null;
    });

    it('list method', async function() {
        const configurations = await expressPayments.terminal.configurations.list(
            {
                limit: 3,
            }
        );
        expect(configurations).not.to.be.null;
    });

    it('create method', async function() {
        const configuration = await expressPayments.terminal.configurations.create(
            {
                bbpos_wisepos_e: {
                    splashscreen: 'file_xxxxxxxxxxxxx',
                },
            }
        );
        expect(configuration).not.to.be.null;
    });

    it('del method', async function() {
        const deleted = await expressPayments.terminal.configurations.del(
            'tmc_xxxxxxxxxxxxx'
        );
        expect(deleted).not.to.be.null;
    });

    it('retrieve method', async function() {
        const configuration = await expressPayments.terminal.configurations.retrieve(
            'tmc_xxxxxxxxxxxxx'
        );
        expect(configuration).not.to.be.null;
    });

    it('update method', async function() {
        const configuration = await expressPayments.terminal.configurations.update(
            'tmc_xxxxxxxxxxxxx',
            {
                bbpos_wisepos_e: {
                    splashscreen: 'file_xxxxxxxxxxxxx',
                },
            }
        );
        expect(configuration).not.to.be.null;
    });
});

describe('TestHelpers.Customers', function() {
    it('fundCashBalance method', async function() {
        const customerCashBalanceTransaction = await expressPayments.testHelpers.customers.fundCashBalance(
            'cus_123',
            {
                amount: 30,
                currency: 'eur',
            }
        );
        expect(customerCashBalanceTransaction).not.to.be.null;
    });
});

describe('TestHelpers.Issuing.Cards', function() {
    it('deliverCard method', async function() {
        const card = await expressPayments.testHelpers.issuing.cards.deliverCard(
            'card_123'
        );
        expect(card).not.to.be.null;
    });

    it('failCard method', async function() {
        const card = await expressPayments.testHelpers.issuing.cards.failCard(
            'card_123'
        );
        expect(card).not.to.be.null;
    });

    it('returnCard method', async function() {
        const card = await expressPayments.testHelpers.issuing.cards.returnCard(
            'card_123'
        );
        expect(card).not.to.be.null;
    });

    it('shipCard method', async function() {
        const card = await expressPayments.testHelpers.issuing.cards.shipCard(
            'card_123'
        );
        expect(card).not.to.be.null;
    });
});

describe('TestHelpers.Refunds', function() {
    it('expire method', async function() {
        const refund = await expressPayments.testHelpers.refunds.expire(
            're_123'
        );
        expect(refund).not.to.be.null;
    });
});

describe('TestHelpers.TestClocks', function() {
    it('list method', async function() {
        const testClocks = await expressPayments.testHelpers.testClocks.list();
        expect(testClocks).not.to.be.null;
    });

    it('create method', async function() {
        const testClock = await expressPayments.testHelpers.testClocks.create({
            frozen_time: 123,
            name: 'cogsworth',
        });
        expect(testClock).not.to.be.null;
    });

    it('del method', async function() {
        const deleted = await expressPayments.testHelpers.testClocks.del(
            'clock_xyz'
        );
        expect(deleted).not.to.be.null;
    });

    it('retrieve method', async function() {
        const testClock = await expressPayments.testHelpers.testClocks.retrieve(
            'clock_xyz'
        );
        expect(testClock).not.to.be.null;
    });

    it('advance method', async function() {
        const testClock = await expressPayments.testHelpers.testClocks.advance(
            'clock_xyz',
            {
                frozen_time: 142,
            }
        );
        expect(testClock).not.to.be.null;
    });

    it('list method', async function() {
        const testClocks = await expressPayments.testHelpers.testClocks.list({
            limit: 3,
        });
        expect(testClocks).not.to.be.null;
    });

    it('create method', async function() {
        const testClock = await expressPayments.testHelpers.testClocks.create({
            frozen_time: 1577836800,
        });
        expect(testClock).not.to.be.null;
    });

    it('del method', async function() {
        const deleted = await expressPayments.testHelpers.testClocks.del(
            'clock_xxxxxxxxxxxxx'
        );
        expect(deleted).not.to.be.null;
    });

    it('retrieve method', async function() {
        const testClock = await expressPayments.testHelpers.testClocks.retrieve(
            'clock_xxxxxxxxxxxxx'
        );
        expect(testClock).not.to.be.null;
    });

    it('advance method', async function() {
        const testClock = await expressPayments.testHelpers.testClocks.advance(
            'clock_xxxxxxxxxxxxx',
            {
                frozen_time: 1675552261,
            }
        );
        expect(testClock).not.to.be.null;
    });
});

describe('TestHelpers.Treasury.InboundTransfers', function() {
    it('fail method', async function() {
        const inboundTransfer = await expressPayments.testHelpers.treasury.inboundTransfers.fail(
            'ibt_123',
            {
                failure_details: {
                    code: 'account_closed',
                },
            }
        );
        expect(inboundTransfer).not.to.be.null;
    });

    it('returnInboundTransfer method', async function() {
        const inboundTransfer = await expressPayments.testHelpers.treasury.inboundTransfers.returnInboundTransfer(
            'ibt_123'
        );
        expect(inboundTransfer).not.to.be.null;
    });

    it('succeed method', async function() {
        const inboundTransfer = await expressPayments.testHelpers.treasury.inboundTransfers.succeed(
            'ibt_123'
        );
        expect(inboundTransfer).not.to.be.null;
    });
});

describe('TestHelpers.Treasury.OutboundTransfers', function() {
    it('fail method', async function() {
        const outboundTransfer = await expressPayments.testHelpers.treasury.outboundTransfers.fail(
            'obt_123'
        );
        expect(outboundTransfer).not.to.be.null;
    });

    it('post method', async function() {
        const outboundTransfer = await expressPayments.testHelpers.treasury.outboundTransfers.post(
            'obt_123'
        );
        expect(outboundTransfer).not.to.be.null;
    });

    it('returnOutboundTransfer method', async function() {
        const outboundTransfer = await expressPayments.testHelpers.treasury.outboundTransfers.returnOutboundTransfer(
            'obt_123',
            {
                returned_details: {
                    code: 'account_closed',
                },
            }
        );
        expect(outboundTransfer).not.to.be.null;
    });
});

describe('TestHelpers.Treasury.ReceivedCredits', function() {
    it('create method', async function() {
        const receivedCredit = await expressPayments.testHelpers.treasury.receivedCredits.create(
            {
                financial_account: 'fa_123',
                network: 'ach',
                amount: 1234,
                currency: 'usd',
            }
        );
        expect(receivedCredit).not.to.be.null;
    });
});

describe('TestHelpers.Treasury.ReceivedDebits', function() {
    it('create method', async function() {
        const receivedDebit = await expressPayments.testHelpers.treasury.receivedDebits.create(
            {
                financial_account: 'fa_123',
                network: 'ach',
                amount: 1234,
                currency: 'usd',
            }
        );
        expect(receivedDebit).not.to.be.null;
    });
});

describe('Tokens', function() {
    it('create method', async function() {
        const token = await expressPayments.tokens.create({
            card: {
                number: '4242424242424242',
                exp_month: '5',
                exp_year: '2023',
                cvc: '314',
            },
        });
        expect(token).not.to.be.null;
    });

    it('create method', async function() {
        const token = await expressPayments.tokens.create({
            bank_account: {
                country: 'US',
                currency: 'usd',
                account_holder_name: 'Jenny Rosen',
                account_holder_type: 'individual',
                routing_number: '110000000',
                account_number: '000123456789',
            },
        });
        expect(token).not.to.be.null;
    });

    it('create method', async function() {
        const token = await expressPayments.tokens.create({
            pii: {
                id_number: '000000000',
            },
        });
        expect(token).not.to.be.null;
    });

    it('create method', async function() {
        const token = await expressPayments.tokens.create({
            account: {
                individual: {
                    first_name: 'Jane',
                    last_name: 'Doe',
                },
                tos_shown_and_accepted: true,
            },
        });
        expect(token).not.to.be.null;
    });

    it('create method', async function() {
        const token = await expressPayments.tokens.create({
            person: {
                first_name: 'Jane',
                last_name: 'Doe',
                relationship: {
                    owner: true,
                },
            },
        });
        expect(token).not.to.be.null;
    });

    it('create method', async function() {
        const token = await expressPayments.tokens.create({
            cvc_update: {
                cvc: '123',
            },
        });
        expect(token).not.to.be.null;
    });

    it('retrieve method', async function() {
        const token = await expressPayments.tokens.retrieve('tok_xxxx');
        expect(token).not.to.be.null;
    });
});

describe('AccountLinks', function() {
    it('create method', async function() {
        const accountLink = await expressPayments.accountLinks.create({
            account: 'acct_xxxxxxxxxxxxx',
            refresh_url: 'https://example.com/reauth',
            return_url: 'https://example.com/return',
            type: 'account_onboarding',
        });
        expect(accountLink).not.to.be.null;
    });
});

describe('ApplicationFees', function() {
    it('list method', async function() {
        const applicationFees = await expressPayments.applicationFees.list({
            limit: 3,
        });
        expect(applicationFees).not.to.be.null;
    });

    it('retrieve method', async function() {
        const applicationFee = await expressPayments.applicationFees.retrieve(
            'fee_xxxxxxxxxxxxx'
        );
        expect(applicationFee).not.to.be.null;
    });

    it('listRefunds method', async function() {
        const feeRefunds = await expressPayments.applicationFees.listRefunds(
            'fee_xxxxxxxxxxxxx',
            {
                limit: 3,
            }
        );
        expect(feeRefunds).not.to.be.null;
    });

    it('createRefund method', async function() {
        const feeRefund = await expressPayments.applicationFees.createRefund(
            'fee_xxxxxxxxxxxxx'
        );
        expect(feeRefund).not.to.be.null;
    });

    it('retrieveRefund method', async function() {
        const feeRefund = await expressPayments.applicationFees.retrieveRefund(
            'fee_xxxxxxxxxxxxx',
            'fr_xxxxxxxxxxxxx'
        );
        expect(feeRefund).not.to.be.null;
    });

    it('updateRefund method', async function() {
        const feeRefund = await expressPayments.applicationFees.updateRefund(
            'fee_xxxxxxxxxxxxx',
            'fr_xxxxxxxxxxxxx',
            {
                metadata: {
                    order_id: '6735',
                },
            }
        );
        expect(feeRefund).not.to.be.null;
    });
});

describe('BalanceTransactions', function() {
    it('list method', async function() {
        const balanceTransactions = await expressPayments.balanceTransactions.list(
            {
                limit: 3,
            }
        );
        expect(balanceTransactions).not.to.be.null;
    });

    it('retrieve method', async function() {
        const balanceTransaction = await expressPayments.balanceTransactions.retrieve(
            'txn_xxxxxxxxxxxxx'
        );
        expect(balanceTransaction).not.to.be.null;
    });
});

describe('BillingPortal.Configurations', function() {
    it('list method', async function() {
        const configurations = await expressPayments.billingPortal.configurations.list(
            {
                limit: 3,
            }
        );
        expect(configurations).not.to.be.null;
    });

    it('create method', async function() {
        const configuration = await expressPayments.billingPortal.configurations.create(
            {
                features: {
                    customer_update: {
                        allowed_updates: ['email', 'tax_id'],
                        enabled: true,
                    },
                    invoice_history: {
                        enabled: true,
                    },
                },
                business_profile: {
                    privacy_policy_url: 'https://example.com/privacy',
                    terms_of_service_url: 'https://example.com/terms',
                },
            }
        );
        expect(configuration).not.to.be.null;
    });

    it('retrieve method', async function() {
        const configuration = await expressPayments.billingPortal.configurations.retrieve(
            'bpc_xxxxxxxxxxxxx'
        );
        expect(configuration).not.to.be.null;
    });

    it('update method', async function() {
        const configuration = await expressPayments.billingPortal.configurations.update(
            'bpc_xxxxxxxxxxxxx',
            {
                business_profile: {
                    privacy_policy_url: 'https://example.com/privacy',
                    terms_of_service_url: 'https://example.com/terms',
                },
            }
        );
        expect(configuration).not.to.be.null;
    });
});

describe('BillingPortal.Sessions', function() {
    it('create method', async function() {
        const session = await expressPayments.billingPortal.sessions.create({
            customer: 'cus_xxxxxxxxxxxxx',
            return_url: 'https://example.com/account',
        });
        expect(session).not.to.be.null;
    });
});

describe('Charges', function() {
    it('list method', async function() {
        const charges = await expressPayments.charges.list({
            limit: 3,
        });
        expect(charges).not.to.be.null;
    });

    it('create method', async function() {
        const charge = await expressPayments.charges.create({
            amount: 2000,
            currency: 'usd',
            source: 'tok_xxxx',
            description:
                'My First Test Charge (created for API docs at https://www.docs.epayments.network/api)',
        });
        expect(charge).not.to.be.null;
    });

    it('retrieve method', async function() {
        const charge = await expressPayments.charges.retrieve(
            'ch_xxxxxxxxxxxxx'
        );
        expect(charge).not.to.be.null;
    });

    it('update method', async function() {
        const charge = await expressPayments.charges.update(
            'ch_xxxxxxxxxxxxx',
            {
                metadata: {
                    order_id: '6735',
                },
            }
        );
        expect(charge).not.to.be.null;
    });

    it('capture method', async function() {
        const charge = await expressPayments.charges.capture(
            'ch_xxxxxxxxxxxxx'
        );
        expect(charge).not.to.be.null;
    });

    it('search method', async function() {
        const charges = await expressPayments.charges.search({
            query: "amount>999 AND metadata['order_id']:'6735'",
        });
        expect(charges).not.to.be.null;
    });
});

describe('CountrySpecs', function() {
    it('list method', async function() {
        const countrySpecs = await expressPayments.countrySpecs.list({
            limit: 3,
        });
        expect(countrySpecs).not.to.be.null;
    });

    it('retrieve method', async function() {
        const countrySpec = await expressPayments.countrySpecs.retrieve('US');
        expect(countrySpec).not.to.be.null;
    });
});

describe('Coupons', function() {
    it('list method', async function() {
        const coupons = await expressPayments.coupons.list({
            limit: 3,
        });
        expect(coupons).not.to.be.null;
    });

    it('create method', async function() {
        const coupon = await expressPayments.coupons.create({
            percent_off: 25.5,
            duration: 'repeating',
            duration_in_months: 3,
        });
        expect(coupon).not.to.be.null;
    });

    it('del method', async function() {
        const deleted = await expressPayments.coupons.del('Z4OV52SU');
        expect(deleted).not.to.be.null;
    });

    it('retrieve method', async function() {
        const coupon = await expressPayments.coupons.retrieve('Z4OV52SU');
        expect(coupon).not.to.be.null;
    });

    it('update method', async function() {
        const coupon = await expressPayments.coupons.update('Z4OV52SU', {
            metadata: {
                order_id: '6735',
            },
        });
        expect(coupon).not.to.be.null;
    });
});

describe('CreditNotes', function() {
    it('list method', async function() {
        const creditNotes = await expressPayments.creditNotes.list({
            limit: 3,
        });
        expect(creditNotes).not.to.be.null;
    });

    it('create method', async function() {
        const creditNote = await expressPayments.creditNotes.create({
            invoice: 'in_xxxxxxxxxxxxx',
            lines: [
                {
                    type: 'invoice_line_item',
                    invoice_line_item: 'il_xxxxxxxxxxxxx',
                    quantity: 1,
                },
            ],
        });
        expect(creditNote).not.to.be.null;
    });

    it('voidCreditNote method', async function() {
        const creditNote = await expressPayments.creditNotes.voidCreditNote(
            'cn_xxxxxxxxxxxxx'
        );
        expect(creditNote).not.to.be.null;
    });

    it('listLineItems method', async function() {
        const creditNoteLineItems = await expressPayments.creditNotes.listLineItems(
            'cn_xxxxxxxxxxxxx',
            {
                limit: 3,
            }
        );
        expect(creditNoteLineItems).not.to.be.null;
    });

    it('preview method', async function() {
        const creditNote = await expressPayments.creditNotes.preview({
            invoice: 'in_xxxxxxxxxxxxx',
            lines: [
                {
                    type: 'invoice_line_item',
                    invoice_line_item: 'il_xxxxxxxxxxxxx',
                    quantity: 1,
                },
            ],
        });
        expect(creditNote).not.to.be.null;
    });

    it('listPreviewLineItems method', async function() {
        const creditNoteLineItems = await expressPayments.creditNotes.listPreviewLineItems(
            {
                limit: 3,
                invoice: 'in_xxxxxxxxxxxxx',
            }
        );
        expect(creditNoteLineItems).not.to.be.null;
    });
});

describe('Disputes', function() {
    it('list method', async function() {
        const disputes = await expressPayments.disputes.list({
            limit: 3,
        });
        expect(disputes).not.to.be.null;
    });

    it('retrieve method', async function() {
        const dispute = await expressPayments.disputes.retrieve(
            'dp_xxxxxxxxxxxxx'
        );
        expect(dispute).not.to.be.null;
    });

    it('update method', async function() {
        const dispute = await expressPayments.disputes.update(
            'dp_xxxxxxxxxxxxx',
            {
                metadata: {
                    order_id: '6735',
                },
            }
        );
        expect(dispute).not.to.be.null;
    });

    it('close method', async function() {
        const dispute = await expressPayments.disputes.close(
            'dp_xxxxxxxxxxxxx'
        );
        expect(dispute).not.to.be.null;
    });
});

describe('Events', function() {
    it('list method', async function() {
        const events = await expressPayments.events.list({
            limit: 3,
        });
        expect(events).not.to.be.null;
    });

    it('retrieve method', async function() {
        const event = await expressPayments.events.retrieve(
            'evt_xxxxxxxxxxxxx'
        );
        expect(event).not.to.be.null;
    });
});

describe('FileLinks', function() {
    it('list method', async function() {
        const fileLinks = await expressPayments.fileLinks.list({
            limit: 3,
        });
        expect(fileLinks).not.to.be.null;
    });

    it('create method', async function() {
        const fileLink = await expressPayments.fileLinks.create({
            file: 'file_xxxxxxxxxxxxx',
        });
        expect(fileLink).not.to.be.null;
    });

    it('retrieve method', async function() {
        const fileLink = await expressPayments.fileLinks.retrieve(
            'link_xxxxxxxxxxxxx'
        );
        expect(fileLink).not.to.be.null;
    });

    it('update method', async function() {
        const fileLink = await expressPayments.fileLinks.update(
            'link_xxxxxxxxxxxxx',
            {
                metadata: {
                    order_id: '6735',
                },
            }
        );
        expect(fileLink).not.to.be.null;
    });
});

describe('Identity.VerificationReports', function() {
    it('list method', async function() {
        const verificationReports = await expressPayments.identity.verificationReports.list(
            {
                limit: 3,
            }
        );
        expect(verificationReports).not.to.be.null;
    });

    it('retrieve method', async function() {
        const verificationReport = await expressPayments.identity.verificationReports.retrieve(
            'vr_xxxxxxxxxxxxx'
        );
        expect(verificationReport).not.to.be.null;
    });
});

describe('Identity.VerificationSessions', function() {
    it('list method', async function() {
        const verificationSessions = await expressPayments.identity.verificationSessions.list(
            {
                limit: 3,
            }
        );
        expect(verificationSessions).not.to.be.null;
    });

    it('create method', async function() {
        const verificationSession = await expressPayments.identity.verificationSessions.create(
            {
                type: 'document',
            }
        );
        expect(verificationSession).not.to.be.null;
    });

    it('retrieve method', async function() {
        const verificationSession = await expressPayments.identity.verificationSessions.retrieve(
            'vs_xxxxxxxxxxxxx'
        );
        expect(verificationSession).not.to.be.null;
    });

    it('update method', async function() {
        const verificationSession = await expressPayments.identity.verificationSessions.update(
            'vs_xxxxxxxxxxxxx',
            {
                type: 'id_number',
            }
        );
        expect(verificationSession).not.to.be.null;
    });

    it('cancel method', async function() {
        const verificationSession = await expressPayments.identity.verificationSessions.cancel(
            'vs_xxxxxxxxxxxxx'
        );
        expect(verificationSession).not.to.be.null;
    });

    it('redact method', async function() {
        const verificationSession = await expressPayments.identity.verificationSessions.redact(
            'vs_xxxxxxxxxxxxx'
        );
        expect(verificationSession).not.to.be.null;
    });
});

describe('InvoiceItems', function() {
    it('list method', async function() {
        const invoiceItems = await expressPayments.invoiceItems.list({
            limit: 3,
        });
        expect(invoiceItems).not.to.be.null;
    });

    it('create method', async function() {
        const invoiceItem = await expressPayments.invoiceItems.create({
            customer: 'cus_xxxxxxxxxxxxx',
            price: 'price_xxxxxxxxxxxxx',
        });
        expect(invoiceItem).not.to.be.null;
    });

    it('del method', async function() {
        const deleted = await expressPayments.invoiceItems.del(
            'ii_xxxxxxxxxxxxx'
        );
        expect(deleted).not.to.be.null;
    });

    it('retrieve method', async function() {
        const invoiceItem = await expressPayments.invoiceItems.retrieve(
            'ii_xxxxxxxxxxxxx'
        );
        expect(invoiceItem).not.to.be.null;
    });

    it('update method', async function() {
        const invoiceItem = await expressPayments.invoiceItems.update(
            'ii_xxxxxxxxxxxxx',
            {
                metadata: {
                    order_id: '6735',
                },
            }
        );
        expect(invoiceItem).not.to.be.null;
    });
});

describe('Issuing.Authorizations', function() {
    it('list method', async function() {
        const authorizations = await expressPayments.issuing.authorizations.list(
            {
                limit: 3,
            }
        );
        expect(authorizations).not.to.be.null;
    });

    it('retrieve method', async function() {
        const authorization = await expressPayments.issuing.authorizations.retrieve(
            'iauth_xxxxxxxxxxxxx'
        );
        expect(authorization).not.to.be.null;
    });

    it('update method', async function() {
        const authorization = await expressPayments.issuing.authorizations.update(
            'iauth_xxxxxxxxxxxxx',
            {
                metadata: {
                    order_id: '6735',
                },
            }
        );
        expect(authorization).not.to.be.null;
    });

    it('approve method', async function() {
        const authorization = await expressPayments.issuing.authorizations.approve(
            'iauth_xxxxxxxxxxxxx'
        );
        expect(authorization).not.to.be.null;
    });

    it('decline method', async function() {
        const authorization = await expressPayments.issuing.authorizations.decline(
            'iauth_xxxxxxxxxxxxx'
        );
        expect(authorization).not.to.be.null;
    });
});

describe('Issuing.Cardholders', function() {
    it('list method', async function() {
        const cardholders = await expressPayments.issuing.cardholders.list({
            limit: 3,
        });
        expect(cardholders).not.to.be.null;
    });

    it('create method', async function() {
        const cardholder = await expressPayments.issuing.cardholders.create({
            type: 'individual',
            name: 'Martin Najemi',
            email: 'martin.najemi@example.com',
            phone_number: '+18888675309',
            billing: {
                address: {
                    line1: '1234 Main Street',
                    city: 'San Francisco',
                    state: 'CA',
                    country: 'US',
                    postal_code: '94111',
                },
            },
        });
        expect(cardholder).not.to.be.null;
    });

    it('retrieve method', async function() {
        const cardholder = await expressPayments.issuing.cardholders.retrieve(
            'ich_xxxxxxxxxxxxx'
        );
        expect(cardholder).not.to.be.null;
    });

    it('update method', async function() {
        const cardholder = await expressPayments.issuing.cardholders.update(
            'ich_xxxxxxxxxxxxx',
            {
                metadata: {
                    order_id: '6735',
                },
            }
        );
        expect(cardholder).not.to.be.null;
    });
});

describe('Issuing.Cards', function() {
    it('list method', async function() {
        const cards = await expressPayments.issuing.cards.list({
            limit: 3,
        });
        expect(cards).not.to.be.null;
    });

    it('create method', async function() {
        const card = await expressPayments.issuing.cards.create({
            cardholder: 'ich_xxxxxxxxxxxxx',
            currency: 'usd',
            type: 'virtual',
        });
        expect(card).not.to.be.null;
    });

    it('retrieve method', async function() {
        const card = await expressPayments.issuing.cards.retrieve(
            'ic_xxxxxxxxxxxxx'
        );
        expect(card).not.to.be.null;
    });

    it('update method', async function() {
        const card = await expressPayments.issuing.cards.update(
            'ic_xxxxxxxxxxxxx',
            {
                metadata: {
                    order_id: '6735',
                },
            }
        );
        expect(card).not.to.be.null;
    });
});

describe('Issuing.Disputes', function() {
    it('list method', async function() {
        const disputes = await expressPayments.issuing.disputes.list({
            limit: 3,
        });
        expect(disputes).not.to.be.null;
    });

    it('create method', async function() {
        const dispute = await expressPayments.issuing.disputes.create({
            transaction: 'ipi_xxxxxxxxxxxxx',
            evidence: {
                reason: 'fraudulent',
                fraudulent: {
                    explanation: 'Purchase was unrecognized.',
                },
            },
        });
        expect(dispute).not.to.be.null;
    });

    it('retrieve method', async function() {
        const dispute = await expressPayments.issuing.disputes.retrieve(
            'idp_xxxxxxxxxxxxx'
        );
        expect(dispute).not.to.be.null;
    });

    it('submit method', async function() {
        const dispute = await expressPayments.issuing.disputes.submit(
            'idp_xxxxxxxxxxxxx'
        );
        expect(dispute).not.to.be.null;
    });
});

describe('Issuing.Transactions', function() {
    it('list method', async function() {
        const transactions = await expressPayments.issuing.transactions.list({
            limit: 3,
        });
        expect(transactions).not.to.be.null;
    });

    it('retrieve method', async function() {
        const transaction = await expressPayments.issuing.transactions.retrieve(
            'ipi_xxxxxxxxxxxxx'
        );
        expect(transaction).not.to.be.null;
    });

    it('update method', async function() {
        const transaction = await expressPayments.issuing.transactions.update(
            'ipi_xxxxxxxxxxxxx',
            {
                metadata: {
                    order_id: '6735',
                },
            }
        );
        expect(transaction).not.to.be.null;
    });
});

describe('Mandates', function() {
    it('retrieve method', async function() {
        const mandate = await expressPayments.mandates.retrieve(
            'mandate_xxxxxxxxxxxxx'
        );
        expect(mandate).not.to.be.null;
    });
});

describe('PaymentMethods', function() {
    it('list method', async function() {
        const paymentMethods = await expressPayments.paymentMethods.list({
            customer: 'cus_xxxxxxxxxxxxx',
            type: 'card',
        });
        expect(paymentMethods).not.to.be.null;
    });

    it('create method', async function() {
        const paymentMethod = await expressPayments.paymentMethods.create({
            type: 'card',
            card: {
                number: '4242424242424242',
                exp_month: 8,
                exp_year: 2024,
                cvc: '314',
            },
        });
        expect(paymentMethod).not.to.be.null;
    });

    it('retrieve method', async function() {
        const paymentMethod = await expressPayments.paymentMethods.retrieve(
            'pm_xxxxxxxxxxxxx'
        );
        expect(paymentMethod).not.to.be.null;
    });

    it('update method', async function() {
        const paymentMethod = await expressPayments.paymentMethods.update(
            'pm_xxxxxxxxxxxxx',
            {
                metadata: {
                    order_id: '6735',
                },
            }
        );
        expect(paymentMethod).not.to.be.null;
    });

    it('attach method', async function() {
        const paymentMethod = await expressPayments.paymentMethods.attach(
            'pm_xxxxxxxxxxxxx',
            {
                customer: 'cus_xxxxxxxxxxxxx',
            }
        );
        expect(paymentMethod).not.to.be.null;
    });

    it('detach method', async function() {
        const paymentMethod = await expressPayments.paymentMethods.detach(
            'pm_xxxxxxxxxxxxx'
        );
        expect(paymentMethod).not.to.be.null;
    });
});

describe('Payouts', function() {
    it('list method', async function() {
        const payouts = await expressPayments.payouts.list({
            limit: 3,
        });
        expect(payouts).not.to.be.null;
    });

    it('create method', async function() {
        const payout = await expressPayments.payouts.create({
            amount: 1100,
            currency: 'usd',
        });
        expect(payout).not.to.be.null;
    });

    it('retrieve method', async function() {
        const payout = await expressPayments.payouts.retrieve(
            'po_xxxxxxxxxxxxx'
        );
        expect(payout).not.to.be.null;
    });

    it('update method', async function() {
        const payout = await expressPayments.payouts.update(
            'po_xxxxxxxxxxxxx',
            {
                metadata: {
                    order_id: '6735',
                },
            }
        );
        expect(payout).not.to.be.null;
    });

    it('cancel method', async function() {
        const payout = await expressPayments.payouts.cancel('po_xxxxxxxxxxxxx');
        expect(payout).not.to.be.null;
    });

    it('reverse method', async function() {
        const payout = await expressPayments.payouts.reverse(
            'po_xxxxxxxxxxxxx'
        );
        expect(payout).not.to.be.null;
    });
});

describe('Plans', function() {
    it('list method', async function() {
        const plans = await expressPayments.plans.list({
            limit: 3,
        });
        expect(plans).not.to.be.null;
    });

    it('create method', async function() {
        const plan = await expressPayments.plans.create({
            amount: 2000,
            currency: 'usd',
            interval: 'month',
            product: 'prod_xxxxxxxxxxxxx',
        });
        expect(plan).not.to.be.null;
    });

    it('create method', async function() {
        const plan = await expressPayments.plans.create({
            amount: 2000,
            currency: 'usd',
            interval: 'month',
            product: {
                name: 'My product',
            },
        });
        expect(plan).not.to.be.null;
    });

    it('del method', async function() {
        const deleted = await expressPayments.plans.del('price_xxxxxxxxxxxxx');
        expect(deleted).not.to.be.null;
    });

    it('retrieve method', async function() {
        const plan = await expressPayments.plans.retrieve(
            'price_xxxxxxxxxxxxx'
        );
        expect(plan).not.to.be.null;
    });

    it('update method', async function() {
        const plan = await expressPayments.plans.update('price_xxxxxxxxxxxxx', {
            metadata: {
                order_id: '6735',
            },
        });
        expect(plan).not.to.be.null;
    });
});

describe('Products', function() {
    it('list method', async function() {
        const products = await expressPayments.products.list({
            limit: 3,
        });
        expect(products).not.to.be.null;
    });

    it('create method', async function() {
        const product = await expressPayments.products.create({
            name: 'Gold Special',
        });
        expect(product).not.to.be.null;
    });

    it('del method', async function() {
        const deleted = await expressPayments.products.del(
            'prod_xxxxxxxxxxxxx'
        );
        expect(deleted).not.to.be.null;
    });

    it('retrieve method', async function() {
        const product = await expressPayments.products.retrieve(
            'prod_xxxxxxxxxxxxx'
        );
        expect(product).not.to.be.null;
    });

    it('update method', async function() {
        const product = await expressPayments.products.update(
            'prod_xxxxxxxxxxxxx',
            {
                metadata: {
                    order_id: '6735',
                },
            }
        );
        expect(product).not.to.be.null;
    });

    it('search method', async function() {
        const products = await expressPayments.products.search({
            query: "active:'true' AND metadata['order_id']:'6735'",
        });
        expect(products).not.to.be.null;
    });
});

describe('PromotionCodes', function() {
    it('list method', async function() {
        const promotionCodes = await expressPayments.promotionCodes.list({
            limit: 3,
        });
        expect(promotionCodes).not.to.be.null;
    });

    it('create method', async function() {
        const promotionCode = await expressPayments.promotionCodes.create({
            coupon: 'Z4OV52SU',
        });
        expect(promotionCode).not.to.be.null;
    });

    it('retrieve method', async function() {
        const promotionCode = await expressPayments.promotionCodes.retrieve(
            'promo_xxxxxxxxxxxxx'
        );
        expect(promotionCode).not.to.be.null;
    });

    it('update method', async function() {
        const promotionCode = await expressPayments.promotionCodes.update(
            'promo_xxxxxxxxxxxxx',
            {
                metadata: {
                    order_id: '6735',
                },
            }
        );
        expect(promotionCode).not.to.be.null;
    });
});

describe('Quotes', function() {
    it('list method', async function() {
        const quotes = await expressPayments.quotes.list({
            limit: 3,
        });
        expect(quotes).not.to.be.null;
    });

    it('create method', async function() {
        const quote = await expressPayments.quotes.create({
            customer: 'cus_xxxxxxxxxxxxx',
            line_items: [
                {
                    price: 'price_xxxxxxxxxxxxx',
                    quantity: 2,
                },
            ],
        });
        expect(quote).not.to.be.null;
    });

    it('retrieve method', async function() {
        const quote = await expressPayments.quotes.retrieve('qt_xxxxxxxxxxxxx');
        expect(quote).not.to.be.null;
    });

    it('update method', async function() {
        const quote = await expressPayments.quotes.update('qt_xxxxxxxxxxxxx', {
            metadata: {
                order_id: '6735',
            },
        });
        expect(quote).not.to.be.null;
    });

    it('accept method', async function() {
        const quote = await expressPayments.quotes.accept('qt_xxxxxxxxxxxxx');
        expect(quote).not.to.be.null;
    });

    it('cancel method', async function() {
        const quote = await expressPayments.quotes.cancel('qt_xxxxxxxxxxxxx');
        expect(quote).not.to.be.null;
    });

    it('finalizeQuote method', async function() {
        const quote = await expressPayments.quotes.finalizeQuote(
            'qt_xxxxxxxxxxxxx'
        );
        expect(quote).not.to.be.null;
    });

    it('listLineItems method', async function() {
        const lineItems = await expressPayments.quotes.listLineItems(
            'qt_xxxxxxxxxxxxx'
        );
        expect(lineItems).not.to.be.null;
    });
});

describe('Radar.EarlyFraudWarnings', function() {
    it('list method', async function() {
        const earlyFraudWarnings = await expressPayments.radar.earlyFraudWarnings.list(
            {
                limit: 3,
            }
        );
        expect(earlyFraudWarnings).not.to.be.null;
    });

    it('retrieve method', async function() {
        const earlyFraudWarning = await expressPayments.radar.earlyFraudWarnings.retrieve(
            'issfr_xxxxxxxxxxxxx'
        );
        expect(earlyFraudWarning).not.to.be.null;
    });
});

describe('Radar.ValueListItems', function() {
    it('list method', async function() {
        const valueListItems = await expressPayments.radar.valueListItems.list({
            limit: 3,
            value_list: 'rsl_xxxxxxxxxxxxx',
        });
        expect(valueListItems).not.to.be.null;
    });

    it('create method', async function() {
        const valueListItem = await expressPayments.radar.valueListItems.create(
            {
                value_list: 'rsl_xxxxxxxxxxxxx',
                value: '1.2.3.4',
            }
        );
        expect(valueListItem).not.to.be.null;
    });

    it('del method', async function() {
        const deleted = await expressPayments.radar.valueListItems.del(
            'rsli_xxxxxxxxxxxxx'
        );
        expect(deleted).not.to.be.null;
    });

    it('retrieve method', async function() {
        const valueListItem = await expressPayments.radar.valueListItems.retrieve(
            'rsli_xxxxxxxxxxxxx'
        );
        expect(valueListItem).not.to.be.null;
    });
});

describe('Radar.ValueLists', function() {
    it('list method', async function() {
        const valueLists = await expressPayments.radar.valueLists.list({
            limit: 3,
        });
        expect(valueLists).not.to.be.null;
    });

    it('create method', async function() {
        const valueList = await expressPayments.radar.valueLists.create({
            alias: 'custom_ip_xxxxxxxxxxxxx',
            name: 'Custom IP Blocklist',
            item_type: 'ip_address',
        });
        expect(valueList).not.to.be.null;
    });

    it('del method', async function() {
        const deleted = await expressPayments.radar.valueLists.del(
            'rsl_xxxxxxxxxxxxx'
        );
        expect(deleted).not.to.be.null;
    });

    it('retrieve method', async function() {
        const valueList = await expressPayments.radar.valueLists.retrieve(
            'rsl_xxxxxxxxxxxxx'
        );
        expect(valueList).not.to.be.null;
    });

    it('update method', async function() {
        const valueList = await expressPayments.radar.valueLists.update(
            'rsl_xxxxxxxxxxxxx',
            {
                name: 'Updated IP Block List',
            }
        );
        expect(valueList).not.to.be.null;
    });
});

describe('Refunds', function() {
    it('list method', async function() {
        const refunds = await expressPayments.refunds.list({
            limit: 3,
        });
        expect(refunds).not.to.be.null;
    });

    it('create method', async function() {
        const refund = await expressPayments.refunds.create({
            charge: 'ch_xxxxxxxxxxxxx',
        });
        expect(refund).not.to.be.null;
    });

    it('retrieve method', async function() {
        const refund = await expressPayments.refunds.retrieve(
            're_xxxxxxxxxxxxx'
        );
        expect(refund).not.to.be.null;
    });

    it('update method', async function() {
        const refund = await expressPayments.refunds.update(
            're_xxxxxxxxxxxxx',
            {
                metadata: {
                    order_id: '6735',
                },
            }
        );
        expect(refund).not.to.be.null;
    });

    it('cancel method', async function() {
        const refund = await expressPayments.refunds.cancel('re_xxxxxxxxxxxxx');
        expect(refund).not.to.be.null;
    });
});

describe('Reporting.ReportRuns', function() {
    it('list method', async function() {
        const reportRuns = await expressPayments.reporting.reportRuns.list({
            limit: 3,
        });
        expect(reportRuns).not.to.be.null;
    });

    it('create method', async function() {
        const reportRun = await expressPayments.reporting.reportRuns.create({
            report_type: 'balance.summary.1',
            parameters: {
                interval_start: 1522540800,
                interval_end: 1525132800,
            },
        });
        expect(reportRun).not.to.be.null;
    });

    it('retrieve method', async function() {
        const reportRun = await expressPayments.reporting.reportRuns.retrieve(
            'frr_xxxxxxxxxxxxx'
        );
        expect(reportRun).not.to.be.null;
    });
});

describe('Reporting.ReportTypes', function() {
    it('list method', async function() {
        const reportTypes = await expressPayments.reporting.reportTypes.list();
        expect(reportTypes).not.to.be.null;
    });

    it('retrieve method', async function() {
        const reportType = await expressPayments.reporting.reportTypes.retrieve(
            'balance.summary.1'
        );
        expect(reportType).not.to.be.null;
    });
});

describe('Reviews', function() {
    it('list method', async function() {
        const reviews = await expressPayments.reviews.list({
            limit: 3,
        });
        expect(reviews).not.to.be.null;
    });

    it('retrieve method', async function() {
        const review = await expressPayments.reviews.retrieve(
            'prv_xxxxxxxxxxxxx'
        );
        expect(review).not.to.be.null;
    });

    it('approve method', async function() {
        const review = await expressPayments.reviews.approve(
            'prv_xxxxxxxxxxxxx'
        );
        expect(review).not.to.be.null;
    });
});

describe('Sigma.ScheduledQueryRuns', function() {
    it('list method', async function() {
        const scheduledQueryRuns = await expressPayments.sigma.scheduledQueryRuns.list(
            {
                limit: 3,
            }
        );
        expect(scheduledQueryRuns).not.to.be.null;
    });

    it('retrieve method', async function() {
        const scheduledQueryRun = await expressPayments.sigma.scheduledQueryRuns.retrieve(
            'sqr_xxxxxxxxxxxxx'
        );
        expect(scheduledQueryRun).not.to.be.null;
    });
});

describe('Sources', function() {
    it('retrieve method', async function() {
        const source = await expressPayments.sources.retrieve(
            'src_xxxxxxxxxxxxx'
        );
        expect(source).not.to.be.null;
    });

    it('retrieve method', async function() {
        const source = await expressPayments.sources.retrieve(
            'src_xxxxxxxxxxxxx'
        );
        expect(source).not.to.be.null;
    });

    it('update method', async function() {
        const source = await expressPayments.sources.update(
            'src_xxxxxxxxxxxxx',
            {
                metadata: {
                    order_id: '6735',
                },
            }
        );
        expect(source).not.to.be.null;
    });
});

describe('SubscriptionItems', function() {
    it('list method', async function() {
        const subscriptionItems = await expressPayments.subscriptionItems.list({
            subscription: 'sub_xxxxxxxxxxxxx',
        });
        expect(subscriptionItems).not.to.be.null;
    });

    it('create method', async function() {
        const subscriptionItem = await expressPayments.subscriptionItems.create(
            {
                subscription: 'sub_xxxxxxxxxxxxx',
                price: 'price_xxxxxxxxxxxxx',
                quantity: 2,
            }
        );
        expect(subscriptionItem).not.to.be.null;
    });

    it('del method', async function() {
        const deleted = await expressPayments.subscriptionItems.del(
            'si_xxxxxxxxxxxxx'
        );
        expect(deleted).not.to.be.null;
    });

    it('retrieve method', async function() {
        const subscriptionItem = await expressPayments.subscriptionItems.retrieve(
            'si_xxxxxxxxxxxxx'
        );
        expect(subscriptionItem).not.to.be.null;
    });

    it('update method', async function() {
        const subscriptionItem = await expressPayments.subscriptionItems.update(
            'si_xxxxxxxxxxxxx',
            {
                metadata: {
                    order_id: '6735',
                },
            }
        );
        expect(subscriptionItem).not.to.be.null;
    });

    it('listUsageRecordSummaries method', async function() {
        const usageRecordSummaries = await expressPayments.subscriptionItems.listUsageRecordSummaries(
            'si_xxxxxxxxxxxxx',
            {
                limit: 3,
            }
        );
        expect(usageRecordSummaries).not.to.be.null;
    });

    it('createUsageRecord method', async function() {
        const usageRecord = await expressPayments.subscriptionItems.createUsageRecord(
            'si_xxxxxxxxxxxxx',
            {
                quantity: 100,
                timestamp: 1571252444,
            }
        );
        expect(usageRecord).not.to.be.null;
    });
});

describe('SubscriptionSchedules', function() {
    it('list method', async function() {
        const subscriptionSchedules = await expressPayments.subscriptionSchedules.list(
            {
                limit: 3,
            }
        );
        expect(subscriptionSchedules).not.to.be.null;
    });

    it('create method', async function() {
        const subscriptionSchedule = await expressPayments.subscriptionSchedules.create(
            {
                customer: 'cus_xxxxxxxxxxxxx',
                start_date: 1676070661,
                end_behavior: 'release',
                phases: [
                    {
                        items: [
                            {
                                price: 'price_xxxxxxxxxxxxx',
                                quantity: 1,
                            },
                        ],
                        iterations: 12,
                    },
                ],
            }
        );
        expect(subscriptionSchedule).not.to.be.null;
    });

    it('retrieve method', async function() {
        const subscriptionSchedule = await expressPayments.subscriptionSchedules.retrieve(
            'sub_sched_xxxxxxxxxxxxx'
        );
        expect(subscriptionSchedule).not.to.be.null;
    });

    it('update method', async function() {
        const subscriptionSchedule = await expressPayments.subscriptionSchedules.update(
            'sub_sched_xxxxxxxxxxxxx',
            {
                end_behavior: 'release',
            }
        );
        expect(subscriptionSchedule).not.to.be.null;
    });

    it('cancel method', async function() {
        const subscriptionSchedule = await expressPayments.subscriptionSchedules.cancel(
            'sub_sched_xxxxxxxxxxxxx'
        );
        expect(subscriptionSchedule).not.to.be.null;
    });

    it('release method', async function() {
        const subscriptionSchedule = await expressPayments.subscriptionSchedules.release(
            'sub_sched_xxxxxxxxxxxxx'
        );
        expect(subscriptionSchedule).not.to.be.null;
    });
});

describe('Subscriptions', function() {
    it('list method', async function() {
        const subscriptions = await expressPayments.subscriptions.list({
            limit: 3,
        });
        expect(subscriptions).not.to.be.null;
    });

    it('create method', async function() {
        const subscription = await expressPayments.subscriptions.create({
            customer: 'cus_xxxxxxxxxxxxx',
            items: [
                {
                    price: 'price_xxxxxxxxxxxxx',
                },
            ],
        });
        expect(subscription).not.to.be.null;
    });

    it('cancel method', async function() {
        const subscription = await expressPayments.subscriptions.cancel(
            'sub_xxxxxxxxxxxxx'
        );
        expect(subscription).not.to.be.null;
    });

    it('retrieve method', async function() {
        const subscription = await expressPayments.subscriptions.retrieve(
            'sub_xxxxxxxxxxxxx'
        );
        expect(subscription).not.to.be.null;
    });

    it('update method', async function() {
        const subscription = await expressPayments.subscriptions.update(
            'sub_xxxxxxxxxxxxx',
            {
                metadata: {
                    order_id: '6735',
                },
            }
        );
        expect(subscription).not.to.be.null;
    });

    it('search method', async function() {
        const subscriptions = await expressPayments.subscriptions.search({
            query: "status:'active' AND metadata['order_id']:'6735'",
        });
        expect(subscriptions).not.to.be.null;
    });
});

describe('TaxCodes', function() {
    it('list method', async function() {
        const taxCodes = await expressPayments.taxCodes.list({
            limit: 3,
        });
        expect(taxCodes).not.to.be.null;
    });

    it('retrieve method', async function() {
        const taxCode = await expressPayments.taxCodes.retrieve(
            'txcd_xxxxxxxxxxxxx'
        );
        expect(taxCode).not.to.be.null;
    });
});

describe('TaxRates', function() {
    it('list method', async function() {
        const taxRates = await expressPayments.taxRates.list({
            limit: 3,
        });
        expect(taxRates).not.to.be.null;
    });

    it('create method', async function() {
        const taxRate = await expressPayments.taxRates.create({
            display_name: 'VAT',
            description: 'VAT Germany',
            jurisdiction: 'DE',
            percentage: 16,
            inclusive: false,
        });
        expect(taxRate).not.to.be.null;
    });

    it('retrieve method', async function() {
        const taxRate = await expressPayments.taxRates.retrieve(
            'txr_xxxxxxxxxxxxx'
        );
        expect(taxRate).not.to.be.null;
    });

    it('update method', async function() {
        const taxRate = await expressPayments.taxRates.update(
            'txr_xxxxxxxxxxxxx',
            {
                active: false,
            }
        );
        expect(taxRate).not.to.be.null;
    });
});

describe('Terminal.ConnectionTokens', function() {
    it('create method', async function() {
        const connectionToken = await expressPayments.terminal.connectionTokens.create();
        expect(connectionToken).not.to.be.null;
    });
});

describe('Terminal.Locations', function() {
    it('list method', async function() {
        const locations = await expressPayments.terminal.locations.list({
            limit: 3,
        });
        expect(locations).not.to.be.null;
    });

    it('create method', async function() {
        const location = await expressPayments.terminal.locations.create({
            display_name: 'My First Store',
            address: {
                line1: '1234 Main Street',
                city: 'San Francisco',
                postal_code: '94111',
                state: 'CA',
                country: 'US',
            },
        });
        expect(location).not.to.be.null;
    });

    it('del method', async function() {
        const deleted = await expressPayments.terminal.locations.del(
            'tml_xxxxxxxxxxxxx'
        );
        expect(deleted).not.to.be.null;
    });

    it('retrieve method', async function() {
        const location = await expressPayments.terminal.locations.retrieve(
            'tml_xxxxxxxxxxxxx'
        );
        expect(location).not.to.be.null;
    });

    it('update method', async function() {
        const location = await expressPayments.terminal.locations.update(
            'tml_xxxxxxxxxxxxx',
            {
                display_name: 'My First Store',
            }
        );
        expect(location).not.to.be.null;
    });
});

describe('Terminal.Readers', function() {
    it('list method', async function() {
        const readers = await expressPayments.terminal.readers.list({
            limit: 3,
        });
        expect(readers).not.to.be.null;
    });

    it('create method', async function() {
        const reader = await expressPayments.terminal.readers.create({
            registration_code: 'puppies-plug-could',
            label: 'Blue Rabbit',
            location: 'tml_1234',
        });
        expect(reader).not.to.be.null;
    });

    it('del method', async function() {
        const deleted = await expressPayments.terminal.readers.del(
            'tmr_xxxxxxxxxxxxx'
        );
        expect(deleted).not.to.be.null;
    });

    it('retrieve method', async function() {
        const reader = await expressPayments.terminal.readers.retrieve(
            'tmr_xxxxxxxxxxxxx'
        );
        expect(reader).not.to.be.null;
    });

    it('update method', async function() {
        const reader = await expressPayments.terminal.readers.update(
            'tmr_xxxxxxxxxxxxx',
            {
                label: 'Blue Rabbit',
            }
        );
        expect(reader).not.to.be.null;
    });

    it('cancelAction method', async function() {
        const reader = await expressPayments.terminal.readers.cancelAction(
            'tmr_xxxxxxxxxxxxx'
        );
        expect(reader).not.to.be.null;
    });

    it('processPaymentIntent method', async function() {
        const reader = await expressPayments.terminal.readers.processPaymentIntent(
            'tmr_xxxxxxxxxxxxx',
            {
                payment_intent: 'pi_xxxxxxxxxxxxx',
            }
        );
        expect(reader).not.to.be.null;
    });

    it('processSetupIntent method', async function() {
        const reader = await expressPayments.terminal.readers.processSetupIntent(
            'tmr_xxxxxxxxxxxxx',
            {
                setup_intent: 'seti_xxxxxxxxxxxxx',
                customer_consent_collected: true,
            }
        );
        expect(reader).not.to.be.null;
    });
});

describe('Topups', function() {
    it('list method', async function() {
        const topups = await expressPayments.topups.list({
            limit: 3,
        });
        expect(topups).not.to.be.null;
    });

    it('create method', async function() {
        const topup = await expressPayments.topups.create({
            amount: 2000,
            currency: 'usd',
            description: 'Top-up for Jenny Rosen',
            statement_descriptor: 'Top-up',
        });
        expect(topup).not.to.be.null;
    });

    it('retrieve method', async function() {
        const topup = await expressPayments.topups.retrieve('tu_xxxxxxxxxxxxx');
        expect(topup).not.to.be.null;
    });

    it('update method', async function() {
        const topup = await expressPayments.topups.update('tu_xxxxxxxxxxxxx', {
            metadata: {
                order_id: '6735',
            },
        });
        expect(topup).not.to.be.null;
    });

    it('cancel method', async function() {
        const topup = await expressPayments.topups.cancel('tu_xxxxxxxxxxxxx');
        expect(topup).not.to.be.null;
    });
});

describe('Transfers', function() {
    it('list method', async function() {
        const transfers = await expressPayments.transfers.list({
            limit: 3,
        });
        expect(transfers).not.to.be.null;
    });

    it('create method', async function() {
        const transfer = await expressPayments.transfers.create({
            amount: 400,
            currency: 'usd',
            destination: 'acct_xxxxxxxxxxxxx',
            transfer_group: 'ORDER_95',
        });
        expect(transfer).not.to.be.null;
    });

    it('retrieve method', async function() {
        const transfer = await expressPayments.transfers.retrieve(
            'tr_xxxxxxxxxxxxx'
        );
        expect(transfer).not.to.be.null;
    });

    it('update method', async function() {
        const transfer = await expressPayments.transfers.update(
            'tr_xxxxxxxxxxxxx',
            {
                metadata: {
                    order_id: '6735',
                },
            }
        );
        expect(transfer).not.to.be.null;
    });

    it('listReversals method', async function() {
        const transferReversals = await expressPayments.transfers.listReversals(
            'tr_xxxxxxxxxxxxx',
            {
                limit: 3,
            }
        );
        expect(transferReversals).not.to.be.null;
    });

    it('createReversal method', async function() {
        const transferReversal = await expressPayments.transfers.createReversal(
            'tr_xxxxxxxxxxxxx',
            {
                amount: 100,
            }
        );
        expect(transferReversal).not.to.be.null;
    });

    it('retrieveReversal method', async function() {
        const transferReversal = await expressPayments.transfers.retrieveReversal(
            'tr_xxxxxxxxxxxxx',
            'trr_xxxxxxxxxxxxx'
        );
        expect(transferReversal).not.to.be.null;
    });

    it('updateReversal method', async function() {
        const transferReversal = await expressPayments.transfers.updateReversal(
            'tr_xxxxxxxxxxxxx',
            'trr_xxxxxxxxxxxxx',
            {
                metadata: {
                    order_id: '6735',
                },
            }
        );
        expect(transferReversal).not.to.be.null;
    });
});

describe('Treasury.CreditReversals', function() {
    it('list method', async function() {
        const creditReversals = await expressPayments.treasury.creditReversals.list(
            {
                financial_account: 'fa_xxxxxxxxxxxxx',
                limit: 3,
            }
        );
        expect(creditReversals).not.to.be.null;
    });

    it('create method', async function() {
        const creditReversal = await expressPayments.treasury.creditReversals.create(
            {
                received_credit: 'rc_xxxxxxxxxxxxx',
            }
        );
        expect(creditReversal).not.to.be.null;
    });

    it('retrieve method', async function() {
        const creditReversal = await expressPayments.treasury.creditReversals.retrieve(
            'credrev_xxxxxxxxxxxxx'
        );
        expect(creditReversal).not.to.be.null;
    });
});

describe('Treasury.DebitReversals', function() {
    it('list method', async function() {
        const debitReversals = await expressPayments.treasury.debitReversals.list(
            {
                financial_account: 'fa_xxxxxxxxxxxxx',
                limit: 3,
            }
        );
        expect(debitReversals).not.to.be.null;
    });

    it('create method', async function() {
        const debitReversal = await expressPayments.treasury.debitReversals.create(
            {
                received_debit: 'rd_xxxxxxxxxxxxx',
            }
        );
        expect(debitReversal).not.to.be.null;
    });

    it('retrieve method', async function() {
        const debitReversal = await expressPayments.treasury.debitReversals.retrieve(
            'debrev_xxxxxxxxxxxxx'
        );
        expect(debitReversal).not.to.be.null;
    });
});

describe('Treasury.FinancialAccounts', function() {
    it('list method', async function() {
        const financialAccounts = await expressPayments.treasury.financialAccounts.list(
            {
                limit: 3,
            }
        );
        expect(financialAccounts).not.to.be.null;
    });

    it('create method', async function() {
        const financialAccount = await expressPayments.treasury.financialAccounts.create(
            {
                supported_currencies: ['usd'],
                features: {},
            }
        );
        expect(financialAccount).not.to.be.null;
    });

    it('retrieve method', async function() {
        const financialAccount = await expressPayments.treasury.financialAccounts.retrieve(
            'fa_xxxxxxxxxxxxx'
        );
        expect(financialAccount).not.to.be.null;
    });

    it('update method', async function() {
        const financialAccount = await expressPayments.treasury.financialAccounts.update(
            'fa_xxxxxxxxxxxxx',
            {
                metadata: {
                    order_id: '6735',
                },
            }
        );
        expect(financialAccount).not.to.be.null;
    });

    it('retrieveFeatures method', async function() {
        const financialAccountFeatures = await expressPayments.treasury.financialAccounts.retrieveFeatures(
            'fa_xxxxxxxxxxxxx'
        );
        expect(financialAccountFeatures).not.to.be.null;
    });
});

describe('Treasury.InboundTransfers', function() {
    it('list method', async function() {
        const inboundTransfers = await expressPayments.treasury.inboundTransfers.list(
            {
                financial_account: 'fa_xxxxxxxxxxxxx',
                limit: 3,
            }
        );
        expect(inboundTransfers).not.to.be.null;
    });

    it('create method', async function() {
        const inboundTransfer = await expressPayments.treasury.inboundTransfers.create(
            {
                financial_account: 'fa_xxxxxxxxxxxxx',
                amount: 10000,
                currency: 'usd',
                origin_payment_method: 'pm_xxxxxxxxxxxxx',
                description: 'InboundTransfer from my bank account',
            }
        );
        expect(inboundTransfer).not.to.be.null;
    });

    it('retrieve method', async function() {
        const inboundTransfer = await expressPayments.treasury.inboundTransfers.retrieve(
            'ibt_xxxxxxxxxxxxx'
        );
        expect(inboundTransfer).not.to.be.null;
    });

    it('cancel method', async function() {
        const inboundTransfer = await expressPayments.treasury.inboundTransfers.cancel(
            'ibt_xxxxxxxxxxxxx'
        );
        expect(inboundTransfer).not.to.be.null;
    });
});

describe('Treasury.OutboundPayments', function() {
    it('list method', async function() {
        const outboundPayments = await expressPayments.treasury.outboundPayments.list(
            {
                financial_account: 'fa_xxxxxxxxxxxxx',
                limit: 3,
            }
        );
        expect(outboundPayments).not.to.be.null;
    });

    it('create method', async function() {
        const outboundPayment = await expressPayments.treasury.outboundPayments.create(
            {
                financial_account: 'fa_xxxxxxxxxxxxx',
                amount: 10000,
                currency: 'usd',
                customer: 'cus_xxxxxxxxxxxxx',
                destination_payment_method: 'pm_xxxxxxxxxxxxx',
                description: 'OutboundPayment to a 3rd party',
            }
        );
        expect(outboundPayment).not.to.be.null;
    });

    it('retrieve method', async function() {
        const outboundPayment = await expressPayments.treasury.outboundPayments.retrieve(
            'bot_xxxxxxxxxxxxx'
        );
        expect(outboundPayment).not.to.be.null;
    });

    it('cancel method', async function() {
        const outboundPayment = await expressPayments.treasury.outboundPayments.cancel(
            'bot_xxxxxxxxxxxxx'
        );
        expect(outboundPayment).not.to.be.null;
    });
});

describe('Treasury.OutboundTransfers', function() {
    it('list method', async function() {
        const outboundTransfers = await expressPayments.treasury.outboundTransfers.list(
            {
                financial_account: 'fa_xxxxxxxxxxxxx',
                limit: 3,
            }
        );
        expect(outboundTransfers).not.to.be.null;
    });

    it('create method', async function() {
        const outboundTransfer = await expressPayments.treasury.outboundTransfers.create(
            {
                financial_account: 'fa_xxxxxxxxxxxxx',
                destination_payment_method: 'pm_xxxxxxxxxxxxx',
                amount: 500,
                currency: 'usd',
                description: 'OutboundTransfer to my external bank account',
            }
        );
        expect(outboundTransfer).not.to.be.null;
    });

    it('retrieve method', async function() {
        const outboundTransfer = await expressPayments.treasury.outboundTransfers.retrieve(
            'obt_xxxxxxxxxxxxx'
        );
        expect(outboundTransfer).not.to.be.null;
    });

    it('cancel method', async function() {
        const outboundTransfer = await expressPayments.treasury.outboundTransfers.cancel(
            'obt_xxxxxxxxxxxxx'
        );
        expect(outboundTransfer).not.to.be.null;
    });
});

describe('Treasury.ReceivedCredits', function() {
    it('list method', async function() {
        const receivedCredits = await expressPayments.treasury.receivedCredits.list(
            {
                financial_account: 'fa_xxxxxxxxxxxxx',
                limit: 3,
            }
        );
        expect(receivedCredits).not.to.be.null;
    });

    it('retrieve method', async function() {
        const receivedCredit = await expressPayments.treasury.receivedCredits.retrieve(
            'rc_xxxxxxxxxxxxx'
        );
        expect(receivedCredit).not.to.be.null;
    });
});

describe('Treasury.ReceivedDebits', function() {
    it('list method', async function() {
        const receivedDebits = await expressPayments.treasury.receivedDebits.list(
            {
                financial_account: 'fa_xxxxxxxxxxxxx',
                limit: 3,
            }
        );
        expect(receivedDebits).not.to.be.null;
    });

    it('retrieve method', async function() {
        const receivedDebit = await expressPayments.treasury.receivedDebits.retrieve(
            'rd_xxxxxxxxxxxxx'
        );
        expect(receivedDebit).not.to.be.null;
    });
});

describe('Treasury.TransactionEntries', function() {
    it('list method', async function() {
        const transactionEntries = await expressPayments.treasury.transactionEntries.list(
            {
                financial_account: 'fa_xxxxxxxxxxxxx',
                limit: 3,
            }
        );
        expect(transactionEntries).not.to.be.null;
    });

    it('retrieve method', async function() {
        const transactionEntry = await expressPayments.treasury.transactionEntries.retrieve(
            'trxne_xxxxxxxxxxxxx'
        );
        expect(transactionEntry).not.to.be.null;
    });
});

describe('Treasury.Transactions', function() {
    it('list method', async function() {
        const transactions = await expressPayments.treasury.transactions.list({
            financial_account: 'fa_xxxxxxxxxxxxx',
            limit: 3,
        });
        expect(transactions).not.to.be.null;
    });

    it('retrieve method', async function() {
        const transaction = await expressPayments.treasury.transactions.retrieve(
            'trxn_xxxxxxxxxxxxx'
        );
        expect(transaction).not.to.be.null;
    });
});

describe('WebhookEndpoints', function() {
    it('list method', async function() {
        const webhookEndpoints = await expressPayments.webhookEndpoints.list({
            limit: 3,
        });
        expect(webhookEndpoints).not.to.be.null;
    });

    it('create method', async function() {
        const webhookEndpoint = await expressPayments.webhookEndpoints.create({
            url: 'https://example.com/my/webhook/endpoint',
            enabled_events: ['charge.failed', 'charge.succeeded'],
        });
        expect(webhookEndpoint).not.to.be.null;
    });

    it('del method', async function() {
        const deleted = await expressPayments.webhookEndpoints.del(
            'we_xxxxxxxxxxxxx'
        );
        expect(deleted).not.to.be.null;
    });

    it('retrieve method', async function() {
        const webhookEndpoint = await expressPayments.webhookEndpoints.retrieve(
            'we_xxxxxxxxxxxxx'
        );
        expect(webhookEndpoint).not.to.be.null;
    });

    it('update method', async function() {
        const webhookEndpoint = await expressPayments.webhookEndpoints.update(
            'we_xxxxxxxxxxxxx',
            {
                url: 'https://example.com/new_endpoint',
            }
        );
        expect(webhookEndpoint).not.to.be.null;
    });
});

describe('Tax.Transactions', function() {
    it('createFromCalculation method', async function() {
        const transaction = await expressPayments.tax.transactions.createFromCalculation(
            {
                calculation: 'xxx',
                reference: 'yyy',
            }
        );
        expect(transaction).not.to.be.null;
    });
});

describe('Tax.Calculations', function() {
    it('listLineItems method', async function() {
        const calculationLineItems = await expressPayments.tax.calculations.listLineItems(
            'xxx'
        );
        expect(calculationLineItems).not.to.be.null;
    });

    it('create method', async function() {
        const calculation = await expressPayments.tax.calculations.create({
            currency: 'usd',
            line_items: [
                {
                    amount: 1000,
                    reference: 'L1',
                },
            ],
            customer_details: {
                address: {
                    line1: '354 Oyster Point Blvd',
                    city: 'South San Francisco',
                    state: 'CA',
                    postal_code: '94080',
                    country: 'US',
                },
                address_source: 'shipping',
            },
        });
        expect(calculation).not.to.be.null;
    });
});
