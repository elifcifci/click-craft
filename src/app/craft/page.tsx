import { Metadata } from "next";
import { inter } from "../fonts";
import Preview from "@/component/organisms/Preview";
import CraftMenu from "@/component/organisms/CraftMenu";
import React from "react";

export const metadata: Metadata = {
  title: "Click and Craft",
  description: "Click items to craft your own website",
};

export default function NoCode() {

  return (
    <div className={`${inter.className} relative h-[100vh] bg-zinc-900 mx-auto divide-y selection:bg-blue-lighter selection:text-black-darker`}>
      <Preview />
      <CraftMenu />
    </div>
  );
}