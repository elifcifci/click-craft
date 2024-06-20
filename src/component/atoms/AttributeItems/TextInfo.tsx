import { IInfoDataInterface } from "@/interfaces/exampleDataInterface";

const TextInfo = ({ info }: { info: IInfoDataInterface }) => {

  return (
    <fieldset className="[&_input]:rounded-lg [&_textarea]:rounded-lg flex flex-col justify-start gap-2 font-medium pb-3 border-b-2">
      <legend className="text-black-darker text-center text-sm mb-2">Text Info</legend>
      <div className="flex flex-col [&_label]:text-black-darker [&_label]:w-[48px]">
        <div className="flex items-center justify-start gap-2 p-1">
          <label>Title:</label>
          <input type="text" name="title" defaultValue={info?.title} />
        </div>
        <div className="flex items-center justify-start gap-2 p-1">
          <label>Text:</label>
          <textarea name="text" defaultValue={info?.text} rows={4}/>
        </div>
      </div>
    </fieldset>
  )
}

export default TextInfo;