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
      style={{ flexDirection: `${type === "right" ? "row-reverse" : "row"}` }}
      className={`${isPreview ? "cursor-pointer" : ""} flex justify-center items-center gap-2 text-black-darker w-full max-w-[1300px]`}>
      <div className="w-[50%]">
        <Image src={content["inner-0"]?.image?.src ? content["inner-0"].image.src : "https://picsum.photos/600/300"}
          alt={content["inner-0"]?.image?.alt ? content["inner-0"].image.alt : "Image"}
          className="w-full object-cover rounded"
          width={content["inner-0"]?.image?.width ? content["inner-0"].image.width : 400}
          height={content["inner-0"]?.image?.height ? content["inner-0"].image.height : 200} />
      </div>

      <div style={{ textAlign: `${type === "right" ? "right" : "left"}` }} className="w-[50%] break-words">
        <h2 className="font-semibold mb-2">{content["inner-0"]?.info?.title ? content["inner-0"].info.title : "Lorem, ipsum dolor."}</h2>
        <p>{content["inner-0"]?.info?.text ? content["inner-0"]?.info?.text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptates!"}</p>
      </div>
    </div>
  )
}

export default Card1