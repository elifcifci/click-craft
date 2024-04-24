import Image from "next/image"
import TextPreview from "../../../atoms/TextPreview"

const Card2 = () => {

  return (
    <div className="flex items-center gap-1 border-[1px] text-black-darker border-black border-solid rounded-sm p-1">
      <TextPreview align="end"/>
      <Image src="/image/Wallpaper.svg" alt="Image" width={20} height={20} />
    </div>
  )
}

export default Card2