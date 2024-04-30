import TextPreview from "@/component/atoms/TextPreview"
import Image from "next/image"

const Card1 = () => {
  return (
    <div id="card1" className="flex items-center gap-1 border text-black-darker bg-black-lighter border-solid rounded-sm p-1">
      <Image src="/image/Wallpaper.svg" alt="Image" width={20} height={20} />
      <TextPreview showText/>
    </div>
  )
}

export default Card1