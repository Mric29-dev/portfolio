"use client";

import { fontPoppins } from "@/config/fonts";
import clsx from "clsx";
import SkillPill, { SkillPillParam } from "../skillPill/skillPill";


export default function SkillList(props: { list: SkillPillParam[], title: string }) {
    return (
        <div className="flex flex-col flex-1 bg-gray-800 justify-center pt-2 align-center rounded-lg select-none">
            <span className={clsx(
                "text-center text-lg tracking-wide",
                fontPoppins.className,
            )}>{props.title}</span>

            <div className="flex flex-row flex-wrap flex-1 p-3 justify-center align-start gap-4">

                {
                    ...props.list.map(s => <SkillPill {...s} key={s.src} />)
                }
            </div>
        </div>
    )
}