import TextPreview from "../../../atoms/TextPreview"

const Card4 = ({ textAmount = 3 }: { textAmount?: number }) => {
  const amountArr = Array.from(Array(textAmount).keys())

  return (
    <div className="flex justify-between">
      {amountArr.map((item) => <div key={`card-4-${item}`} className="flex flex-col items-center border text-black-darker border-black border-solid bg-gray-lighter rounded p-1 py-3">
        <TextPreview showText align="center" textAmount={3} titleWidth={22} textWidth={32} />
      </div>)}
    </div>
  )
}

export default Card4