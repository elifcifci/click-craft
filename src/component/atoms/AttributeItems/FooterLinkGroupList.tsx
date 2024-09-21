import React from "react";
import { FooterLink } from "@/interfaces/footerDataInterface";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import LinkItem from "../LinkItem";
import { addList, removeList, updateAllLinks, updateLink } from "@/app/redux/features/footerLinks/footerLinksSlice";

const FooterLinkGroupList = () => {
  const dispatch = useDispatch();
  const componentToBeEdit = useSelector((state: RootState) => state.selectedComponentSlice.componentToBeEdit);
  const footerLinks: FooterLink[] = useSelector((state: RootState) => state.footerLinksSlice.footerLinks);
  const [shouldKeyChange, setShouldKeyChange] = React.useState(false);
  const lengthOfFooterList = footerLinks?.length;
  const isLastLinkFull = !!footerLinks?.[footerLinks.length - 1]?.content?.title

  React.useEffect(() => {
    const storedData = localStorage.getItem(componentToBeEdit.id)
    let selectedComponent;

    if (storedData) {
      selectedComponent = JSON.parse(storedData)["footerList"];

      if (selectedComponent) {
        dispatch(updateAllLinks(selectedComponent))
      }

      setShouldKeyChange(!shouldKeyChange);
    }
  }, [componentToBeEdit]);

  const handleAddList = () => {
    if (isLastLinkFull || !lengthOfFooterList) {
      dispatch(addList())
      setShouldKeyChange(!shouldKeyChange)
    }
  }

  const handleRemoveList = (listId: string) => {
    dispatch(removeList(listId))
    setShouldKeyChange(!shouldKeyChange);
  }

  return (
    <fieldset className="[&_input]:rounded-lg flex flex-col pb-3 [&_input]:px-[10px] border-b-2">
      <legend className="text-black-darker w-full text-center font-medium text-sm mb-2">Footer Link List</legend>
      {
        footerLinks?.map((item) => {
          return (
            <div key={`footerLinks-${item.listId}`} className="flex gap-4 [&_label]:text-black-darker [&_label]:w-[70px] p-1 transition-all hover:bg-gray-default/[0.3]">
              <LinkItem
                label="Group Title"
                name="text"
                key={`link-group-title-${item?.listId}-${shouldKeyChange}`}
                defaultValue={item?.content?.title}
                onChange={(e) => dispatch(updateLink({ listId: item?.listId, linkId: "", type: "title", value: e.target.value }))} />
              <div title="Remove the list" onClick={() => handleRemoveList(item?.listId)} className={`cursor-pointer w-[24px] border-2 border-blue-default border-dashed p-1 shrink-0`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                </svg>
              </div>
            </div>
          )
        })
      }

      <div
        key={`addLink-footer-${shouldKeyChange}`}
        onClick={() => handleAddList()}
        title={isLastLinkFull || !lengthOfFooterList ? "Add new list" : "Last item is empty!"}
        className={`${(isLastLinkFull || !lengthOfFooterList) ? "opacity-100 cursor-pointer" : "opacity-50"} w-[24px] border-2 border-blue-default border-dashed p-1 mt-1 mx-auto`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="black" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
        </svg>
      </div>
    </fieldset>
  )
}

export default FooterLinkGroupList;