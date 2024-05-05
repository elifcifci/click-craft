import { componentToEdit } from "@/app/redux/features/selectedComponent/selectedComponentSlice";
import { openMenu } from "@/app/redux/features/switchMenu/switchMenuSlice";
import { RootState } from "@/app/redux/store";
import { exampleData } from "@/constants/exampleData";
import Image from "next/image"
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Header1 = ({ id, type = "left", isPreview = false }: { id: string, type?: "center" | "left", isPreview?: boolean }) => {
  const dispatch = useDispatch();
  const [content, setContent] = React.useState(exampleData["Header1"])
  const isUserActionToggled = useSelector((state: RootState) => state.selectedComponentSlice.isUserActionToggled);
  const componentToBeEdit = useSelector((state: RootState) => state.selectedComponentSlice.componentToBeEdit)

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

  const selectEditableComponent = () => {
    dispatch(openMenu())
    // if there is no inner cards in main card innerSelection should be "0".
    dispatch(componentToEdit({ id: id, type: id.split("/")[0], hasImage: true, isStylesChangable: true, innerSelection: 0 }))
  }

  return (
    <header id={id} onClick={() => {
      if (isPreview) {
        selectEditableComponent()
      }
    }} style={{
      height: 70, zIndex: 10, marginBottom: `calc(80 + 10)px`,
      backgroundColor: content["inner-0"].styles?.backgroundColor ? content["inner-0"].styles?.backgroundColor : "#6895D2",
      color: content["inner-0"].styles?.textColor ? content["inner-0"].styles?.textColor : "#000"
    }} className={`${isPreview ? "cursor-pointer" : ""} flex items-center justify-between px-4 gap-1 border text-black-darker bg-black-lighter border-solid rounded-sm w-full`}>
      <div>
        <Image src={content["inner-0"].image?.src ? content["inner-0"].image?.src : `/image/Certificate.svg`}
          alt={content["inner-0"].image?.alt ? content["inner-0"].image?.alt : "Logo"}
          width={content["inner-0"].image?.width ? content["inner-0"].image?.width : 40}
          height={content["inner-0"].image?.height ? content["inner-0"].image?.height : 40} />
        {content["inner-0"].image?.src ? null : <p className="text-sm text-center">Logo</p>}
      </div>
      <div style={{ fontWeight: content["inner-0"].styles?.fontWeight ? content["inner-0"].styles.fontWeight : 600 }} className={`flex gap-2`}>
        <Link href={"/craft#Card1/385"} className={`transition-all hover:font-bold`}>Card2</Link>
        <Link href={"/craft#Card1/385"} className={`transition-all hover:font-bold`}>Card2</Link>
        <Link href={"/craft#Card1/385"} className={`transition-all hover:font-bold`}>Card2</Link>
      </div>
    </header>
  )
}

export default Header1