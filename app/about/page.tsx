import AboutContent from "@/components/aboutContent/aboutContent";
import { PageTitle } from "@/components/pageTitle/pageTitle";

export default function AboutPage() {

    return (
        <div className="flex flex-col content-center mx-[10%] select-none">
            <PageTitle title="A propos" subtitle="Un peu de moi" invert={true} />
            <AboutContent className="py-16 pb-32" />
        </div>
    )
}