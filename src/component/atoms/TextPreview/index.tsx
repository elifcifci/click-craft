const TextPreview = ({ align = "start", textAmount = 1, titleWidth = 80, textWidth = 100 }: { align?: "center" | "end" | "start", textAmount?: number, titleWidth?: number, textWidth?: number }) => {
  const amountArr = Array.from(Array(textAmount).keys())
  
  return (
    <div style={{ alignItems: `${align}` }} className="flex flex-col items-center gap-2">
      <div style={{ width: titleWidth }} className={`bg-gray-lighter h-1`} />
      {amountArr.map((item) => <div key={`text-preview-${item}`} style={{ width: textWidth }} className={`bg-gray-lighter h-1`} />)}
    </div>
  )
}

export default TextPreview;