'use client';

import Image from "next/image"
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { useDispatch } from "react-redux"
import { openMenu } from "@/app/redux/features/switchMenu/switchMenuSlice"
import { exampleData } from "@/constants/exampleData";
import EditIcon from "@/component/atoms/EditIcon";

const Card3 = ({ id, hasImage = false, isPreview = false, handleClick }: { id: string, hasImage?: boolean, isPreview?: boolean, handleClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void }) => {
  const dispatch = useDispatch();
  const isUserActionToggled = useSelector((state: RootState) => state.selectedComponentSlice.isUserActionToggled);
  const componentToBeEdit = useSelector((state: RootState) => state.selectedComponentSlice.componentToBeEdit);
  const [content, setContent] = React.useState(exampleData["Card3"])
  const parentStyles = content?.["outer"]?.styles
  let cardStyle;
  let cardContent;

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
    <div id={`outer-${id}`} onClick={(e) => handleClick && handleClick(e)} title={`Card Link: ${id}`}
      className={`w-full p-2`}
    >
      <div
        className="gap-2 flex flex-col md:grid md:grid-cols-3"
        style={{
          background: parentStyles?.backgroundType === "2"
            ? `linear-gradient(90deg, ${parentStyles?.backgroundColor1} 0%, ${parentStyles?.backgroundColor2} 100%`
            : parentStyles?.backgroundType === "1"
              ? parentStyles?.backgroundColor1
              : "none",
          color: parentStyles?.textColor ? parentStyles?.textColor : "#ffffff",
          borderWidth: `${parentStyles?.borderWidth}px`,
          borderRadius: `${parentStyles?.borderRadius}px`,
          borderColor: parentStyles?.borderColor ? parentStyles?.borderColor : "#ffffff",
          borderStyle: parentStyles?.borderType
        }}>
        {
          content?.["inner"] ? Object.keys(content?.["inner"])?.map((item, index) => {
            cardContent = content?.["inner"]?.[item]
            cardStyle = content?.["inner"]?.[item]?.styles;

            return (
              <div id={`${id}-${index}`} key={`card3-${index}-${cardContent?.image?.width}`} className="relative"
                onClick={(e) => handleClick && handleClick(e)}>
                {/* Management */}
                {(componentToBeEdit.id === id && componentToBeEdit?.innerSelection === `inner-${index}`) && <EditIcon onClick={() => dispatch(openMenu())} className="gradient-left rounded absolute -top-2 left-2 z-40" />}

                {/* Content */}
                <div
                  style={{
                    background: cardStyle?.backgroundType === "2"
                      ? `linear-gradient(90deg, ${cardStyle?.backgroundColor1} 0%, ${cardStyle?.backgroundColor2} 100%`
                      : cardStyle?.backgroundType === "1"
                        ? cardStyle?.backgroundColor1
                        : "none",
                    color: cardStyle?.textColor ? cardStyle?.textColor : "#ffffff",
                    borderWidth: `${cardStyle?.borderWidth}px`,
                    borderRadius: `${cardStyle?.borderRadius}px`,
                    borderColor: cardStyle?.borderColor ? cardStyle?.borderColor : "#ffffff",
                    borderStyle: cardStyle?.borderType
                  }}
                  className={`${(componentToBeEdit.id === id && componentToBeEdit?.innerSelection === `inner-${index}`) ? "relative border-2 !border-blue-default !border-dashed" : ""} ${isPreview ? "cursor-pointer" : ""} flex flex-col gap-2 items-center text-black-darker`}>
                  {hasImage && <div
                    style={{
                      borderRadius: `${cardStyle?.borderRadius}px`,
                      width: cardContent?.image?.width ?`${cardContent?.image?.width}px` : "100%",
                      height: cardContent?.image?.height ? `${cardContent?.image?.height}px` : "100%"
                    }}>
                    <Image
                      style={{
                        borderRadius: `${cardStyle?.borderRadius}px`,
                      }}
                      src={cardContent?.image?.src ? cardContent?.image?.src || "https://picsum.photos/200/100" : "https://picsum.photos/200/100"}
                      alt={cardContent?.image?.src ? cardContent?.image?.alt || "Image" : "Image"}
                      className="object-cover w-full h-full"
                      width={cardContent?.image?.width ? cardContent?.image?.width : 200}
                      height={cardContent?.image?.height ? cardContent?.image?.height : 100} />
                  </div>}

                  <div className="[&>p]:text-center p-2 break-words">
                    <h2 style={{ fontWeight: cardStyle?.fontWeight ?? "#000" }} className="text-center mb-2">{cardContent?.info?.title ? cardContent?.info?.title : "Lorem, ipsum dolor."}</h2>
                    <p style={{ fontWeight: cardStyle?.textFontWeight ?? "#000" }}>{cardContent?.info?.text ? cardContent?.info?.text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptates!"}</p>
                  </div>
                </div>
              </div>)
          }) : null
        }
      </div>
    </div>
  )
}

export default Card3