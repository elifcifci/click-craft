import React from "react";
import { toggleUserAction } from "@/app/redux/features/selectedComponent/selectedComponentSlice";
import { closeMenu } from "@/app/redux/features/switchMenu/switchMenuSlice";
import { RootState } from "@/app/redux/store";
import ImageInfo from "@/component/atoms/AttributeItems/ImageInfo";
import TextInfo from "@/component/atoms/AttributeItems/TextInfo";
import Styles from "@/component/atoms/AttributeItems/Styles";
import { exampleData } from "@/constants/exampleData";
import { useDispatch, useSelector } from "react-redux";
import { IImageDataInterface, IInfoDataInterface, IStyleDataInterface } from "@/interfaces/exampleDataInterface";

const Attributes = () => {
  const dispatch = useDispatch();
  const componentToBeEdit = useSelector((state: RootState) => state.selectedComponentSlice.componentToBeEdit);
  const [dataInComponent, setDataInComponent] = React.useState<{ image: IImageDataInterface, info: IInfoDataInterface, styles?: IStyleDataInterface }>();

  let data;

  React.useEffect(() => {
    const storedData = localStorage.getItem(componentToBeEdit.id)
    if (storedData) {
      let selectedComponent = JSON.parse(storedData)[componentToBeEdit.innerSelection]
      setDataInComponent(selectedComponent)
    }
  }, [componentToBeEdit.innerSelection])

  const handleSubmit = (formData: FormData) => {
    data = {
      image: { src: formData.get("src")?.toString() ?? "", alt: formData.get("alt")?.toString() ?? "", width: formData.get("width") ?? 200, height: formData.get("height") ?? 100 },
      info: { title: formData.get("title")?.toString() ?? "", text: formData.get("text")?.toString() ?? "" },
      styles: { backgroundColor: formData.get("backgroundColor")?.toString() ?? "", textColor: formData.get("textColor")?.toString() ?? "", fontWeight: formData.get("fontWeight")?.toString() ?? "" }
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
    <div className="[&_input]:w-full [&_input]:px-[2px] [&_input]:outline-none rounded-lg text-xs font-light absolute top-0 right-0 text-black-lighter p-4">
      <form action={handleSubmit} className="relative flex flex-col gap-4">

        {/* Close Icon */}
        <div onClick={() => dispatch(closeMenu())} className="w-[10px] h-[10px] absolute top-[-10px] right-0 cursor-pointer">
          <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
          </svg>
        </div>

        {componentToBeEdit.hasImage && <ImageInfo image={dataInComponent?.image ?? {
          src: "", alt: "", width: undefined, height: undefined
        }} />}
        <TextInfo info={dataInComponent?.info ?? { title: "", text: "" }} />
        {componentToBeEdit?.isStylesChangable && <Styles styles={dataInComponent?.styles ?? { backgroundColor: "", textColor: "", fontWeight: "" }} />}

        <div className="flex justify-center text-sm">
          <button type="submit" className="bg-blue-lighter px-2 rounded text-black-darker">Save</button>
        </div>
      </form>
    </div>
  )
}

export default Attributes;