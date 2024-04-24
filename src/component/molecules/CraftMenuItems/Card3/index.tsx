import TextPreview from "@/component/atoms/TextPreview"
import Image from "next/image"

const Card3 = ({ textAmount = 3 }: { textAmount?: number }) => {
  const amountArr = Array.from(Array(textAmount).keys())

  return (
    <div className="flex justify-between">
      {amountArr.map((item) => <div key={`card-3-${item}`} className="flex flex-col gap-1 items-center border-[1px] text-black-darker border-black border-solid bg-black-lighter rounded-sm p-1">
        <Image src="/image/Wallpaper.svg" alt="Image" width={20} height={20} />
        <TextPreview align="center" textAmount={2} titleWidth={22} textWidth={32} />
      </div>)}
    </div>
  )
}

export default Card3