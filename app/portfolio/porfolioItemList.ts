

export const porfolioItemList: PorfolioItemConfig[] = [
    {
        title: "Logiciels de combat",
        description: "Développement de logiciels et systèmes de combat pour la Marine Nationale.",
        technos: [
            "JAVA",
            "JAVA X",
            "Shell Unix",
            "Jenkins"
        ],
        projectDescription: "Projet réalisé en JAVA",
        src: "battlefieldDev"
    },
    {
        title: "ISS tracker",
        description: "Application pour smartphone de suivi de l'ISS. Suivi des dernières images publiés par la NASA, tracking de l'ISS en temps réel, notifications lors du passage de l'ISS à proximité de l'utilisateur.",
        technos: [
            "Angular",
            "Ionic",
            "HTML",
            "CSS",
            "NodeJs"
        ],
        projectDescription: "Projet personnel, réalisation d'une application pour téléphone avec Ionic.",
        src: "iss"
    },
    {
        title: "Porfolio",
        description: "Le site sur lequel vous vous trouvez actuellement !",
        technos: [
            "React",
            "NextJs",
            "Typescript",
            "Tailwind",
            "HTML",
            "CSS",
            "Javascript",
            "Docker"
        ],
        projectDescription: "Mon site personnel, principalement développé avec React/NextJs",
        projectLink: "https://github.com/Mric29-dev/portfolio",
        src: "portoflio"
    }

]


export interface PorfolioItemConfig {
    title: string;
    description: string;
    technos: string[];
    src: string;
    projectDescription: string;
    projectLink?: string
}