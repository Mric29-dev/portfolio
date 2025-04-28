import { PageTitle } from "@/components/pageTitle/pageTitle";
import SkillList from "@/components/skillList/skillList";
import Image from "next/image";
import { backSkillList, frontSkillList } from "./skillList";

export default function SkillsPage() {

    return (
        <div className="flex flex-col justify-center content-center mx-[10%] select-none">
            <PageTitle title="Mes compétences" subtitle="J'aime coder les choses à partir de zéro et j'aime donner vie à des idées." invert={true} />

            <div className="flex flex-row justify-center py-12 px-6 flex-wrap">
                <div className="flex items-center">
                    <Image
                        alt="Illustration d'un ordinateur"
                        width={300}
                        height={300}
                        sizes="(max-width: 768px) 180px, 250px"
                        layout="responsive"
                        objectFit="contain"
                        src="/assets/pc-illustration.png"
                    />
                </div>
                <div className="flex flex-1 basis-2/3 justify-center items-center max-w-3xl md:ps-12 pt-6">
                    <div className="flex flex-row leading-[2]">
                        Ma carrière de développeur a commencé il y a une dizaine d’années.
                        Depuis le début, j’ai vraiment une passion pour le développement d’applications numériques.
                        En traversant les projets, passant des sites, souvent simples, à des applications plus complexes, je m’enrichis de multiples technologies tout en m’améliorant en permanence.
                    </div>
                </div>
            </div>
            <div className="h-16"></div>

            <div className="flex flex-col flex-1">
                <h1 className="text-lg text-start py-4">
                    Un exemple des technologies que j'utilise régulièrement
                </h1>
                <div className="flex sm:flex-row flex-col flex-1 justify-center py-2 gap-8">
                    <SkillList list={frontSkillList} title="Font-end" />
                    <SkillList list={backSkillList} title="Back-end" />
                    { /*<SkillList list={otherSkillList} title="Autre" /> */}
                </div>
            </div>
            <div className="h-16"></div>
        </div>
    )
}