"use client";

import { CursorTracker } from "@/components/cursorTracker/cursorTracker";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar/navbar";
import UpScrollArrow from "@/components/upScrollArrow/upScrollArrow";
import { fontMono, fontOswald, fontOverlock, fontSans, fontShippori, fontSpinnaker } from "@/config/fonts";
import clsx from "clsx";
import { useRef } from "react";
import { Toaster } from "react-hot-toast";
import "./styles/global.css";

export const fonts = {
    sans: fontSans.style.fontFamily,
    mono: fontMono.style.fontFamily,
    spinnaker: fontSpinnaker.style.fontFamily,
    overlock: fontOverlock.style.fontFamily,
    oswald: fontOswald.style.fontFamily,
    shippori: fontShippori.style.fontFamily,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const scrollContainer = useRef(null);

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
                    {children}
                    <Footer />
                </div>

                <UpScrollArrow elementToScroll={scrollContainer} />
            </body>
        </html>
    )
}