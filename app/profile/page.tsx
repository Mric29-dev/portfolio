import MouseScrollIndicator from "@/components/mouseScrollIndicator/mouseScrollIndicator";
import { ParallaxBubbles } from "@/components/parallaxBubbles/parallaxBubbles";
import { fontOswald } from "@/config/fonts";
import { clsx } from "clsx";

export default function ProfilePage() {

    return (
        <div className="flex flex-col w-full justify-center relative h-[calc(100%-64px)]">
            <ParallaxBubbles />
            <div className="flex flex-col p-8 mt-8 h-96 w-full justify-center content-center">

                <div className="flex flex-row justify-center items-center py-4">
                    <h3 className={clsx(
                        "title text-2xl text-slate-200",
                        fontOswald.className,
                    )}>
                        Aymeric Maingant
                    </h3>
                </div>

                <div className="flex flex-row justify-center items-center py-2 h-100">

                    <h1 className={clsx(
                        "title text-5xl text-slate-200",
                        fontOswald.className,
                    )}>
                        Ingénieur Développement Full Stack
                    </h1>
                </div>

            </div>

            <MouseScrollIndicator className="mt-auto" />
        </div>
    )
}