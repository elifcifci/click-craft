'use client';

import { RootState } from "@/app/redux/store";
import React from "react";
import { useSelector } from "react-redux";
import Card1 from "@/component/molecules/CraftMenuItems/Card1"
import Card2 from "@/component/molecules/CraftMenuItems/Card2"
import Card3 from "@/component/molecules/CraftMenuItems/Card3"
import Card4 from "@/component/molecules/CraftMenuItems/Card4"
const Preview = () => {
  const selectedComponents = useSelector((state: RootState) => state.selectedComponentSlice.selectedComponents)
  const cards = [<Card1 />, <Card2 />, <Card3 />, <Card4 />]

  return (
    <section style={{ width: "calc(100vw - 200px)", height: "calc(100vh - 80px)" }} className=" absolute left-0 bottom-0 p-10">
      <div className="rounded-md bg-gray-lighter h-full w-full">
        {
          selectedComponents.map((item) => {
            return (
              <div key={`preview-${item}`}>
                {item === "Card1"
                  ? <Card1 />
                  : item === "Card2"
                    ? <Card2 />
                    : item === "Card3"
                      ? <Card3 />
                      : item === "Card4"
                        ? <Card4 />
                        : null
                }
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Preview