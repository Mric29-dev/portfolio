import ContactPage from "@/app/contact/page";
import PortfolioPage from "@/app/portfolio/page";
import ProfilePage from "@/app/profile/page";
import SkillsPage from "@/app/skills/page";
import ServicesPage from "../app/services/page";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Aymeric Maingant",
  description: "Bienvenue sur mon site",
  navItems: [
    {
      label: "Acceuil",
      href: "/",
      page: ProfilePage,
      flex: true
    },
    {
      label: "Services",
      href: "services",
      page: ServicesPage,
      flex: false
    },
    {
      label: "Portfolio",
      href: "portfolio",
      page: PortfolioPage,
      flex: false
    },
    {
      label: "Compétences",
      href: "skills",
      page: SkillsPage,
      flex: false
    },
    {
      label: "Contact",
      href: "contact",
      page: ContactPage,
      flex: false
    }
  ],
  navMenuItems: [
    {
      label: "Services",
      href: "services",
      page: ServicesPage
    },
    {
      label: "Portfolio",
      href: "portfolio",
      page: PortfolioPage
    },
    {
      label: "Compétences",
      href: "skills",
      page: SkillsPage
    },
    {
      label: "Contact",
      href: "contact",
      page: ContactPage
    }
  ],
  links: {},
};
