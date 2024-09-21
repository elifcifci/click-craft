"use client";

import { inter } from "@/app/fonts";
import React, { ReactNode } from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

export const MainLayout = ({ children, className }: MainLayoutProps) => {
  const isOpenedMenu = useSelector(
    (state: RootState) => state.toggleMenuSlice.isOpenedMenu
  );

  const preventDefault = (e: TouchEvent) => {
    if (isOpenedMenu) {
      e.preventDefault();
    }
  };

  // prevent scroll when navbar opened on mobile devices 
  React.useEffect(() => {
    const body = document?.body;

    if (body) {
      if (isOpenedMenu) {
        body.addEventListener("touchmove", preventDefault, { passive: false });
      } else {
        body.removeEventListener("touchmove", preventDefault);
      }
    }

    // Cleanup function to remove event listener on unmount
    return () => body.removeEventListener("touchmove", preventDefault);
  }, [isOpenedMenu]);

  return (
    <main className={`${inter.className} ${className}`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </main>
  );
};
