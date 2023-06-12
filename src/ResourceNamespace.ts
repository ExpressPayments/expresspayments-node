// ResourceNamespace allows you to create nested resources, i.e. `expressplatby.issuing.cards`.

import {ExpressPlatbyObject, ExpressPlatbyResourceObject} from './Types.js';

export type ExpressPlatbyResourceNamespaceObject = {
    [key: string]:
        | ExpressPlatbyResourceObject
        | ExpressPlatbyResourceNamespaceObject;
};

// It also works recursively, so you could do i.e. `expressplatby.billing.invoicing.pay`.
function ResourceNamespace(
    this: ExpressPlatbyResourceNamespaceObject,
    expressPlatby: ExpressPlatbyObject,
    resources: Record<
        string,
        new (...args: any[]) =>
            | ExpressPlatbyResourceObject
            | ExpressPlatbyResourceNamespaceObject
    >
): void {
    for (const name in resources) {
        const camelCaseName = name[0].toLowerCase() + name.substring(1);

        const resource = new resources[name](expressPlatby);

        this[camelCaseName] = resource;
    }
}

export function resourceNamespace(
    namespace: string,
    resources: Record<
        string,
        new (...args: any[]) =>
            | ExpressPlatbyResourceObject
            | ExpressPlatbyResourceNamespaceObject
    >
): new (
    expressPlatby: ExpressPlatbyObject
) => ExpressPlatbyResourceNamespaceObject {
    return function(
        expressPlatby: ExpressPlatbyObject
    ): ExpressPlatbyResourceNamespaceObject {
        return new (ResourceNamespace as any)(expressPlatby, resources);
    } as any;
}
