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
  const cardContent = content?.["inner"]
  let cardStyle;

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
    <div id={`outer-${id}`} onClick={(e) => handleClick && handleClick(e)} title={`Card Link: ${id}`} className={`rounded-sm w-full p-2 gap-2 flex flex-col md:grid md:grid-cols-3`}>
      {
        cardContent ? Object.keys(cardContent)?.map((item, index) => {
          cardStyle = cardContent?.[item]?.styles

          return (
            <div id={`${id}-${index}`} key={`card3-${index}`} className="relative"
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
                  // borderStyle: cardStyle?.borderType
                }}
                className={`${(componentToBeEdit.id === id && componentToBeEdit?.innerSelection === `inner-${index}`) ? "relative border-2 border-blue-default border-dashed" : ""} ${isPreview ? "cursor-pointer" : ""} flex flex-col gap-2 items-center text-black-darker`}>
                {hasImage && <div className="w-full">
                  <Image
                    src={content ? cardContent[item].image?.src || "https://picsum.photos/200/100" : "https://picsum.photos/200/100"}
                    alt={content ? cardContent[item].image?.alt || "Image" : "Image"}
                    className="w-full object-cover rounded"
                    width={cardContent[item].image?.width ? cardContent[item].image?.width : 200}
                    height={cardContent[item].image?.height ? cardContent[item].image?.height : 100} />
                </div>}

                <div className="[&>p]:text-center p-2 w-full break-words">
                  <h2 style={{ fontWeight: cardStyle?.fontWeight ?? "#000" }} className="text-center mb-2">{cardContent[item].info?.title ? cardContent[item].info?.title : "Lorem, ipsum dolor."}</h2>
                  <p style={{ fontWeight: cardStyle?.textFontWeight ?? "#000" }}>{cardContent[(item)].info?.text ? cardContent[item].info?.text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptates!"}</p>
                </div>
              </div>
            </div>)
        }) : null
      }
    </div>
  )
}

export default Card3