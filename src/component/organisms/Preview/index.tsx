'use client';

import { RootState } from "@/app/redux/store";
import React from "react";
import { useSelector } from "react-redux";
import Card1 from "@/component/molecules/CraftPreviewItems/Card1"
import Card2 from "@/component/molecules/CraftMenuItems/Card2"
import Card3 from "@/component/molecules/CraftMenuItems/Card3"
import Card4 from "@/component/molecules/CraftMenuItems/Card4"

const Preview = () => {
  const selectedComponents = useSelector((state: RootState) => state.selectedComponentSlice.selectedComponents)
  let component;
console.log("selectedComponent", selectedComponents);

  return (
    <section style={{ width: "calc(100vw - 200px)", height: "calc(100vh - 80px)" }} className="overflow-scroll absolute left-0 bottom-0 p-10">
      <div className="flex flex-col items-center gap-2 p-2 rounded-md bg-gray-lighter h-full w-full">
        {
          selectedComponents.map((item) => {
            component = item.id;

            return (
              <div key={`preview-${item.id}`}>
                {item.component === "Card1"
                  ? <Card1 id={item.id}/>
                  : item.component === "Card2"
                    ? <Card2 />
                    : item.component === "Card3"
                      ? <Card3 />
                      : item.component === "Card4"
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