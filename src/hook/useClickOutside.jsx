import {useEffect} from "react";

export const useClickOutside = (reference, callback) => {
    const handelClick = (e) => {
        if(reference.current && !reference.current.contains(e.target)) {
            callback();
        }

    };
    useEffect(() => {
        document.addEventListener('mousedown', handelClick);
        return () => {
            document.removeEventListener('mousedown', handelClick)
        };
    });
}