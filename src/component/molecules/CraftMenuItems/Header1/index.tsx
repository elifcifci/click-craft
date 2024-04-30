import Image from "next/image"
import TextPreview from "../../../atoms/TextPreview"

const Header1 = () => {

  return (
    <div id="header1" className="flex items-center justify-between gap-3 border text-black-darker bg-black-lighter border-solid rounded-sm p-1">
      <Image src="/image/Certificate.svg" alt="Image" width={20} height={20} />

      <div className="flex gap-2">
        <TextPreview titleWidth={20} />
        <TextPreview titleWidth={20} />
        <TextPreview titleWidth={20} />
      </div>
    </div>
  )
}

export default Header1