'use client';

import { Metadata } from "next";
import { inter } from "../fonts";
import Preview from "@/component/organisms/Preview";
import CraftMenu from "@/component/organisms/CraftMenu";
import React from "react";

// export const metadata: Metadata = {
//   title: "Click and Craft",
//   description: "Click items to craft your own website",
// };

export default function NoCode() {
  const dragItem = React.useRef();
  const dragOverItem = React.useRef();

  const dragStart = (e) => {
    dragItem.current = e.target.id
  }

  const dragEnter = (e) => {
    dragOverItem.current = e.currentTarget.id
  }

  return (
    <div className={`${inter.className} relative h-[100vh] bg-zinc-900 mx-auto divide-y selection:bg-blue-lighter selection:text-black-darker`}>
      <Preview />
      <CraftMenu dragStart={dragStart} dragEnter={dragEnter} />
    </div>
  );
}