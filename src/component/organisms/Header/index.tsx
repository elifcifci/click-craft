"use client";

import React from "react";
import { RootState } from "@/app/redux/store";
import HamburgerMenuIcon from "@/component/atoms/HamburgerMenuIcon";
import Logo from "@/component/atoms/Logo";
import Navigation from "@/component/molecules/Navigation";
import { useSelector } from "react-redux";

const Header = () => {
  React.useEffect(() => {
    if (typeof window !== "undefined") {
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
    }
  }, []);

  const isOpenedMenu = useSelector(
    (state: RootState) => state.toggleMenuSlice.isOpenedMenu
  );

  return (
    <header
      id="header"
      className={`${
        isOpenedMenu ? "bg-black-darker/[.96]" : "bg-black-darker/[.9]"
      } transition-all fixed z-30 top-0 w-[100vw] h-[80px] box-border flex items-center`}
    >
      <div className="p-2 w-[100vw] flex items-center justify-between">
        <Logo />
        <HamburgerMenuIcon />
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
