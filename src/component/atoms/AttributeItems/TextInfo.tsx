import { IInfoDataInterface } from "@/interfaces/exampleDataInterface";

const TextInfo = ({ info }: { info: IInfoDataInterface }) => {

  return (
    <fieldset className="[&_input]:rounded-lg flex flex-col justify-start gap-2 font-medium">
      <legend className="text-black-darker text-center text-sm">Text Info</legend>
      <div className="flex flex-col gap-1 [&_label]:text-black-darker [&_label]:w-[48px]">
        <div className="flex items-center justify-start gap-2">
          <label>Title:</label>
          <input type="text" name="title" defaultValue={info?.title} />
        </div>
        <div className="flex items-center justify-start gap-2">
          <label>Text:</label>
          <input type="text" name="text" defaultValue={info?.text} />
        </div>
      </div>
    </fieldset>
  )
}

export default TextInfo;