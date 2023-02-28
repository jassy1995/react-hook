import { useRef } from 'react';
import useEventListener from "./useEventListener";

export default function useClickOutside(callback) {
    const ref = useRef();

    const handleClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            callback();
        }
    };

    useEventListener('mousedown', handleClick);

    return ref;
};
