import React from "react";
import LinkItem from "../LinkItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { addLink, removeLink, updateAllLinks, updateLink } from "@/app/redux/features/headerLinks/headerLinksSlice";

const HeaderLinks = () => {
  const dispatch = useDispatch();
  const headerLinks: { [key: string]: { id: number, link: string, text: string } } = useSelector((state: RootState) => state.headerLinksSlice.headerLinks)
  const componentToBeEdit = useSelector((state: RootState) => state.selectedComponentSlice.componentToBeEdit);
  const [shouldKeyChange, setShouldKeyChange] = React.useState(false)
  const headerLinkKeys = headerLinks ? Object.keys(headerLinks) : []
  const lengthOfHeaderLinks = headerLinkKeys?.length;
  const lastItemName = headerLinkKeys[headerLinkKeys?.length - 1]
  const isLastLinkFull = !!headerLinks?.[lastItemName]?.link && !!headerLinks?.[lastItemName]?.text

  React.useEffect(() => {
    const storedData = localStorage.getItem(componentToBeEdit.id)
    let selectedComponent;

    if (storedData) {
      if (componentToBeEdit.isOuter) {
        selectedComponent = JSON.parse(storedData)["outer"];
      } else {
        selectedComponent = JSON.parse(storedData)["inner"][componentToBeEdit.innerSelection];
      }
      
      dispatch(updateAllLinks(selectedComponent?.links))
      setShouldKeyChange(!shouldKeyChange);
    }
  }, [componentToBeEdit]);

  const handleAddLink = () => {
    if (isLastLinkFull || !lengthOfHeaderLinks) {
      dispatch(addLink())
      setShouldKeyChange(!shouldKeyChange);
    }
  }

  const handleRemoveLink = (item: string) => {
    dispatch(removeLink(item))
    setShouldKeyChange(!shouldKeyChange);
  }

  return (
    <fieldset className="[&_input]:rounded-lg flex flex-col items-center justify-start pb-3 [&_input]:px-[10px] border-b-2">
      <legend className="text-black-darker w-full text-center font-medium text-sm mb-2">Header Links</legend>
      <div className="w-full" key={`link-list-${shouldKeyChange}`}>
        {headerLinks ? Object.keys(headerLinks).map(item => {
          return (
            <div key={`headerLink-${headerLinks[item].id}-${shouldKeyChange}`} className="flex gap-4 [&_label]:text-black-darker [&_label]:w-[35px] p-1 transition-all hover:bg-gray-default/[0.3]">
              <LinkItem
                key={`text-${headerLinks[item]?.id}-${shouldKeyChange}`}
                label="Text"
                name="text"
                defaultValue={headerLinks?.[item]?.text}
                onChange={(e) => dispatch(updateLink({ linkKey: item, name: "text", value: e.target.value }))} />
              <LinkItem
                key={`Link-${headerLinks[item]?.id}-${shouldKeyChange}`}
                label="Link"
                name="link"
                defaultValue={headerLinks?.[item]?.link}
                onChange={(e) => dispatch(updateLink({ linkKey: item, name: "link", value: e.target.value }))} />
              <div title="Remove the link" onClick={() => handleRemoveLink(item)} className={`cursor-pointer w-[24px] border-2 border-blue-default border-dashed p-1 shrink-0`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" /></svg>
              </div>
            </div>
          )
        }) : null}
      </div>

      <div
        id={`addLink-${shouldKeyChange}`}
        key={`addLink-${shouldKeyChange}`} 
        onClick={handleAddLink} 
        title={isLastLinkFull || !lengthOfHeaderLinks ? "Add new link" : "Last item is empty!"}
        className={`${(isLastLinkFull || !lengthOfHeaderLinks) ? "opacity-100 cursor-pointer" : "opacity-50"} w-[24px] border-2 border-blue-default border-dashed p-1 mt-1`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="black" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
        </svg>
      </div>
    </fieldset>
  )
}

export default HeaderLinks;