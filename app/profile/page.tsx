import { fontOswald } from "@/config/fonts";
import { clsx } from "clsx";

export default function ProfilePage() {

    return (

        <div className="flex flex-row p-8 h-96 w-full justify-center content-center">

            <div className="flex flex-row justify-center items-center py-4 h-100">
                <h1 className={clsx(
                    "title text-4xl text-slate-200",
                    fontOswald.className,
                )}>
                    Ingénieur Développement Full Stack
                </h1>
            </div>
        </div>
    )
}