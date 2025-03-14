import { useEffect, useState } from "react";

/**
 * Tracker of mouse cursor
 */
export function CursorTracker() {

    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    function updateCursorPos(x: number, y: number): void {
        setCursorPos({ x, y });
    }

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => updateCursorPos(e.clientX, e.clientY);

        // Add and remove scroll listener
        window.addEventListener("mousemove", onMouseMove);
        return () => window.removeEventListener("mousemove", onMouseMove);
    });


    function getBackground(): string {
        return `radial-gradient(120px at ${cursorPos.x}px ${cursorPos.y}px, rgba(29, 79, 216, 0.1), transparent 80%)`;
    }

    return (
        <div
            className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
            style={{
                background: getBackground(),
            }}>
        </div>
    )
}
