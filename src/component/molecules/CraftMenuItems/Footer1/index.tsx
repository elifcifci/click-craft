import Image from "next/image"
import TextPreview from "../../../atoms/TextPreview"

const Footer1 = () => {

  return (
    <div id="header1" className="flex items-start justify-between gap-3 border text-black-darker bg-gray-lighter border-solid rounded p-1">
      <Image src="/image/Certificate.svg" alt="Image" width={15} height={15} />

      <div className="flex gap-2">
        <div className="flex flex-col gap-1">
          <TextPreview titleWidth={15} />
          <TextPreview titleWidth={20} />
          <TextPreview titleWidth={20} />
        </div>

        <div className="flex flex-col gap-1">
          <TextPreview titleWidth={15} />
          <TextPreview titleWidth={20} />
          <TextPreview titleWidth={20} />
        </div>

        <div className="flex flex-col gap-1">
          <TextPreview titleWidth={15} />
          <TextPreview titleWidth={20} />
          <TextPreview titleWidth={20} />
        </div>
      </div>
    </div>
  )
}

export default Footer1