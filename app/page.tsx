import { siteConfig } from "@/config/site";
import clsx from "clsx";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: siteConfig.name,
    description: siteConfig.description,
    icons: {
        icon: '/favicon.ico'
    }
}

export default function Page() {


    return <>
        {
            siteConfig.navItems.map((item) => (
                <section id={item.href} key={item.href} className={clsx(
                    item.hScreen ? "min-h-screen" : "min-h-[75vh]",
                    item.flex ? "flex" : "",
                )}>
                    {item.page?.()}
                </section>
            ))
        }
    </>
}