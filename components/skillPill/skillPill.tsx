"use client";

import { Card, CardBody, Tooltip } from "@heroui/react";
import clsx from "clsx";
import Image from "next/image";
import classes from "./skillPill.module.css";

export default function SkillPill(props: SkillPillParam) {
    return (
        <Tooltip
            content={
                <div className="flex flex-col px-1 py-2 max-w-sm bg-opacity-20">
                    <div className="text-lg font-bold">{props.title}</div>
                    <div className="text-sm break-words">{props.alt}</div>
                    <div className="text-xs mt-1">Nombre d'année d'expérience : {props.experience} an{props.experience > 1 ? "s" : ""}</div>
                </div>
            }
            showArrow={true}
            delay={500}
            classNames={{
                base: [],
                content: ["bg-opacity-95"],
            }}
        >
            <div className={clsx("cursor-pointer hover:scale-[1.05] select-none", classes["skill-card-body"])}>
                <Card isBlurred={false} className="w-20 h-20">
                    <CardBody className="flex flex-col items-center justify-start p-1 gap-1 pt-3 relative">
                        <Image {...props} src={`/assets/skills/${props.src}`} width="32" height="32" className="rounded mh-[32px]"></Image>

                        <div className="flex justify-center text-sm absolute bottom-2">
                            {props.title}
                        </div>
                    </CardBody>
                </Card>
            </div>
        </Tooltip>
    )
}

export interface SkillPillParam {
    src: string,
    title: string,
    alt: string,
    experience: number
}
