const TextPreview = ({ showText = false, align = "start", textAmount = 1, titleWidth = 80, textWidth = 100 }: { showText?: boolean, align?: "center" | "end" | "start", textAmount?: number, titleWidth?: number, textWidth?: number }) => {
  const amountArr = Array.from(Array(textAmount).keys())

  return (
    <div style={{ alignItems: `${align}` }} className="flex flex-col items-center gap-2">
      <div style={{ width: titleWidth }} className={`bg-black-lighter h-1`} />
      {showText && amountArr.map((item) => <div key={`text-preview-${item}`} style={{ width: textWidth }} className={`bg-black-lighter h-1`} />)}
    </div>
  )
}

export default TextPreview;