import HeaderInfoItem from "../HeaderInfoItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import React from "react";
import { addLink, getHeaderLinks, removeLink } from "@/app/redux/features/headerLinks/headerLinksSlice";

const HeaderLinks = () => {
  const dispatch = useDispatch();
  const headerLinks: { [key: string]: { id: number, link: string, text: string } } = useSelector((state: RootState) => state.headerLinksSlice.headerLinks)
  const componentToBeEdit = useSelector((state: RootState) => state.selectedComponentSlice.componentToBeEdit)
  const headerLinkKeys = Object.keys(headerLinks)
  const lengthOfHeaderLinks = headerLinkKeys?.length
  const lastItemName = headerLinkKeys[headerLinkKeys?.length - 1]
  const isLastLinkFull = !!headerLinks[lastItemName]?.link && !!headerLinks[lastItemName]?.text
  const [shouldKeyChange, setShouldKeyChange] = React.useState(false)

  //When page render we should show recorded links
  React.useEffect(() => {
    const storedData = localStorage.getItem(componentToBeEdit.id)
    if (storedData) {
      const parsedData = JSON.parse(storedData)
      setShouldKeyChange(!shouldKeyChange)
      dispatch(getHeaderLinks(parsedData["inner-0"].links))
    }
  }, [])

  const handleAddLink = () => {
    if (isLastLinkFull || !lengthOfHeaderLinks) {
      dispatch(addLink())
      setShouldKeyChange(!shouldKeyChange)
    }
  }

  const handleRemoveLink = (item: string) => {
    dispatch(removeLink(headerLinks?.[item]?.id))
    setShouldKeyChange(!shouldKeyChange)
  }

  return (
    <fieldset className="[&_input]:rounded-lg flex flex-col items-center justify-start pb-3 border-b-2">
      <legend className="text-black-darker w-full text-center font-medium text-sm mb-2">Header Links</legend>
      <div className="w-full">
        {Object.keys(headerLinks).map(item => {
          return (
            <>
              <div key={`headerLink-${headerLinks[item].id}-${shouldKeyChange}`} className="flex gap-4 [&_label]:text-black-darker [&_label]:w-[35px] p-1 transition-all hover:bg-gray-default/[0.3]">
                <div title="Remove the link" onClick={() => handleRemoveLink(item)} className={`cursor-pointer w-[24px] border-2 border-blue-default border-dashed p-1 shrink-0`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" /></svg>
                </div>
                <HeaderInfoItem key={`text-${headerLinks[item].id}-${shouldKeyChange}`} linkKey={item} label="Text" name="text" defaultValue={headerLinks[item].text} />
                <HeaderInfoItem key={`Link-${headerLinks[item].id}-${shouldKeyChange}`} linkKey={item} label="Link" name="link" defaultValue={headerLinks[item].link} />
              </div>
            </>
          )
        })}
      </div>

      <div key={`addLink-${isLastLinkFull}`} onClick={handleAddLink} title="Add new link"
        className={`${(isLastLinkFull || !lengthOfHeaderLinks) ? "opacity-100 cursor-pointer" : "opacity-50"} w-[24px] border-2 border-blue-default border-dashed p-1 mt-1`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="black" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
        </svg>
      </div>
    </fieldset>
  )
}

export default HeaderLinks;