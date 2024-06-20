'use client';

import Image from "next/image"
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { useDispatch } from "react-redux"
import { openMenu } from "@/app/redux/features/switchMenu/switchMenuSlice"
import { exampleData } from "@/constants/exampleData";
import EditIcon from "@/component/atoms/EditIcon";

const Card3 = ({ id, hasImage = false, isPreview = false, handleClick }: { id: string, hasImage?: boolean, isPreview?: boolean, handleClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void }) => {
  const dispatch = useDispatch();
  const isUserActionToggled = useSelector((state: RootState) => state.selectedComponentSlice.isUserActionToggled);
  const componentToBeEdit = useSelector((state: RootState) => state.selectedComponentSlice.componentToBeEdit);
  const [content, setContent] = React.useState(exampleData["Card3"])

  React.useEffect(() => {
    const storedData = localStorage.getItem(id);

    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setContent(parsedData);
      }
      catch (error) {
        console.error("Error parsing localStorage data:", error);
      }
    }
  }, [isUserActionToggled])

  return (
    <div title={`Card Link: ${id}`} className={`rounded-sm w-full gap-2 flex flex-col md:grid md:grid-cols-3`}>
      {
        Object.keys(content).map((item, index) => {
          return (
            <div key={`card3-${index}`} className="relative" >
              {/* Management */}
              {(componentToBeEdit.id === id && componentToBeEdit?.innerSelection === `inner-${index}`) && <EditIcon onClick={() => dispatch(openMenu())} className="gradient-left rounded absolute -top-2 left-2 z-40" />}

              {/* Content */}
              <div id={`${id}-${index}`} onClick={(e) => handleClick && handleClick(e)}
                style={{
                  background: content[item]?.styles?.backgroundType === "2"
                    ? `linear-gradient(90deg, ${content[item]?.styles?.backgroundColor1} 0%, ${content[item]?.styles?.backgroundColor2} 100%`
                    : content[item]?.styles?.backgroundType === "1"
                      ? content[item]?.styles?.backgroundColor1
                      : "none",
                  color: content[item]?.styles?.textColor ? content[item]?.styles?.textColor : "#ffffff",
                  borderWidth: `${content[item]?.styles?.borderWidth}px`,
                  borderRadius: `${content[item]?.styles?.borderRadius}px`,
                  borderColor: content[item]?.styles?.borderColor ? content[item]?.styles?.borderColor : "#ffffff",
                  borderStyle: content[item]?.styles?.borderType
                }}
                className={`${(componentToBeEdit.id === id && componentToBeEdit?.innerSelection === `inner-${index}`) ? "relative border-2 border-blue-default border-dashed" : ""} ${isPreview ? "cursor-pointer" : ""} flex flex-col gap-2 items-center text-black-darker`}>
                {hasImage && <div className="w-full">
                  <Image
                    src={content ? content[item].image?.src || "https://picsum.photos/200/100" : "https://picsum.photos/200/100"}
                    alt={content ? content[item].image?.alt || "Image" : "Image"}
                    className="w-full object-cover rounded"
                    width={content[item].image?.width ? content[item].image?.width : 200}
                    height={content[item].image?.height ? content[item].image?.height : 100} />
                </div>}

                <div className="[&>p]:text-center p-2 w-full break-words">
                  <h2 style={{fontWeight: content[item]?.styles?.fontWeight ?? "#000"}} className="text-center mb-2">{content[item].info?.title ? content[item].info?.title : "Lorem, ipsum dolor."}</h2>
                  <p style={{fontWeight: content[item]?.styles?.textFontWeight ?? "#000"}}>{content[(item)].info?.text ? content[item].info?.text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptates!"}</p>
                </div>
              </div>
            </div>)
        })
      }
    </div>
  )
}

export default Card3