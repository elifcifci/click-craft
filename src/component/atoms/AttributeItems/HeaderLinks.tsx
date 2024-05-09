import HeaderInfoItem from "../HeaderInfoItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import React from "react";
import { addLink, getHeaderLinks } from "@/app/redux/features/headerLinks/headerLinksSlice";

const HeaderLinks = () => {
  const dispatch = useDispatch();
  const headerLinks = useSelector((state: RootState) => state.headerLinksSlice.headerLinks)
  const componentToBeEdit = useSelector((state: RootState) => state.selectedComponentSlice.componentToBeEdit)

  //When page render we should show recorded links
  React.useEffect(() => {
    const storedData = localStorage.getItem(componentToBeEdit.id)
    if (storedData) {
      const parsedData = JSON.parse(storedData)      
      dispatch(getHeaderLinks(parsedData["inner-0"].links))
    }
  }, [])

  const handleClick = () => {
    const linksAmount = Object.keys(headerLinks).length;
    if (headerLinks[`link${linksAmount}`].link && headerLinks[`link${linksAmount}`].text) {
      dispatch(addLink())
    }
  }

  return (
    <fieldset className="[&_input]:rounded flex flex-col items-center justify-start gap-2">
      <legend className="text-gray-lighter w-full text-center font-medium text-sm">Header Links</legend>
      {Object.keys(headerLinks).map((item, index) => {
        return (
          <div key={`headerLink-${index}`} className="flex flex-col gap-1 [&_label]:text-gray-lighter [&_label]:w-[48px]	">
            <HeaderInfoItem linkKey={item} label="Text" name="text" defaultValue={headerLinks[item].text} />
            <HeaderInfoItem linkKey={item} label="Link" name="link" defaultValue={headerLinks[item].link} />
          </div>
        )
      })}

      <div key={`addLink-${headerLinks[`link${Object.keys(headerLinks).length}`].link && headerLinks[`link${Object.keys(headerLinks).length}`].text}`} onClick={handleClick} title="Add new link"
        className={`${headerLinks[`link${Object.keys(headerLinks).length}`].link && headerLinks[`link${Object.keys(headerLinks).length}`].text ? "opacity-100 cursor-pointer" : "opacity-25"} w-[24px] border-2 border-blue-default border-dashed p-1`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="white" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
        </svg>
      </div>
    </fieldset>
  )
}

export default HeaderLinks;