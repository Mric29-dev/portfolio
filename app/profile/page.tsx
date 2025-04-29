import MouseScrollIndicator from "@/components/mouseScrollIndicator/mouseScrollIndicator";
import { ParallaxBubbles } from "@/components/parallaxBubbles/parallaxBubbles";
import { fontOswald } from "@/config/fonts";
import { clsx } from "clsx";
import classes from "./profilePage.module.css";

export default function ProfilePage() {

    return (
        <div className="flex flex-col w-full justify-center relative min-h-[calc(100%-64px)]">
            <ParallaxBubbles />
            <div className="flex flex-col px-8 h-100 w-full justify-center content-center -translate-y-20">

                <div className="flex flex-col justify-center text-center items-center py-4">
                    <h3 className={clsx(
                        "title text-2xl text-slate-200 pb-4",
                        fontOswald.className,
                    )}>Hello, je suis
                    </h3>
                    <h3 className={clsx(
                        "title text-5xl text-slate-200",
                        fontOswald.className,
                    )}>
                        Aymeric Maingant
                    </h3>
                </div>

                <div className="flex flex-row justify-center items-center text-center py-2 h-100">

                    <h1 className={clsx(
                        "title text-3xl text-slate-300",
                        fontOswald.className,
                    )}>
                        Ingénieur Développement Full Stack
                    </h1>
                </div>

            </div>

            <MouseScrollIndicator className={clsx(classes["mouse-scroll"], "absolute bottom-4")} />
        </div>
    )
}