"use client";
import clsx from "clsx";
import Image from "next/image";

export default function AboutContent({ className }: { className: string }) {

    return (
        <div className={clsx(className, "flex md:flex-row flex-col")}>

            <div className="flex justify-center md:items-end items-center flex-col h-100 basis-1/2 pb-[10%] md:pb-0 md:pe-[5%]">
                <Image
                    alt="Illustration d'un ordinateur"
                    width={200}
                    height={200}
                    objectFit="contain"
                    src="/assets/about-picture.png"
                    className="rounded-full shadow-lg h-[200px] min-w-[200px]"
                ></Image>
            </div>
            <div className="flex flex-col text-white text-pretty basis-1/2 text-justify px-2">
                <p>
                    Bonjour !
                </p>
                <p>
                    Je m'appelle Aymeric Maingant, Ingénieur en informatique.
                </p>
                <p>
                    Ma formation d'ingénieur s'est déroulée à l'ENIB (École Nationale d'Ingénieur de Brest), où j'ai suivi une formation générale en électronique, mécatronique et informatique.
                    Je me suis spécialisé dans l'informatique, avec un profond attrait pour le développement web.
                    Au cours de mes premières années, j'ai eu l'opportunité de travailler à Toulon pour le développement dans le domaine de l'armement (NavalGroup / Atos), ce qui m'a permis d'acquérir de nombreuses compétences techniques et de rigueur.
                </p>
                <div className="flex flex-row flex-wrap">
                    <p>Ensuite, je suis rentré</p>
                    <p className="px-1">dans ma Bretagne natale</p>
                    <p>car les crêpes</p>
                    <Image src="/assets/crepe-icon.png" width={24} height={24} alt="Icone de crêpe" sizes="30px" className="rotate-45 ms-1 me-2" />
                    <p> me manquaient énormément.</p>
                    J'ai travaillé à Cervval pendant trois ans en tant que responsable du développement d'un framework web propriétaire.
                    Ce framework, qui intègre à la fois la partie client et serveur, a été créé à partir de zéro, ce qui m'a apporté énormément de compétences techniques dans le développement web.
                </div>
                <p>
                    Aujourd'hui, je continue à pratiquer ma passion au quotidien, avec une grande envie et une grande impatience de concrétiser de nouveaux projets.
                </p>
            </div>
        </div>
    )

}