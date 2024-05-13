'use client';

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import Card1 from "@/component/molecules/CraftPreviewItems/Card1"
import Card3 from "@/component/molecules/CraftPreviewItems/Card3"
import Header1 from "../CraftHeaders/Header1";
import { disableDropping, enableDropping } from "@/app/redux/features/isDroppable/isDroppableSlice";
import ManagePreview from "@/component/molecules/ManagePreview";
import Introduction  from "@/component/molecules/Introduction";

const Preview = () => {
  const dispatch = useDispatch();
  const componentToBeEdit = useSelector((state: RootState) => state.selectedComponentSlice.componentToBeEdit);
  const isUserActionToggled = useSelector((state: RootState) => state.selectedComponentSlice.isUserActionToggled)
  const [selectedComponents, setSelectedComponents] = React.useState<{ id: string, component: string }[]>([])

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
    <section style={{ width: "calc(100vw - 210px)", height: "calc(100vh - 80px)" }} className="absolute left-0 bottom-0">
      <div id="previewContainer" className="overflow-y-scroll flex flex-col items-center gap-2 px-2 pb-2 bg-gray-lighter h-full w-full"
        onDragLeave={(e) => {
          e.preventDefault()
          dispatch(disableDropping())
        }}
        onDragOver={(e) => {
          e.preventDefault()
          dispatch(enableDropping())
        }}
        // the onDropCapture is necessary for the onDragLeave to work properly
        onDropCapture={(e) => e.preventDefault()}
      >
        {!selectedComponents.length && <Introduction />}

        {selectedComponents.map((item) => {
          return (
            <section key={`preview-${item.id}`} id={item.id} className={`${componentToBeEdit.id === item.id ? "border-2 border-blue-default border-dashed" : ""} flex flex-col gap-6 md:gap-20 relative w-full rounded-sm p-1`}>
              {/* Manage */}
              {componentToBeEdit.id === item.id && <ManagePreview id={item.id} />}

              {item.component === "Header1"
                ? <Header1 id={item.id} isPreview />
                : item.component === "Card1"
                  ? <Card1 id={item.id} isPreview />
                  : item.component === "Card2"
                    ? <Card1 id={item.id} type={"right"} isPreview />
                    : item.component === "Card3"
                      ? <Card3 id={item.id} hasImage isPreview />
                      : item.component === "Card4"
                        ? <Card3 id={item.id} isPreview />
                        : null
              }
            </section>
          )
        })}
      </div>
    </section>
  )
}

export default Preview