import { PageTitle } from "@/components/pageTitle/pageTitle";
import SkillList from "@/components/skillList/skillList";
import Image from "next/image";
import { backSkillList, frontSkillList, otherSkillList } from "./skillList";

export default function SkillsPage() {

    return (
        <div className="flex flex-col justify-center content-center mx-[10%] select-none">
            <PageTitle title="Mes compétences" subtitle="J'aime coder les choses à partir de zéro et j'aime donner vie à des idées." invert={true} />

            <div className="flex flex-row justify-center py-12 px-[15%]">
                <div className="flex items-center flex-1">
                    <div className="w-full h-min">
                        <Image
                            alt="Illustration d'un ordinateur"
                            width={500}
                            height={500}
                            sizes="20vw"
                            layout="responsive"
                            objectFit="contain"
                            src="/assets/pc-illustration.png"
                        />
                    </div>
                </div>
                <div className="flex flex-1 ps-[15%] justify-center items-center ">
                    <div className="flex flex-row leading-[2]">
                        Ma carrière de développeur a commencé il y a une dizaine d’années.
                        Depuis le début, j’ai vraiment une passion pour le développement d’applications numériques.
                        En traversant les projets, passant des sites, souvent simples, à des applications plus complexes, je m’enrichis de multiples technologies tout en m’améliorant en permanence.
                    </div>
                </div>
            </div>
            <div className="h-16"></div>

            <div className="flex flex-col flex-1">
                <h1 className="text-lg text-center py-4">
                    Un exemple des technologies que j'utilise régulièrement
                </h1>
                <div className="flex flex-row flex-1 justify-center py-2 gap-8">
                    <SkillList list={frontSkillList} title="Font-end" />
                    <SkillList list={backSkillList} title="Back-end" />
                    <SkillList list={otherSkillList} title="Autre" />
                </div>
            </div>
            <div className="h-16"></div>
        </div>
    )
}