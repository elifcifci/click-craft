import { toggleUserAction } from "@/app/redux/features/selectedComponent/selectedComponentSlice";
import { closeMenu } from "@/app/redux/features/switchMenu/switchMenuSlice";
import { RootState } from "@/app/redux/store";
import { useDispatch, useSelector } from "react-redux";

const CardAttributes = () => {
  const dispatch = useDispatch();
  const componentToBeEdit = useSelector((state: RootState) => state.selectedComponentSlice.componentToBeEdit);
  let data;

  const handleSubmit = (formData: FormData) => {
    data = {
      image: { src: formData.get("src"), alt: formData.get("alt"), width: formData.get("width"), height: formData.get("height") },
      info: { title: formData.get("title"), text: formData.get("text") }
    }
    localStorage.setItem(componentToBeEdit, JSON.stringify(data))
    dispatch(closeMenu());
    dispatch(toggleUserAction())
  }

  return (
    <div className="[&_input]:rounded [&_input]:w-full [&_input]:px-[2px] [&_input]:outline-none rounded-lg text-xs font-light absolute top-0 right-0 text-black-lighter p-4">
      <form action={handleSubmit} className="relative flex flex-col gap-4">

        {/* Close Icon */}
        <div onClick={() => dispatch(closeMenu())} className="w-[10px] h-[10px] absolute top-[-10px] right-0">
          <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
          </svg>
        </div>

        {/* Image Info */}
        <div className="flex flex-col items-center justify-start gap-2">
          <p className="text-gray-lighter font-medium text-sm">Image Info</p>
          <div className="flex flex-col gap-1 [&_label]:text-gray-lighter [&_label]:w-[48px]	">

            <div className="flex items-center justify-start gap-2">
              <label>Link:</label>
              <input name="src" />
            </div>

            <div className="flex items-center justify-start gap-2">
              <label title="it seems when image could not download.">Text:</label>
              <input name="alt" />
            </div>

            <div className="flex items-center justify-start gap-2">
              <div className="flex items-center justify-start gap-2">
                <label>Width:</label>
                <input type="number" name="width" />
              </div>
              <div className="flex items-center justify-start gap-2">
                <label>Height:</label>
                <input type="number" name="height" />
              </div>
            </div>

          </div>
        </div>

        {/* Text Info */}
        <div className="flex flex-col justify-start gap-2">
          <p className="text-gray-lighter font-medium text-center text-sm">Text Info</p>
          <div className="flex flex-col gap-1 [&_label]:text-gray-lighter [&_label]:w-[48px]">
            <div className="flex items-center justify-start gap-2">
              <label>Title:</label>
              <input name="title" />
            </div>
            <div className="flex items-center justify-start gap-2">
              <label>Text:</label>
              <input name="text" />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center text-sm">
          <button type="submit" className="bg-blue-lighter px-2 rounded font-bold text-black-darker">Save</button>
        </div>

      </form>
    </div>

  )
}

export default CardAttributes;