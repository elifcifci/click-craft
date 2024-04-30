import { componentToEdit } from "@/app/redux/features/selectedComponent/selectedComponentSlice";
import { openMenu } from "@/app/redux/features/switchMenu/switchMenuSlice";
import { RootState } from "@/app/redux/store";
import TextPreview from "@/component/atoms/TextPreview"
import ManagePreview from "@/component/molecules/ManagePreview";
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux";

const Header1 = ({ id, type = "left" }: { id: string, type?: "center" | "left" }) => {
  const dispatch = useDispatch();
  const componentToBeEdit = useSelector((state: RootState) => state.selectedComponentSlice.componentToBeEdit);
 
  const selectEditableComponent = () => {
    dispatch(openMenu())
    // if there is no inner cards in main card innerSelection should be "0".
    dispatch(componentToEdit({ id: id, type: id.split("/")[0], hasImage: id.split("/")[0] !== "Card4", innerSelection: 0 }))
  }

  return (
    <section id={id} className={`${componentToBeEdit.id === id ? "border-2 border-blue-default border-dashed" : ""} relative w-full rounded-sm p-1`}>
      {/* Manage */}
      {componentToBeEdit.id === id && <ManagePreview id={id} />}

      {/* Content */}
      <header id={id} onClick={selectEditableComponent} className="flex items-center gap-1 border text-black-darker bg-black-lighter border-solid rounded-sm p-1">
        <Image src="/image/Wallpaper.svg" alt="Image" width={20} height={20} />

      </header>
    </section>

  )
}

export default Header1