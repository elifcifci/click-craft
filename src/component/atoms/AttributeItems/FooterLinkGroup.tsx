import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LinkItem from "../LinkItem";
import { RootState } from "@/app/redux/store";
import { addLink, removeLink, updateAllLinks, updateLink } from "@/app/redux/features/footerLinks/footerLinksSlice";
import { FooterLink } from "@/interfaces/footerDataInterface";

const FooterLinkGroup = () => {
  const dispatch = useDispatch();
  const footerLinks: FooterLink[] = useSelector((state: RootState) => state.footerLinksSlice.footerLinks);
  const componentToEdit = useSelector((state: RootState) => state.selectedComponentSlice.componentToBeEdit);
  const [shouldKeyChange, setShouldKeyChange] = React.useState(false);
  const numberPartOfComponentToEdit = componentToEdit?.innerSelection
    ? (componentToEdit.innerSelection).match(/\d+/)?.[0]
    : ""
  const index = numberPartOfComponentToEdit ? parseInt(numberPartOfComponentToEdit) : NaN;
  const data = footerLinks?.[index];
  const lengthOfFooterLinks = footerLinks?.length;
  const isLastLinkFull = !!data?.content?.linkList[data?.content?.linkList.length - 1]?.link && !!data?.content?.linkList[data?.content?.linkList.length - 1]?.text

  React.useEffect(() => {
    const storedData = localStorage.getItem(componentToEdit.id)
    let selectedComponent;

    if (storedData) {
      selectedComponent = JSON.parse(storedData)["footerList"];
      
      if(selectedComponent){
        dispatch(updateAllLinks(selectedComponent))
      }
      
      setShouldKeyChange(!shouldKeyChange);
    }
  }, [componentToEdit]);

  const handleAddLink = (listId: string | undefined) => {
    if (listId && (isLastLinkFull || !lengthOfFooterLinks)) {
      dispatch(addLink(listId))
      setShouldKeyChange(!shouldKeyChange)
    }
  }

  const handleRemoveLink = (item: { listId: string, linkId: string }) => {
    dispatch(removeLink(item))
    setShouldKeyChange(!shouldKeyChange);
  }

  return (
    <div>
      <fieldset className="[&_input]:rounded-lg flex flex-col items-center justify-start pb-3 [&_input]:px-[10px] border-b-2">
        <legend className="text-black-darker w-full text-center font-medium text-sm mb-2">Footer Links</legend>

        {
          data
            ? (
              <div
                key={`footer-${shouldKeyChange}`}
                className="flex flex-col items-center"
              >
                <LinkItem
                  className="p-1 [&_label]:w-[35px]"
                  label="Title"
                  name="text"
                  key={`Title-${shouldKeyChange}`}
                  defaultValue={data?.content?.title}
                  onChange={(e) => dispatch(updateLink({ listId: data?.listId, linkId: "", type: "title", value: e.target.value }))} />
                {
                  data?.content?.linkList?.length > 0 ?
                    <div className="w-full">
                      {
                        data?.content?.linkList?.map((linkItem) => {
                          return (
                            <div className="flex gap-4 [&_label]:text-black-darker [&_label]:w-[35px] p-1 transition-all hover:bg-gray-default/[0.3]">
                              <LinkItem
                                label="Text"
                                name="text"
                                key={`Text-${linkItem?.linkId}-${shouldKeyChange}`}
                                defaultValue={linkItem.text}
                                onChange={(e) => dispatch(updateLink({ listId: data?.listId, linkId: linkItem?.linkId, type: "text", value: e.target.value }))} />
                              <LinkItem
                                label="Link"
                                name="link"
                                key={`Link-${linkItem?.linkId}-${shouldKeyChange}`}
                                defaultValue={linkItem.link}
                                onChange={(e) => dispatch(updateLink({ listId: data?.listId, linkId: linkItem?.linkId, type: "link", value: e.target.value }))} />

                              <div title="Remove the link" onClick={() => handleRemoveLink({ listId: data?.listId, linkId: linkItem?.linkId })} className={`cursor-pointer w-[24px] border-2 border-blue-default border-dashed p-1 shrink-0`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                  <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                                </svg>
                              </div>
                            </div>
                          )
                        })
                      }
                    </div>
                    : null
                }

                <div
                  key={`addLink-footer-${shouldKeyChange}`}
                  onClick={() => handleAddLink(data?.listId)}
                  title={isLastLinkFull || !lengthOfFooterLinks ? "Add new link" : "Last item is empty!"}
                  className={`${(isLastLinkFull || !lengthOfFooterLinks) ? "opacity-100 cursor-pointer" : "opacity-50"} w-[24px] border-2 border-blue-default border-dashed p-1 mt-1`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="black" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                  </svg>
                </div>
              </div>
            )
            : null
        }
      </fieldset>
    </div>
  )
}

export default FooterLinkGroup;