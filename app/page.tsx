import { siteConfig } from "@/config/site";
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
                <section id={item.href} key={item.href} className="min-h-screen">
                    {item.page?.()}
                </section>
            ))
        }
    </>
}