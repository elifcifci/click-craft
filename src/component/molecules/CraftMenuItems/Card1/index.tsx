import TextPreview from "@/component/atoms/TextPreview"
import Image from "next/image"

const Card1 = () => {
  return (
    <div id="card1" className="flex items-center gap-1 border-[1px] text-black-darker border-black-darker border-solid rounded-sm p-1">
      <Image src="/image/Wallpaper.svg" alt="Image" width={20} height={20} />
      <TextPreview />
    </div>
  )
}

export default Card1