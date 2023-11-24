.PHONY: codegen-format update-version test ci-test
update-version:
	@echo "$(VERSION)" > VERSION
	@perl -pi -e 's|"version": "[.\-\d\w]+"|"version": "$(VERSION)"|' package.json
	@perl -pi -e "s|ExpressPayments.PACKAGE_VERSION = '[.\-\d\w]+'|ExpressPayments.PACKAGE_VERSION = '$(VERSION)'|" src/expresspayments.core.ts

codegen-format:
	yarn && yarn fix

ci-test:
	yarn && yarn test

test: ci-test
