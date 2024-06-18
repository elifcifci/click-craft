import TextPreview from "@/component/atoms/TextPreview"
import Image from "next/image"

const Card1 = () => {
  return (
    <div id="card1" className="flex items-center justify-between gap-1 border text-black-darker bg-gray-lighter border-solid rounded p-1 px-2">
      <Image src="/image/Wallpaper.svg" alt="Image" width={20} height={20} />
      <TextPreview showText/>
    </div>
  )
}

export default Card1