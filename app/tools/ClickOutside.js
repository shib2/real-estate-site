'use client';

import React, { useRef, useEffect } from 'react';

const ClickOutside = ({ children, onClickOutside }) => {
    const wrapperRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                onClickOutside();
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);

        // Unbind the event listener on cleanup
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClickOutside]);

    return <div ref={wrapperRef}>{children}</div>;
};

export default ClickOutside;
