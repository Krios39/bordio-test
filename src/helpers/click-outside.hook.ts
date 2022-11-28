import { RefObject, useEffect } from 'react';

export type AnyClickEvent = MouseEvent | TouchEvent;

export function addClickOutside(
    ref: RefObject<HTMLElement>,
    handler: (event: AnyClickEvent) => void
) {
    const listener = (event: AnyClickEvent) => {
        if (!ref.current || ref.current!.contains(event.target as HTMLElement)) {
            return;
        }
        handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return listener;
}

export function removeClickOutside(listener: (event: AnyClickEvent) => void) {
    document.removeEventListener('mousedown', listener);
    document.removeEventListener('touchstart', listener);
}

export function useOnClickOutside(ref: any, handler: any, enabled: boolean = true) {
    useEffect(() => {
        if (enabled) {
            const handle = addClickOutside(ref, handler);
            return () => removeClickOutside(handle);
        }
        return () => {
        };
    }, [ref, handler, enabled]);
}
