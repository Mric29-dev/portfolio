"use client";

import { fontSpinnaker } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { Link } from "@heroui/link";
import {
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar
} from "@heroui/navbar";
import clsx from "clsx";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import ScrollLink from "../scrollLink/scrollLink";

export const Navbar = (params: { transparent?: boolean }) => {

  const pathname = usePathname();

  return (
    <NextUINavbar maxWidth="full" position="static" className="bg-transparent bg-opacity-25">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">

        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p
              className={clsx(
                "font-bold text-primary text-lg uppercase tracking-widest",
                fontSpinnaker.className
              )}
            >AYMERIC MAINGANT</p>
          </NextLink>
        </NavbarBrand>

        <div className="hidden lg:flex gap-16 font-medium ml-2 me-12 justify-end w-full">
          {siteConfig.navItems.map((item) => (
            <ScrollLink id={item.href} key={item.href}>{item.label}</ScrollLink>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">

        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color="primary"
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
