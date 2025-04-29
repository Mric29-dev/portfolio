"use client";

import { PorfolioItemConfig } from "@/app/portfolio/porfolioItemList";
import { Link } from "@heroui/react";
import { ExternalLinkIcon } from "lucide-react";


export function PortfolioItemPreview({ item }: { item: PorfolioItemConfig }) {

    return (
        <div className="px-1 py-2 w-full flex flex-col max-w-[400px]">
            <div className="text-base font-bold">{item.title}</div>
            <div className="text-xs my-2">{item.projectDescription}</div>
            <div className="text-sm mt-4 pb-1">Technologies du projet :</div>
            <ul className="list-disc px-6 pb-6">
                {item.technos.map((tech, i) => <li className="text-tiny" key={i}>{tech}</li>)}
            </ul>

            {item.projectLink ?
                <Link href={item.projectLink} isExternal isBlock className="text-tiny flex flex-row justify-center border-1 rounded-md text-white">
                    Voir le projet
                    <ExternalLinkIcon size="24px" className="ps-2" />
                </Link>

                : ""}
        </div>
    )


}