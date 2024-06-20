import { RootState } from "@/app/redux/store";
import { exampleData } from "@/constants/exampleData";
import Image from "next/image"
import { scrollPreviewUtil } from "@/utils/scrollPageUtil";
import React from "react";
import { useSelector } from "react-redux";

const Header1 = ({ id, isPreview = false, handleClick }: { id: string, isPreview?: boolean, handleClick?: () => void }) => {
  const [content, setContent] = React.useState(exampleData["Header1"])
  const isUserActionToggled = useSelector((state: RootState) => state.selectedComponentSlice.isUserActionToggled);
  const isBackgroundTypeNone = content["inner-0"]?.styles?.backgroundType === "0";

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
    <header id={id}
      onClick={() => handleClick && handleClick()}
      style={{
        height: 70,
        marginBottom: `calc(80 + 10)px`,
        background: content["inner-0"]?.styles?.backgroundType === "2"
          ? `linear-gradient(90deg, ${content["inner-0"]?.styles?.backgroundColor1} 0%, ${content["inner-0"]?.styles?.backgroundColor2} 100%`
          : content["inner-0"]?.styles?.backgroundColor1,
        color: content["inner-0"]?.styles?.textColor ? content["inner-0"].styles.textColor : "#ffffff",
        borderWidth: `${content["inner-0"]?.styles?.borderWidth}px`,
        borderRadius: `${content["inner-0"]?.styles?.borderRadius}px`,
        borderColor: content["inner-0"]?.styles?.borderColor ? content["inner-0"]?.styles?.borderColor : "#ffffff",
        borderStyle: content["inner-0"]?.styles?.borderType
      }} className={`${isPreview ? "cursor-pointer" : ""} flex items-center justify-between px-4 gap-1 text-black-darker w-full`}>

      <div>
        {content["inner-0"]?.image?.src ? <Image src={content["inner-0"].image.src}
          alt={content["inner-0"]?.image?.alt ? content["inner-0"].image.alt : "Logo"}
          width={content["inner-0"]?.image?.width ? content["inner-0"].image.width : 40}
          height={content["inner-0"]?.image?.height ? content["inner-0"].image.height : 40} />
          : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill={isBackgroundTypeNone ? "black" : "white"}
              d="M91.7 96C106.3 86.8 116 70.5 116 52C116 23.3 92.7 0 64 0S12 23.3 12 52c0 16.7 7.8 31.5 20 41l0 3 0 352 0 64 64 0 0-64 373.6 0c14.6 0 26.4-11.8 26.4-26.4c0-3.7-.8-7.3-2.3-10.7L432 272l61.7-138.9c1.5-3.4 2.3-7 2.3-10.7c0-14.6-11.8-26.4-26.4-26.4L91.7 96z" />
          </svg>}
        {content["inner-0"]?.image?.src ? null : <p style={{ color: isBackgroundTypeNone ? "black" : "white" }} className="text-sm text-center text-white">Logo</p>}
      </div>

      <div style={{ fontWeight: content["inner-0"]?.styles?.fontWeight ? content["inner-0"].styles.fontWeight : 600 }} className={`flex gap-2`}>
        {content["inner-0"]?.links !== undefined && Object.keys(content["inner-0"].links).map((item) => {
          return (
            <span key={`header1-${item}`} title={content["inner-0"]?.links ? content["inner-0"]?.links[item].link : ""} className={`transition-all hover:font-bold`}
              onClick={(e) => {
                if (content["inner-0"]?.links) {
                  const element = document.getElementById(e.currentTarget.title);
                  if (element) scrollPreviewUtil(element);
                }
              }}
            >
              {content["inner-0"]?.links ? content["inner-0"]?.links[item]?.text : "Link1"}
            </span>)
        })}
      </div>
    </header>
  )
}

export default Header1