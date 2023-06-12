.PHONY: codegen-format update-version test ci-test
update-version:
	@echo "$(VERSION)" > VERSION
	@perl -pi -e 's|"version": "[.\-\d\w]+"|"version": "$(VERSION)"|' package.json
	@perl -pi -e "s|ExpressPlatby.PACKAGE_VERSION = '[.\-\d\w]+'|ExpressPlatby.PACKAGE_VERSION = '$(VERSION)'|" src/expressplatby.core.ts

codegen-format:
	yarn && yarn fix

ci-test:
	yarn && yarn test

test: ci-test
