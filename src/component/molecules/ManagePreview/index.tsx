import { useDispatch } from "react-redux"
import { toggleUserAction } from "@/app/redux/features/selectedComponent/selectedComponentSlice";

const ManagePreview = ({ id }: { id: string }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    localStorage.removeItem(id);
    dispatch(toggleUserAction())

    const selectedComponents = localStorage.getItem("selectedComponents")
    if (selectedComponents) {
      const parsedData = JSON.parse(selectedComponents)
      const temp = parsedData.filter((item: { id: string, component: string }) => item.id !== id);
      localStorage.setItem("selectedComponents", JSON.stringify(temp))
    }
  }

  return (
    <div onClick={handleRemoveItem} className="gradient-left rounded absolute top-[-10px] right-0 p-2 z-10 cursor-pointer">
      <svg width="15" height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path fill="#fff" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
      </svg>
    </div>
  )
}

export default ManagePreview