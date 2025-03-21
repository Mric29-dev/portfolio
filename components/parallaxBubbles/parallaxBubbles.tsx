"use client";

import { ReactElement, useLayoutEffect, useRef, useState } from "react";
import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";


/**
 * Track mouse to add parallax effect on mouse move
 */
export function ParallaxBubbles() {

    const parallaxContainer = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        const container = parallaxContainer.current as HTMLElement | null;
        if (!container) { return; }
        setDimensions({
            width: container.clientWidth,
            height: container.clientHeight
        });
    }, []);

    function buildPoint(sizeValue: number = 30, colorClass: string = "bg-primary"): ReactElement {
        const classes = "rounded-full opacity-25 blur-sm " + colorClass;
        const value = `${sizeValue}px`;
        return (
            <div className={classes} style={{ height: value, width: value }}></div>
        )
    }

    function getYOffset(yPercent: number): number {
        const height = dimensions.height;
        return height * yPercent / 100;
    }

    const points: ParallaxPoint[] = [
        {
            x: 80,
            y: 20,
            factorX: 0.8,
            factorY: 0.9,
            size: 90,
            colorClass: "bg-secondary"
        },
        {
            x: 10,
            y: 40,
            factorX: 0.7,
            factorY: 0.6,
            size: 70
        },
        {
            x: 50,
            y: 10,
            factorX: 0.5,
            factorY: 0.8,
            size: 40,
            colorClass: "bg-pink-800"
        },
        {
            x: 10,
            y: -20,
            factorX: 0.6,
            factorY: 0.6,
            size: 30,
            colorClass: "bg-sky-800"
        },
        {
            x: -25,
            y: -10,
            factorX: 0.3,
            factorY: 0.3,
            size: 40,
            colorClass: "bg-yellow-600"
        },
        {
            x: 67,
            y: 25,
            factorX: 0.25,
            factorY: 0.25,
            size: 35,
            colorClass: "bg-emerald-600"
        },
        {
            x: 45,
            y: -40,
            factorX: 0.2,
            factorY: 0.2,
            size: 22,
            colorClass: "bg-amber-600"
        },
        {
            x: 37,
            y: 0,
            factorX: 0.22,
            factorY: 0.22,
            size: 30,
            colorClass: "bg-violet-800"
        },
        {
            x: 60,
            y: 35,
            factorX: 0.1,
            factorY: 0.1,
            size: 15,
            colorClass: "bg-slate-600"
        },
        {
            x: 20,
            y: -20,
            factorX: 0.1,
            factorY: 0.1,
            size: 15,
            colorClass: "bg-red-400"
        }
    ]

    return (
        <div className="!absolute w-full h-full z-0" ref={parallaxContainer}>
            <MouseParallaxContainer globalFactorX={0.25} globalFactorY={0.25} className="w-full h-full">
                {
                    ...points.map((p, i) => {
                        return (
                            <MouseParallaxChild {...p} key={i} style={{ transform: `translate3d(${p.x}%, ${getYOffset(p.y)}px, 0px)` }}>
                                {buildPoint(p.size, p.colorClass)}
                            </MouseParallaxChild>
                        )
                    })
                }
            </MouseParallaxContainer>
        </div>
    )
}


interface ParallaxPoint {
    factorX: number;
    factorY: number;
    colorClass?: string;
    size?: number;
    x: number;
    y: number;
}