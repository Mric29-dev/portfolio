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
                    "min-h-screen",
                    item.flex ? "flex" : "",
                )}>
                    {item.page?.()}
                </section>
            ))
        }
    </>
}