"use client";

import { ScrollContext } from '@/lib/scrollContext';
import clsx from 'clsx';
import { useContext, useEffect, useState } from 'react';
import classes from './mouseScrollIndicator.module.css';

export default function MouseScrollIndicator(props: { className: string }) {

    const scrollContext = useContext(ScrollContext);

    const VISIBLE_PERCENT_TRIGGER = 3;// %
    const [isVisible, setVisible] = useState(true);

    useEffect(() => {
        const elt = scrollContext as HTMLElement | null;
        if (!elt) { return }

        const onScroll = () => updateIsVisible();
        // Add and remove scroll listener
        elt.addEventListener("scroll", onScroll)
        return () => elt.removeEventListener("scroll", onScroll);
    });

    /** Update isVisible state, if scroll value is more than 5%, show upToPage button */
    function updateIsVisible() {
        const elt = scrollContext as HTMLElement | null;
        if (!elt) { return }

        // Define scroll values
        const eltHeight = elt.scrollHeight - elt.clientHeight;
        const eltScroll = elt.scrollTop;

        // Compute scroll percent
        const percent = Math.round(eltScroll / eltHeight * 100);

        // Update visibility from trigger
        setVisible(percent < VISIBLE_PERCENT_TRIGGER);
    }


    /** Callback when mouse is clicked, scroll to services section */
    function onMouseClick() {
        const elt = scrollContext as HTMLElement | null;
        if (!elt) { return }

        const element = document.getElementById("services");
        element?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <div className={clsx(props.className, isVisible ? "visible" : "invisible", "flex flex-col flex-wrap content-center justify-end h-full pb-24")}>
                <div className={classes.mouse} onClick={onMouseClick}>
                    <div className={classes["mouse-icon"]}>
                        <span className={classes["mouse-wheel"]}></span>
                    </div>
                </div>
                <div className={clsx(classes.arrow, "flex flex-row content-center justify-center mt-2")}>
                    <div className={classes["arrow-top"]}></div>
                    <div className={classes["arrow-bottom"]}></div>
                </div>
                <div className={clsx(classes.arrow, "flex flex-row content-center justify-center")}>
                    <div className={classes["arrow-top"]}></div>
                    <div className={classes["arrow-bottom"]}></div>
                </div>
            </div>
        </>
    )
}