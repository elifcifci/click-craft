import Image from "next/image"
import TextPreview from "../../../atoms/TextPreview"

const Card2 = () => {

  return (
    <div className="bg-gray-lighter flex items-center justify-between gap-1 border text-black-darker border-solid rounded p-1 px-2">
      <TextPreview showText align="end"/>
      <Image src="/image/Wallpaper.svg" alt="Image" width={20} height={20} />
    </div>
  )
}

export default Card2