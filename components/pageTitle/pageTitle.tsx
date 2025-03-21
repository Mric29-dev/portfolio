import { fontPoppins } from "@/config/fonts";
import { clsx } from "clsx";

/**
 * Page title section
 */
export function PageTitle(params: { title: string, subtitle?: string, invert?: boolean }) {

    return (
        <div className={clsx(params.invert ? "flex-col-reverse" : "flex-col", " flex justify-center items-center w-full pt-6")}>
            {params.subtitle &&
                <div className="text-slate-400 text-sm font-medium tracking-wide pointer-events-none mb-2">
                    {params.subtitle}
                </div>
            }
            <h2 className={clsx(
                "text-secondary text-3xl tracking-wider font-semibold pointer-events-none",
                fontPoppins.className,
            )}>
                {params.title}
            </h2>
        </div >
    )
}
