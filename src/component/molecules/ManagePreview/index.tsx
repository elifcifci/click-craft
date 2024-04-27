import { switchMenu } from "@/app/redux/features/switchMenu/switchMenuSlice"
import { useDispatch } from "react-redux"
import { componentToEdit, toggleUserAction } from "@/app/redux/features/selectedComponent/selectedComponentSlice";

const ManagePreview = ({ id }: { id: string }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(switchMenu())
    dispatch(componentToEdit(id))
  }

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
    <div className="relative flex justify-between">
      <div onClick={handleClick} className="flex items-center gap-2 cursor-pointer">
        <p className="text-black-darker text-xs">Edit</p>
        <svg width="10" height="6" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 10C8.78475 10 8.5765 9.96183 8.37525 9.8855C8.17291 9.80916 8.00448 9.70738 7.86995 9.58015L0.443946 2.55725C0.147981 2.27735 0 1.92112 0 1.48855C0 1.05598 0.147981 0.699745 0.443946 0.419847C0.73991 0.139949 1.11659 0 1.57399 0C2.03139 0 2.40807 0.139949 2.70404 0.419847L9 6.37405L15.296 0.419847C15.5919 0.139949 15.9686 0 16.426 0C16.8834 0 17.2601 0.139949 17.5561 0.419847C17.852 0.699745 18 1.05598 18 1.48855C18 1.92112 17.852 2.27735 17.5561 2.55725L10.13 9.58015C9.96861 9.73282 9.79372 9.84071 9.60538 9.90382C9.41704 9.96794 9.21525 10 9 10Z" fill="#3B3A37" />
        </svg>
      </div>

      <div onClick={handleRemoveItem} className="flex items-center gap-2 cursor-pointer">
        <p className="text-black-darker text-xs">Remove</p>
        <svg width="20" height="10" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" fill="#3B3A37" />
        </svg>
      </div>
    </div>
  )
}

export default ManagePreview