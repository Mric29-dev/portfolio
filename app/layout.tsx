"use client";

import { CursorTracker } from "@/components/cursorTracker/cursorTracker";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar/navbar";
import UpScrollArrow from "@/components/upScrollArrow/upScrollArrow";
import { fontMono, fontOswald, fontOverlock, fontPoppins, fontSans, fontShippori, fontSpinnaker } from "@/config/fonts";
import { ScrollContext } from "@/lib/scrollContext";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { Toaster } from "react-hot-toast";
import "./styles/global.css";

export const fonts = {
    sans: fontSans.style.fontFamily,
    mono: fontMono.style.fontFamily,
    spinnaker: fontSpinnaker.style.fontFamily,
    overlock: fontOverlock.style.fontFamily,
    oswald: fontOswald.style.fontFamily,
    shippori: fontShippori.style.fontFamily,
    poppins: fontPoppins.style.fontFamily,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const scrollContainer = useRef(null);
    const [ref_state, setRefState] = useState(null);

    useEffect(() => {
        if (!scrollContainer.current) {
            return;
        }

        setRefState(scrollContainer.current)
    }, []);

    return (
        <html lang="fr">
            <body
                className={clsx(
                    "flex dark flex-col h-screen text-foreground bg-background font-sans antialiased",
                    fontSans.variable,
                )}
            >
                {/* Add toast to app */}
                <Toaster position="bottom-right" />

                <Navbar />
                <CursorTracker />

                <div ref={scrollContainer} className="overflow-auto mb-auto">
                    <ScrollContext value={scrollContainer.current}>
                        {children}
                    </ScrollContext>
                    <Footer />
                </div>

                <UpScrollArrow elementToScroll={scrollContainer} />
            </body>
        </html>
    )
}