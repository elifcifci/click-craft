import { IStyleDataInterface } from "@/interfaces/exampleDataInterface";

const Styles = ({ styles }: { styles: IStyleDataInterface }) => {
  
  return (
    <div className="flex flex-col items-center justify-start gap-2">
      <p className="font-medium text-sm">Styles</p>
      <div className="flex flex-col gap-4 [&_input]:cursor-pointer">
        <fieldset className="flex flex-col items-center justify-start gap-1">
          <legend className="text-left w-full text-sm">Colors:</legend>
          <div className="flex [&_input]:min-w-[24px] [&_input]:h-[20px] [&_input]:border-0 gap-2">
            <div className="flex items-center justify-start gap-2">
              <label htmlFor="textColor">Background:</label>
              <input id="backgroundColor" type="color" name="backgroundColor" defaultValue={styles?.backgroundColor} />
            </div>

            <div className="flex items-center justify-start gap-2">
              <label htmlFor="textColor" title="it seems when image could not download.">Text:</label>
              <input id="textColor" type="color" name="textColor" defaultValue={styles?.textColor} />
            </div>
          </div>
        </fieldset>

        <fieldset className="flex flex-col items-center justify-start gap-1">
          <legend className="w-full text-sm">Font Weight:</legend>
          <div className="flex items-center justify-start gap-2 [&_div]:flex [&_div]:gap-1 [&_label]:cursor-pointer [&_input]:cursor-pointer">
            <div>
              <input type="radio" id="thin" name="fontWeight" value="400" />
              <label htmlFor="thin">Thin</label>
            </div>
            <div>
              <input type="radio" id="normal" name="fontWeight" value="600" />
              <label htmlFor="normal">Normal</label>
            </div>
            <div>
              <input type="radio" id="bold" name="fontWeight" value="800" />
              <label htmlFor="bold">Bold</label>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  )
}

export default Styles;