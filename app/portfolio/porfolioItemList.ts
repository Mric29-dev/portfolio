

export const porfolioItemList: PorfolioItemConfig[] = [
    {
        title: "Logiciels de combat",
        description: "Développement de logiciels et systèmes de combat pour la Marine Nationale",
        technos: [
            "JAVA",
            "JAVA X",
            "Shell Unix",
            "Jenkins"
        ],
        projectDescription: "Projet réalisé en JAVA",
        projectLink: "https://www.google.com",
        src: "battlefieldDev"
    },
    {
        title: "ISS tracker",
        description: "Application pour smartphone de suivi de l'ISS, suivi des dernières images prises par la NASA.",
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
        projectDescription: "Mon site personnel, développé avec React/NextJs",
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