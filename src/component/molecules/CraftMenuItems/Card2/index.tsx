import Image from "next/image"
import TextPreview from "../../../atoms/TextPreview"

const Card2 = () => {

  return (
    <div className="bg-black-lighter flex items-center gap-1 border text-black-darker border-solid rounded-sm p-1">
      <TextPreview align="end"/>
      <Image src="/image/Wallpaper.svg" alt="Image" width={20} height={20} />
    </div>
  )
}

export default Card2