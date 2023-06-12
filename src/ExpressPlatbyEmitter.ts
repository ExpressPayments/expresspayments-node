import {RequestEvent, ResponseEvent} from './Types.js';

/**
 * @private
 * (For internal use in expressplatby-node.)
 * Wrapper around the Event Web API.
 */
class _ExpressPlatbyEvent extends Event {
    data?: RequestEvent | ResponseEvent;

    constructor(eventName: string, data: any) {
        super(eventName);
        this.data = data;
    }
}

type Listener = (...args: any[]) => any;
type ListenerWrapper = (event: _ExpressPlatbyEvent) => void;

/** Minimal EventEmitter wrapper around EventTarget. */
export class ExpressPlatbyEmitter {
    eventTarget: EventTarget;
    listenerMapping: Map<Listener, ListenerWrapper>;

    constructor() {
        this.eventTarget = new EventTarget();
        this.listenerMapping = new Map();
    }

    on(eventName: string, listener: Listener): void {
        const listenerWrapper: ListenerWrapper = (
            event: _ExpressPlatbyEvent
        ): void => {
            listener(event.data);
        };
        this.listenerMapping.set(listener, listenerWrapper);
        return this.eventTarget.addEventListener(eventName, listenerWrapper);
    }

    removeListener(eventName: string, listener: Listener): void {
        const listenerWrapper = this.listenerMapping.get(listener);
        this.listenerMapping.delete(listener);
        return this.eventTarget.removeEventListener(
            eventName,
            listenerWrapper!
        );
    }

    once(eventName: string, listener: Listener): void {
        const listenerWrapper: ListenerWrapper = (
            event: _ExpressPlatbyEvent
        ): void => {
            listener(event.data);
        };
        this.listenerMapping.set(listener, listenerWrapper);
        return this.eventTarget.addEventListener(eventName, listenerWrapper, {
            once: true,
        });
    }

    emit(eventName: string, data: RequestEvent | ResponseEvent): boolean {
        return this.eventTarget.dispatchEvent(
            new _ExpressPlatbyEvent(eventName, data)
        );
    }
}
