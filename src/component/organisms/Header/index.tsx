"use client";

import React from "react";
import { RootState } from "@/app/redux/store";
import HamburgerMenuIcon from "@/component/atoms/HamburgerMenuIcon";
import Logo from "@/component/atoms/Logo";
import Navigation from "@/component/molecules/Navigation";
import { useSelector } from "react-redux";
import useDimensionsWindow from "@/hook/useWindowDimensions";

const Header = () => {
  const { width } = useDimensionsWindow();
  const isOpenedMenu = useSelector(
    (state: RootState) => state.toggleMenuSlice.isOpenedMenu
  );

  React.useEffect(() => {
    if (typeof window !== "undefined" && document) {
      const header = document.getElementById("header");
      if (header) {
        header.classList.remove("bg-black-darker/[.9]");
        header.classList.add("bg-black-darker/[.0]");
      }
      
      const scrollListener = () => {
        const verticalScroll =
          window.scrollY || document.documentElement.scrollTop;

        if (header) {
          if (verticalScroll > 30) {
            header.classList.add("bg-black-darker/[.96]");
            header.classList.remove("bg-black-darker/[.0]");
          } else {
            header.classList.remove("bg-black-darker/[.96]");
            header.classList.add("bg-black-darker/[.0]");
          }
        }
      };

      window.addEventListener("scroll", () => {
        if(document){
          scrollListener()
        }
      });

      return () => {
        window.removeEventListener("scroll", () => scrollListener());
      };
    }
  }, []);


  return (
    <header
      id="header"
      className={`${isOpenedMenu ? "bg-black-darker/[.96]" : (width <= 768 && width) ? "bg-black-darker/[.9]" : ""}
         transition-all fixed z-50 top-0 w-[100vw] h-[80px] box-border flex items-center`}
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
