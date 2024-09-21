import { RootState } from "@/app/redux/store";
import { exampleData } from "@/constants/exampleData";
import Image from "next/image"
import { scrollPreviewUtil } from "@/utils/scrollPageUtil";
import React from "react";
import { useSelector } from "react-redux";

const Header1 = ({ id, isPreview = false, handleClick }: { id: string, isPreview?: boolean, handleClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void }) => {
  const [content, setContent] = React.useState(exampleData["Header1"])
  const isUserActionToggled = useSelector((state: RootState) => state.selectedComponentSlice.isUserActionToggled);
  const headerContent = content?.["outer"]
  const headerStyle = content?.["outer"]?.styles
  const headerLinks = headerContent?.links
  const isBackgroundTypeNone = headerStyle?.backgroundType === "0";

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
    <header id={`outer-${id}`} 
      onClick={(e) => handleClick && handleClick(e)}
      style={{
        height: 70,
        marginBottom: `calc(80 + 10)px`,
        background: headerStyle?.backgroundType === "2"
          ? `linear-gradient(90deg, ${headerStyle?.backgroundColor1} 0%, ${headerStyle?.backgroundColor2} 100%`
          : headerStyle?.backgroundColor1,
        color: headerStyle?.textColor ? headerStyle?.textColor : "#ffffff",
        borderWidth: `${headerStyle?.borderWidth}px`,
        borderRadius: `${headerStyle?.borderRadius}px`,
        borderColor: headerStyle?.borderColor ? headerStyle?.borderColor : "#ffffff",
        borderStyle: headerStyle?.borderType
      }} className={`${isPreview ? "cursor-pointer" : ""} flex items-center justify-between px-4 gap-1 text-black-darker w-full`}>

      <div>
        {headerContent?.image?.src ? <Image src={headerContent.image.src}
          alt={headerContent?.image?.alt ? headerContent.image.alt : "Logo"}
          width={headerContent?.image?.width ? headerContent.image.width : 40}
          height={headerContent?.image?.height ? headerContent.image.height : 40} />
          : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill={isBackgroundTypeNone ? "black" : "white"}
              d="M91.7 96C106.3 86.8 116 70.5 116 52C116 23.3 92.7 0 64 0S12 23.3 12 52c0 16.7 7.8 31.5 20 41l0 3 0 352 0 64 64 0 0-64 373.6 0c14.6 0 26.4-11.8 26.4-26.4c0-3.7-.8-7.3-2.3-10.7L432 272l61.7-138.9c1.5-3.4 2.3-7 2.3-10.7c0-14.6-11.8-26.4-26.4-26.4L91.7 96z" />
          </svg>}
        {headerContent?.image?.src ? null : <p style={{ color: isBackgroundTypeNone ? "black" : "white" }} className="text-sm text-center text-white">Logo</p>}
      </div>

      <div style={{ fontWeight: headerStyle?.fontWeight ? headerStyle?.fontWeight : 600 }} className={`flex gap-2`}>
        {headerLinks && Object.keys(headerLinks).map((item) => {

          return (
            <span key={`header1-${item}`}
              title={headerLinks ? headerLinks?.[item]?.link : ""}
              className={`transition-all hover:font-bold`}
              onClick={(e) => {
                if (headerLinks && document) {
                  const element = document.getElementById(e.currentTarget.title);
                  if (element) scrollPreviewUtil(element);
                }
              }}
            >
              {headerLinks ? headerLinks[item]?.text : ""}
            </span>)
        })}
      </div>
    </header>
  )
}

export default Header1