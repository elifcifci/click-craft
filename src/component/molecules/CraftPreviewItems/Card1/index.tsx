'use client';

import Image from "next/image"
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { exampleData } from "@/constants/exampleData";

const Card1 = ({ id, type = "left", isPreview = false, handleClick }: { id: string, type?: "right" | "left", isPreview?: boolean, handleClick?: () => void }) => {
  const [content, setContent] = React.useState(exampleData["Card1"])
  const isUserActionToggled = useSelector((state: RootState) => state.selectedComponentSlice.isUserActionToggled);

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
    <div title={`Card Link: ${id}`} onClick={() => handleClick && handleClick()}
      style={{
        flexDirection: `${type === "right" ? "row-reverse" : "row"}`,
        background: content["inner-0"]?.styles?.backgroundType === "2"
          ? `linear-gradient(90deg, ${content["inner-0"]?.styles?.backgroundColor1} 0%, ${content["inner-0"]?.styles?.backgroundColor2} 100%`
          : content["inner-0"]?.styles?.backgroundType === "1"
            ? content["inner-0"]?.styles?.backgroundColor1
            : "none",
        color: content["inner-0"]?.styles?.textColor ? content["inner-0"].styles.textColor : "#ffffff",
        borderWidth: `${content["inner-0"]?.styles?.borderWidth}px`,
        borderRadius: `${content["inner-0"]?.styles?.borderRadius}px`,
        borderColor: content["inner-0"]?.styles?.borderColor ? content["inner-0"]?.styles?.borderColor : "#ffffff",
        borderStyle: content["inner-0"]?.styles?.borderType
      }}
      className={`${isPreview ? "cursor-pointer" : ""} flex justify-center items-center gap-2 text-black-darker w-full max-w-[1300px]`}>
      <div className="w-[50%]">
        <Image
          style={{ borderRadius: `${content["inner-0"]?.styles?.borderRadius}px`, }}
          src={content["inner-0"]?.image?.src ? content["inner-0"].image.src : "https://picsum.photos/600/300"}
          alt={content["inner-0"]?.image?.alt ? content["inner-0"].image.alt : "Image"}
          className="w-full object-cover rounded"
          width={content["inner-0"]?.image?.width ? content["inner-0"].image.width : 400}
          height={content["inner-0"]?.image?.height ? content["inner-0"].image.height : 200} />
      </div>

      <div style={{ textAlign: `${type === "right" ? "right" : "left"}` }} className="w-[50%] break-words">
        <h2 style={{ fontWeight: content["inner-0"]?.styles?.fontWeight }}
          className="font-semibold mb-2">{content["inner-0"]?.info?.title ? content["inner-0"].info.title : "Lorem, ipsum dolor."}</h2>
        <p style={{ fontWeight: content["inner-0"]?.styles?.textFontWeight ? content["inner-0"]?.styles?.textFontWeight : 400 }}>{content["inner-0"]?.info?.text ? content["inner-0"]?.info?.text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptates!"}</p>
      </div>
    </div>
  )
}

export default Card1