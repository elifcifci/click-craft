import React from "react";
import { toggleUserAction } from "@/app/redux/features/selectedComponent/selectedComponentSlice";
import { closeMenu } from "@/app/redux/features/switchMenu/switchMenuSlice";
import { RootState } from "@/app/redux/store";
import ImageInfo from "@/component/atoms/AttributeItems/ImageInfo";
import TextInfo from "@/component/atoms/AttributeItems/TextInfo";
import Styles from "@/component/atoms/AttributeItems/Styles";
import { exampleData } from "@/constants/exampleData";
import { useDispatch, useSelector } from "react-redux";
import { IImageDataInterface, IInfoDataInterface, ILinkDataInterface, IStyleDataInterface } from "@/interfaces/exampleDataInterface";
import HeaderLinks from "@/component/atoms/AttributeItems/HeaderLinks";
import Modal from "@/component/templates/Modal";

const Attributes = () => {
  const dispatch = useDispatch();
  const componentToBeEdit = useSelector((state: RootState) => state.selectedComponentSlice.componentToBeEdit);
  const isOpenedMenu = useSelector((state: RootState) => state.switchMenuSlice.isOpenedMenu);
  const isHeader = componentToBeEdit.type.includes("Header")
  const headerLinks = useSelector((state: RootState) => state.headerLinksSlice.headerLinks)
  const [dataInComponent, setDataInComponent] = React.useState<{ image: IImageDataInterface, info: IInfoDataInterface, links: ILinkDataInterface, styles?: IStyleDataInterface }>();

  React.useEffect(() => {
    const storedData = localStorage.getItem(componentToBeEdit.id)
    if (storedData) {
      let selectedComponent = JSON.parse(storedData)[componentToBeEdit.innerSelection]
      setDataInComponent(selectedComponent)
    }
  }, [componentToBeEdit.innerSelection])

  let data;

  const handleSubmit = (formData: FormData) => {
    data = {
      image: { src: formData.get("src")?.toString() ?? "", alt: formData.get("alt")?.toString() ?? "", width: formData.get("width") ?? 200, height: formData.get("height") ?? 100 },
      info: { title: formData.get("title")?.toString() ?? "", text: formData.get("text")?.toString() ?? "" },
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
      },
      links: isHeader ? headerLinks : null
    }

    if (componentToBeEdit.innerSelection) {
      const storedData = localStorage.getItem(componentToBeEdit.id)

      // different operations are performed depending on whether the data has been registered before or not
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        parsedData[componentToBeEdit.innerSelection] = data;
        localStorage.setItem(componentToBeEdit.id, JSON.stringify(parsedData))
      }
      else {
        let temp: any = exampleData[componentToBeEdit.type]
        temp[componentToBeEdit.innerSelection] = data;
        localStorage.setItem(componentToBeEdit.id, JSON.stringify(temp))
      }
    }
    else {
      localStorage.setItem(componentToBeEdit.id, JSON.stringify(data))
    }

    dispatch(closeMenu());
    dispatch(toggleUserAction())
  }

  return (
    <Modal isOpen={isOpenedMenu} onClose={() => dispatch(closeMenu())}>
      <form action={handleSubmit} className="overflow-y-auto px-3 font-medium relative flex flex-col gap-4 mt-5 
                                             [&_input]:w-full [&_textarea]:w-full [&_input]:px-[2px] [&_input]:py-[2px]
                                             [&_input]:border-2 [&_textarea]:border-2 [&_input]:border-gray-darker
                                             [&_textarea]:border-gray-darker [&_label]:shrink-0">
        {componentToBeEdit.id.split("/")[0] !== "Header1" && <div className="flex flex-col gap-1 text-black-darker">
          <span className="text-sm" title="Use the link for the header">Component Link:</span>
          <span>{componentToBeEdit.id}</span>
        </div>}
        {componentToBeEdit.hasImage && <ImageInfo image={dataInComponent?.image ?? {
          src: "", alt: "", width: undefined, height: undefined
        }} />}
        {componentToBeEdit?.hasText && <TextInfo info={dataInComponent?.info ?? { title: "", text: "" }} />}
        {componentToBeEdit?.hasLink && <HeaderLinks />}
        {componentToBeEdit?.isStylesChangable && <Styles />}
        <div className="flex justify-center text-sm">
          <button type="submit" className="bg-gradient-to-r from-blue-darker to-blue-default py-[6px] px-4 rounded-lg text-gray-lighter">Save</button>
        </div>
      </form>
    </Modal>
  )
}

export default Attributes;