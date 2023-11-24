// ResourceNamespace allows you to create nested resources, i.e. `expresspayments.issuing.cards`.

import {ExpressPaymentsObject, ExpressPaymentsResourceObject} from './Types.js';

export type ExpressPaymentsResourceNamespaceObject = {
    [key: string]:
        | ExpressPaymentsResourceObject
        | ExpressPaymentsResourceNamespaceObject;
};

// It also works recursively, so you could do i.e. `expresspayments.billing.invoicing.pay`.
function ResourceNamespace(
    this: ExpressPaymentsResourceNamespaceObject,
    ExpressPayments: ExpressPaymentsObject,
    resources: Record<
        string,
        new (...args: any[]) =>
            | ExpressPaymentsResourceObject
            | ExpressPaymentsResourceNamespaceObject
    >
): void {
    for (const name in resources) {
        const camelCaseName = name[0].toLowerCase() + name.substring(1);

        const resource = new resources[name](ExpressPayments);

        this[camelCaseName] = resource;
    }
}

export function resourceNamespace(
    namespace: string,
    resources: Record<
        string,
        new (...args: any[]) =>
            | ExpressPaymentsResourceObject
            | ExpressPaymentsResourceNamespaceObject
    >
): new (
    expressPayments: ExpressPaymentsObject
) => ExpressPaymentsResourceNamespaceObject {
    return function(
        expressPayments: ExpressPaymentsObject
    ): ExpressPaymentsResourceNamespaceObject {
        return new (ResourceNamespace as any)(expressPayments, resources);
    } as any;
}
