import React from "react";
import { toggleUserAction } from "@/app/redux/features/selectedComponent/selectedComponentSlice";
import { closeMenu } from "@/app/redux/features/switchMenu/switchMenuSlice";
import { RootState } from "@/app/redux/store";
import ImageInfo from "@/component/atoms/AttributeItems/ImageInfo";
import TextInfo from "@/component/atoms/AttributeItems/TextInfo";
import Styles from "@/component/atoms/AttributeItems/Styles"; import { useDispatch, useSelector } from "react-redux";
import { IImageDataInterface, IInfoDataInterface, ILinkDataInterface, IStyleDataInterface } from "@/interfaces/exampleDataInterface";
import HeaderLinks from "@/component/atoms/AttributeItems/HeaderLinks";
import Modal from "@/component/templates/Modal";
import { dataItems } from "@/constants/exampleData";
import CreatedBy from "@/component/atoms/AttributeItems/CreatedBy";
import FooterLinks from "@/component/atoms/AttributeItems/FooterLinks";

const Attributes = () => {
  const dispatch = useDispatch();
  const componentToBeEdit = useSelector((state: RootState) => state.selectedComponentSlice.componentToBeEdit);
  const isOpenedMenu = useSelector((state: RootState) => state.switchMenuSlice.isOpenedMenu);
  const isHeader = componentToBeEdit.type.includes("Header");
  const isFooter = componentToBeEdit.type.includes("Footer")
  const headerLinks = useSelector((state: RootState) => state.headerLinksSlice.headerLinks);
  const footerData = useSelector((state: RootState) => state.footerLinksSlice.footerLinks)
  const [dataInComponent, setDataInComponent] = React.useState<{ image: IImageDataInterface, info: IInfoDataInterface, links: ILinkDataInterface, styles?: IStyleDataInterface }>();

  const hasQueriedItem = (item: string) => {
    return dataItems?.[componentToBeEdit?.type]?.[componentToBeEdit?.isOuter ? "outerHas" : "innerHas"]?.includes(item)
  }

  const hasImageInfo = componentToBeEdit.hasImage && hasQueriedItem("image")
  const hasTextInfo = componentToBeEdit?.hasText && hasQueriedItem("info")
  const hasStyles = componentToBeEdit?.isStylesChangable && hasQueriedItem("styles")
  const hasHeaderLinks = componentToBeEdit?.hasLink && componentToBeEdit?.type.includes("Header")
  const hasCreatedBy = hasQueriedItem("createdBy");
  const hasFooterLinks = componentToBeEdit?.hasLink && hasQueriedItem("footerLinks");

  React.useEffect(() => {
    const storedData = localStorage.getItem(componentToBeEdit.id)
    let selectedComponent;

    if (storedData) {
      if (componentToBeEdit.isOuter) {
        selectedComponent = JSON.parse(storedData)["outer"]
      } else {
        selectedComponent = JSON.parse(storedData)["inner"][componentToBeEdit.innerSelection]
      }
      setDataInComponent(selectedComponent)
    }
  }, [componentToBeEdit])

  let data;

  const handleSubmit = (formData: FormData) => {
    data = {
      image: { src: formData.get("src")?.toString() ?? "", alt: formData.get("alt")?.toString() ?? "", width: formData.get("width") ?? 200, height: formData.get("height") ?? 100 },
      info: { title: formData.get("title")?.toString() ?? "", text: formData.get("text")?.toString() ?? "" },
      links: isHeader ? headerLinks : null,
      createdBy: { text: formData.get("createdBy")?.toString() ?? "" },
      styles: {
        backgroundType: formData.get("backgroundType")?.toString() ?? "1",
        backgroundColor1: formData.get("backgroundType")?.toString() === "0" ? "#ffffff" : formData.get("backgroundType")?.toString() === "" ? "#75c2f6" : formData.get("backgroundColor1"),
        backgroundColor2: formData.get("backgroundColor2") ?? (isHeader ? "#1d5d9b" : "#ffffff"),
        textColor: formData.get("textColor")?.toString() ?? (isHeader ? "#ffffff" : "#000000"),
        fontWeight: formData.get("fontWeight")?.toString() ?? "400",
        textFontWeight: formData.get("textFontWeight")?.toString() ?? null,
        borderType: formData.get("borderType")?.toString() ?? "0",
        borderWidth: formData.get("borderWidth")?.toString() ?? "0",
        borderRadius: formData.get("borderRadius")?.toString() ?? "0",
        borderColor: formData.get("borderColor")?.toString() ?? (isHeader ? "#ffffff" : "#000000")
      }
    }

    const storedData = localStorage.getItem(componentToBeEdit.id)

    if (storedData) {
      const parsedData = JSON.parse(storedData);

      if (componentToBeEdit.isOuter) {
        parsedData["outer"] = data;
      }
      else {
        parsedData["inner"][componentToBeEdit.innerSelection] = data;
      }

      if (isFooter) {
        parsedData["footerList"] = isFooter ? footerData : null;
      }

      localStorage.setItem(componentToBeEdit.id, JSON.stringify(parsedData))
    }

    dispatch(closeMenu());
    dispatch(toggleUserAction())
  }

  return (
    <Modal isOpen={isOpenedMenu} onClose={() => dispatch(closeMenu())}>
      <form
        action={handleSubmit}
        className="overflow-y-auto px-3 font-medium relative flex flex-col gap-4 mt-5 [&_input]:w-full [&_textarea]:w-full [&_textarea]:!p-[10px] [&_input]:py-[2px] [&_input]:border-2 [&_textarea]:border-2 [&_input]:border-gray-darker [&_textarea]:border-gray-darker [&_label]:shrink-0">
        {componentToBeEdit?.id?.split("/")[0] !== "Header1" && <div className="flex flex-col gap-1 text-black-darker">
          <span className="text-sm" title="Use the link for the header">Component Link:</span>
          <span>{componentToBeEdit?.id}</span>
        </div>}

        {hasImageInfo && <ImageInfo image={dataInComponent?.image ?? { src: "", alt: "", width: undefined, height: undefined }} />}
        {hasTextInfo && <TextInfo info={dataInComponent?.info ?? { title: "", text: "" }} />}
        {hasHeaderLinks && <HeaderLinks />}
        {hasStyles && <Styles />}
        {hasCreatedBy && <CreatedBy />}
        {hasFooterLinks && <FooterLinks />}

        <div className="flex justify-center text-sm">
          <button type="submit" className="bg-gradient-to-r from-blue-darker to-blue-default py-[6px] px-4 rounded-lg text-gray-lighter">Save</button>
        </div>
      </form>
    </Modal>
  )
}

export default Attributes;