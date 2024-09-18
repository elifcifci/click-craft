import { openMenu } from "@/app/redux/features/switchMenu/switchMenuSlice";
import { RootState } from "@/app/redux/store";
import EditIcon from "@/component/atoms/EditIcon";
import { exampleData } from "@/constants/exampleData";
import { FooterLink, IItem } from "@/interfaces/footerDataInterface";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Footer1 = ({ id, isPreview = false, handleClick }: { id: string, isPreview?: boolean, handleClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void }) => {
  const dispatch = useDispatch();
  const [content, setContent] = React.useState(exampleData["Footer1"]);
  const isUserActionToggled = useSelector((state: RootState) => state.selectedComponentSlice.isUserActionToggled);
  const isBackgroundTypeNone = content?.["outer"]?.styles?.backgroundType === "0";
  const footerInner: FooterLink[] = content?.["footerList"] ? content?.["footerList"] : [];
  const parentStyles = content?.["outer"]?.styles;
  const childStyles = content?.["inner"]
  const componentToBeEdit = useSelector((state: RootState) => state.selectedComponentSlice.componentToBeEdit);

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
      className={`${isPreview ? "cursor-pointer" : ""} flex flex-col items-start justify-between p-4 gap-4 text-black-darker w-full md:flex-row`}
      style={{
        background: parentStyles?.backgroundType === "2"
          ? `linear-gradient(90deg, ${parentStyles?.backgroundColor1} 0%, ${parentStyles?.backgroundColor2} 100%`
          : parentStyles?.backgroundColor1,
      }}
    >
      <div className="flex flex-col gap-2">
        {content?.["outer"]?.image?.src
          ? <Image src={content["outer"]?.image?.src}
            alt={content["outer"]?.image?.alt ? content["outer"]?.image?.alt : "Logo"}
            width={content["outer"]?.image?.width ? content["outer"]?.image.width : 40}
            height={content?.["outer"]?.image?.height ? content["outer"].image.height : 40} />
          : <svg width={50} height={50} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill={isBackgroundTypeNone ? "black" : "white"}
              d="M91.7 96C106.3 86.8 116 70.5 116 52C116 23.3 92.7 0 64 0S12 23.3 12 52c0 16.7 7.8 31.5 20 41l0 3 0 352 0 64 64 0 0-64 373.6 0c14.6 0 26.4-11.8 26.4-26.4c0-3.7-.8-7.3-2.3-10.7L432 272l61.7-138.9c1.5-3.4 2.3-7 2.3-10.7c0-14.6-11.8-26.4-26.4-26.4L91.7 96z" />
          </svg>}
        {content?.["outer"]?.createdBy?.text ? <p style={{ color: isBackgroundTypeNone ? "black" : "white" }} className="text-sm text-center text-white">Created By {content?.["outer"]?.createdBy?.text}</p> : null}
      </div>

      {/* Footer List */}
      <ul className="flex gap-2">
        {footerInner?.length
          ? footerInner?.map((item: FooterLink, index: number) => {
            return (
              <li id={`${id}-${index}`}
                key={`footer-title-${item?.listId}`}
                onClick={(e) => handleClick && handleClick(e)}
                className={`${(!componentToBeEdit.isOuter && componentToBeEdit.id === id && componentToBeEdit?.innerSelection === `inner-${index}`) ? "relative border-2 !border-blue-default !border-dashed" : ""} ${isPreview ? "cursor-pointer" : ""} flex flex-col gap-2 p-2 items-center text-black-darker`}
                style={{
                  color: childStyles?.[`inner-${index}`]?.styles?.textColor
                    ? childStyles?.[`inner-${index}`]?.styles?.textColor
                    : "#ffffff",
                }}>
                {/* Management */}
                {(!componentToBeEdit.isOuter && componentToBeEdit.id === id && componentToBeEdit?.innerSelection === `inner-${index}`) && <EditIcon onClick={() => dispatch(openMenu())} className="gradient-left rounded absolute -top-4 left-1 z-40" />}

                {/* Content */}
                <>
                  <p className="text-sm font-medium" style={{ fontWeight: childStyles?.[`inner-${index}`]?.styles?.fontWeight }}>{item?.content?.title}</p>
                  {
                    item?.content?.linkList
                      ? (
                        <ul>
                          {
                            item?.content?.linkList?.map((linkItem: IItem) => {
                              return (
                                <li
                                  className="text-sm"
                                  key={`footer-item-${linkItem?.linkId}`}
                                  style={{ fontWeight: childStyles?.[`inner-${index}`]?.styles?.textFontWeight }}>
                                  <Link href={linkItem.link}>{linkItem.text}</Link>
                                </li>
                              )
                            })
                          }
                        </ul>
                      )
                      : null
                  }
                </>
              </li>
            )
          })
          : null
        }
      </ul>
    </footer>
  )
}

export default Footer1;