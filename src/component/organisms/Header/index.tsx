"use client";

import HamburgerMenuIcon from "@/component/atoms/HamburgerMenuIcon";
import Logo from "@/component/atoms/Logo";
import Navigation from "@/component/molecules/Navigation";
import React from "react";

const Header = () => {
  React.useEffect(() => {
    const header = document.getElementById("header");

    const scrollListener = () => {
      const verticalScroll =
        window.scrollY || document.documentElement.scrollTop;

      if (header) {
        if (verticalScroll > 60) {
          header.classList.add("bg-black-darker/[.9]");
        } else {
          header.classList.add("bg-black-darker/[.0]");
          header.classList.remove("bg-black-darker/[.9]");
        }
      }
    };

    window.addEventListener("scroll", () => scrollListener());

    return () => {
      window.removeEventListener("scroll", () => scrollListener());
    };
  }, []);

  return (
    <header
      id="header"
      className="transition-all fixed z-[3] top-0 w-[100vw] h-[80px] flex items-center justify-between p-2"
    >
      <Logo />
      <HamburgerMenuIcon />
      <Navigation />
    </header>
  );
};

export default Header;
