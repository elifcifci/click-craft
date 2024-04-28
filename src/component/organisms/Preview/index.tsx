'use client';

import React from "react";
import Card1 from "@/component/molecules/CraftPreviewItems/Card1"
import Card3 from "@/component/molecules/CraftPreviewItems/Card3"
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

const Preview = () => {
  const [selectedComponents, setSelectedComponents] = React.useState<{ id: string, component: string }[]>([])
  const isUserActionToggled = useSelector((state: RootState) => state.selectedComponentSlice.isUserActionToggled)

  React.useEffect(() => {
    const storedData = localStorage.getItem("selectedComponents");

    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setSelectedComponents(parsedData);
      }
      catch (error) {
        console.error("Error parsing localStorage data:", error);
      }
    }
  }, [isUserActionToggled])

  return (
    <section style={{ width: "calc(100vw - 200px)", height: "calc(100vh - 80px)" }} className=" absolute left-0 bottom-0 p-10">
      <div className="overflow-y-scroll flex flex-col items-center gap-2 p-2 rounded-md bg-gray-lighter h-full w-full">
        {
          selectedComponents.map((item) => {
            return (
              <div key={`preview-${item.id}`}>
                {item.component === "Card1"
                  ? <Card1 id={item.id} />
                  : item.component === "Card2"
                    ? <Card1 id={item.id} type={"right"}/>
                    : item.component === "Card3"
                      ? <Card3 id={item.id} hasImage/>
                      : item.component === "Card4"
                        ? <Card3 id={item.id} />
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