import AboutPage from "@/app/about/page";
import ContactPage from "@/app/contact/page";
import PortfolioPage from "@/app/portfolio/page";
import ProfilePage from "@/app/profile/page";
import SkillsPage from "@/app/skills/page";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Aymeric Maingant",
  description: "Bienvenue sur mon site",
  navItems: [
    {
      label: "Acceuil",
      href: "/",
      page: ProfilePage,
      flex: true,
      hScreen: true
    },
    {
      label: "A propos",
      href: "about",
      page: AboutPage,
      flex: false
    },
    /*{
      label: "Services",
      href: "services",
      page: ServicesPage,
      flex: false
    },*/
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
      label: "Acceuil",
      href: "/",
      page: ProfilePage,
      flex: true,
      hScreen: true
    },
    {
      label: "A propos",
      href: "about",
      page: AboutPage,
      flex: false
    },
    /*{
      label: "Services",
      href: "services",
      page: ServicesPage,
      flex: false
    },*/
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
  links: {},
};
