"use client";

import { PorfolioItemConfig } from "@/app/portfolio/porfolioItemList";
import { Card, CardBody, CardFooter, Popover, PopoverContent, PopoverTrigger } from "@heroui/react";
import clsx from "clsx";
import Image from "next/image";
import classes from "./portfolioItem.module.css";
import { PortfolioItemPreview } from "./portfolioItemPreview/portfolioItemPreview";


export function PortfolioItem({ item }: { item: PorfolioItemConfig }) {

    const assetPrefix = "/assets/projects/";

    return (
        <Card className={clsx(classes["portfolio-item-card"], "flex gap-1 w-[300px]")}>
            <CardBody className="flex flex-col items-center justify-start p-0 max-h-[200px]">
                {item.src ?
                    <Popover
                        backdrop="opaque"
                        color="secondary"
                        classNames={{
                            base: [],
                            content: [
                                "py-3 px-4 border border-default-200",
                                "bg-gradient-to-br from-white to-default-300",
                                "dark:from-default-100 dark:to-default-50",
                                "min-w-[300px]"
                            ],
                        }}
                        placement="bottom"
                    >
                        <PopoverTrigger>
                            <div className="relative flex flex-col overflow-hidden">
                                <Image
                                    alt=""
                                    src={`${assetPrefix}${item.src}.png`}
                                    width="300"
                                    height="200"
                                    className={clsx(classes["item-img"], "object-cover rounded-sm")}
                                />
                                <div className={classes["plus-item"]}>
                                    +
                                </div>
                            </div>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PortfolioItemPreview item={item} />
                        </PopoverContent>
                    </Popover>
                    : ""
                }
            </CardBody>
            <CardFooter className="flex flex-col justify-start overflow-hidden py-2 rounded-large ml-1 z-10">
                <div className="text-sm uppercase font-bold">{item.title}</div>
                <div className="text-tiny text-white/80">{item.description}</div>
            </CardFooter>
        </Card>
    )


}