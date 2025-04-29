import { PageTitle } from "@/components/pageTitle/pageTitle";
import { PortfolioItem } from "@/components/portfolioItem/portfolioItem";
import { porfolioItemList } from "./porfolioItemList";

export default function PortfolioPage() {

    return (
        <>
            <PageTitle title="Portfolio" subtitle="Présentation de mes dernières expériences" invert={true} />

            <div className="flex flex-row flex-wrap flex-1 p-3 justify-center align-start gap-4 py-12">
                {
                    porfolioItemList.map(item => {
                        return (
                            <PortfolioItem key={item.src} item={item} />
                        )
                    })
                }

            </div>
        </>
    )
}