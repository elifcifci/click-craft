import { RootState } from "@/app/redux/store";
import { exampleData } from "@/constants/exampleData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Footer1 = ({ id, isPreview = false, handleClick }: { id: string, isPreview?: boolean, handleClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void  }) => {
  const [content, setContent] = React.useState(exampleData["Footer1"])
  const isUserActionToggled = useSelector((state: RootState) => state.selectedComponentSlice.isUserActionToggled);
  const isBackgroundTypeNone = content["outer"]?.styles?.backgroundType === "0";
  const footerInner = content["inner"]["inner-0"]
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
    <footer
      id={`outer-${id}`}
      onClick={(e) => handleClick && handleClick(e)}
      className={`${isPreview ? "cursor-pointer" : ""} flex items-center justify-between px-4 gap-1 text-black-darker w-full`}
    >
      <div>
        {content["outer"]?.image?.src
          ? <Image src={content["outer"]?.image?.src}
            alt={content["outer"]?.image?.alt ? content["outer"]?.image?.alt : "Logo"}
            width={content["outer"]?.image?.width ? content["outer"]?.image.width : 40}
            height={content["outer"]?.image?.height ? content["outer"].image.height : 40} />
          : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill={isBackgroundTypeNone ? "black" : "white"}
              d="M91.7 96C106.3 86.8 116 70.5 116 52C116 23.3 92.7 0 64 0S12 23.3 12 52c0 16.7 7.8 31.5 20 41l0 3 0 352 0 64 64 0 0-64 373.6 0c14.6 0 26.4-11.8 26.4-26.4c0-3.7-.8-7.3-2.3-10.7L432 272l61.7-138.9c1.5-3.4 2.3-7 2.3-10.7c0-14.6-11.8-26.4-26.4-26.4L91.7 96z" />
          </svg>}
        {content["outer"]?.image?.src ? null : <p style={{ color: isBackgroundTypeNone ? "black" : "white" }} className="text-sm text-center text-white">Created By {content?.["outer"]?.createdBy}</p>}
      </div>

      {/* Footer List */}
      <ul>
        {footerInner?.["listTitles"] ? footerInner["listTitles"].map((title) => {
          return (
            <li key={`footer-title-${title.id}`}>
              <p>{title.text}</p>
              {footerInner?.listItem?.[title.id]
                ? <ul>{footerInner?.listItem?.[title.id].map((item) => {
                  return (
                    <li key={`footer-item-${title.id}${item.id}`}>
                      <Link href={item.link}>{item.text}</Link>
                    </li>
                  )
                })}</ul>
                : null}
            </li>
          )
        }) : null}
      </ul>
    </footer>
  )
}

export default Footer1;