'use client';

import Image from "next/image"
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { exampleData } from "@/constants/exampleData";

const Card1 = ({ id, type = "left", isPreview = false, handleClick }: { id: string, type?: "right" | "left", isPreview?: boolean, handleClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void }) => {
  const [content, setContent] = React.useState(exampleData["Card1"])
  const isUserActionToggled = useSelector((state: RootState) => state.selectedComponentSlice.isUserActionToggled);
  const cardContent = content?.["outer"]
  const cardStyle = cardContent?.styles

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
    <div id={`outer-${id}`} title={`Card Link: ${id}`} onClick={(e) => handleClick && handleClick(e)}
      style={{
        flexDirection: `${type === "right" ? "row-reverse" : "row"}`,
        background: cardStyle?.backgroundType === "2"
          ? `linear-gradient(90deg, ${cardStyle?.backgroundColor1} 0%, ${cardStyle?.backgroundColor2} 100%`
          : cardStyle?.backgroundType === "1"
            ? cardStyle?.backgroundColor1
            : "none",
        color: cardStyle?.textColor ? cardStyle.textColor : "#ffffff",
        borderWidth: `${cardStyle?.borderWidth}px`,
        borderRadius: `${cardStyle?.borderRadius}px`,
        borderColor: cardStyle?.borderColor ? cardStyle?.borderColor : "#ffffff",
        borderStyle: cardStyle?.borderType
      }}
      className={`${isPreview ? "cursor-pointer" : ""} flex justify-between items-center gap-2 text-black-darker w-full max-w-[1300px]`}>
      <div className="w-[40%]">
        <Image
          style={{ borderRadius: `${cardStyle?.borderRadius}px` }}
          src={cardContent?.image?.src ? cardContent.image.src : "https://picsum.photos/600/300"}
          alt={cardContent?.image?.alt ? cardContent.image.alt : "Image"}
          className="w-full object-cover rounded"
          width={cardContent?.image?.width ? cardContent.image.width : 400}
          height={cardContent?.image?.height ? cardContent.image.height : 200} />
      </div>

      <div style={{ textAlign: `${type === "right" ? "right" : "left"}` }} className="w-[50%] break-words">
        <h2 style={{ fontWeight: cardStyle?.fontWeight }}
          className="font-semibold mb-2">{cardContent?.info?.title ? cardContent.info.title : "Lorem, ipsum dolor."}</h2>
        <p style={{ fontWeight: cardStyle?.textFontWeight ? cardStyle?.textFontWeight : 400 }}>{cardContent?.info?.text ? cardContent?.info?.text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptates!"}</p>
      </div>
    </div>
  )
}

export default Card1