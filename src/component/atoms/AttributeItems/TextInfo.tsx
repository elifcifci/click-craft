import { IInfoDataInterface } from "@/interfaces/exampleDataInterface";

const TextInfo = ({ info }: { info: IInfoDataInterface }) => {

  return (
    <div className="[&_input]:rounded flex flex-col justify-start gap-2">
      <p className="text-gray-lighter font-medium text-center text-sm">Text Info</p>
      <div className="flex flex-col gap-1 [&_label]:text-gray-lighter [&_label]:w-[48px]">
        <div className="flex items-center justify-start gap-2">
          <label>Title:</label>
          <input type="text" name="title" defaultValue={info?.title} />
        </div>
        <div className="flex items-center justify-start gap-2">
          <label>Text:</label>
          <input type="text" name="text" defaultValue={info?.text} />
        </div>
      </div>
    </div>
  )
}

export default TextInfo;