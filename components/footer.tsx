import { fontSpinnaker } from "@/config/fonts"
import clsx from "clsx"

export const Footer = () => {

    return (
        <footer className={clsx(
            "w-full flex items-center border-t-2 justify-center content-center min-h-20 text-primary",
            fontSpinnaker.className,
        )}
        >
        </footer>
    )
}


