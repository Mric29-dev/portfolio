import { fontSpinnaker } from "@/config/fonts"
import { siteConfig } from "@/config/site"
import { Button } from "@heroui/react"
import clsx from "clsx"
import ScrollLink from "./scrollLink/scrollLink"

export const Footer = () => {

    const navLinks: string[] = [
        "about",
        "portfolio"
    ];

    return (
        <footer className={clsx(
            "w-full flex items-center border-t-2 border-t-blue-700 justify-center content-center min-h-20 text-primary py-6",
            fontSpinnaker.className,
        )}
        >
            <div className="flex flex-col pb-6 items-center">
                <div className="flex flex-row justify-center gap-4 py-4 font-medium w-full">
                    {siteConfig.navItems.filter(item => navLinks.includes(item.href)).map((item) => (
                        <Button key={item.href} radius="md" variant="ghost" color="primary">
                            <ScrollLink id={item.href} >{item.label}</ScrollLink>
                        </Button>
                    ))}
                </div>

                <h5 className="mx-2 text-center">© aymericmaingant.com - 2025. All rights reserved</h5>
            </div>
        </footer>
    )
}


