'use client';

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import Card1 from "@/component/molecules/CraftPreviewItems/Card1"
import Card3 from "@/component/molecules/CraftPreviewItems/Card3"
import Header1 from "../CraftHeaders/Header1";
import { disableDropping, enableDropping } from "@/app/redux/features/isDroppable/isDroppableSlice";
import ManagePreview from "@/component/molecules/ManagePreview";
import Introduction from "@/component/molecules/Introduction";
import { componentToEdit } from "@/app/redux/features/selectedComponent/selectedComponentSlice";
import Loading from "@/component/atoms/Loanding";

const Preview = () => {
  const dispatch = useDispatch();
  const componentToBeEdit = useSelector((state: RootState) => state.selectedComponentSlice.componentToBeEdit);
  const isUserActionToggled = useSelector((state: RootState) => state.selectedComponentSlice.isUserActionToggled)
  const [selectedComponents, setSelectedComponents] = React.useState<{ id: string, component: string }[] | null>(null)

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
    } else {
      setSelectedComponents([]);
    }
  }, [isUserActionToggled])

  const handleClick = (id: string, hasImage: boolean, e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const componentName = id?.split("/")?.[0]
    let innerSelection = "0";
    let hasLink = false;
    let isStylesChangable = true;
    let hasText = true;

    if (e) {
      const clickedItemId = e?.currentTarget?.id
      const splitedClickedItemId = clickedItemId?.split("-") ?? id?.split("-")
      innerSelection = splitedClickedItemId?.[splitedClickedItemId.length - 1] ?? 0
    }

    if (componentName.includes("Header")) {
      hasLink = true;
      hasText = false;
    }
    dispatch(componentToEdit({ id: id, type: id.split("/")[0], hasImage: hasImage, hasLink, isStylesChangable, hasText, innerSelection }))
  }

  return (
    <section style={{ width: "calc(100vw - 200px)", height: "calc(100vh - 80px)" }} className="absolute right-0 bottom-0 overflow-x-scroll">
      <div id="previewContainer" className="overflow-y-scroll flex flex-col items-center gap-2 md:gap-8 px-2 py-2 bg-gray-lighter h-full w-full min-w-[375px] "
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
        {selectedComponents?.length === 0 && <Introduction />}
        {selectedComponents === null && <Loading className="w-full h-full flex items-center justify-center" />}

        {selectedComponents?.map((item) => {
          return (
            <section key={`preview-${item.id}`} id={item.id} className={`${componentToBeEdit.id === item.id ? "border-2 border-blue-default border-dashed" : ""} flex flex-col justify-center items-center gap-6 md:gap-20 relative w-full rounded-sm p-1 `}>
              {/* Manage */}
              {componentToBeEdit.id === item.id && <ManagePreview id={item.id} />}

              {item.component === "Header1"
                ? <Header1 id={item.id} isPreview handleClick={() => handleClick(item.id, true)} />
                : item.component === "Card1"
                  ? <Card1 id={item.id} isPreview handleClick={() => handleClick(item.id, true)} />
                  : item.component === "Card2"
                    ? <Card1 id={item.id} type={"right"} isPreview handleClick={() => handleClick(item.id, true)} />
                    : item.component === "Card3"
                      ? <Card3 id={item.id} hasImage isPreview handleClick={(e) => handleClick(item.id, true, e)} />
                      : item.component === "Card4"
                        ? <Card3 id={item.id} isPreview handleClick={(e) => handleClick(item.id, false, e)} />
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