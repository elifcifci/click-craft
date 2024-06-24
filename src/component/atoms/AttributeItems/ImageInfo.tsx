import { IImageDataInterface } from "@/interfaces/exampleDataInterface";

const ImageInfo = ({ image }: { image: IImageDataInterface }) => {
  return (
    <fieldset className="[&_input]:rounded-lg [&_input]:px-[10px] flex flex-col items-center justify-start gap-2 font-medium pb-3 border-b-2">
      <legend className="text-black-darker w-full text-sm text-center mb-2">Image Info</legend>
      <div className="flex flex-col w-full [&_label]:text-black-darker [&_label]:w-[48px]">

        <div className="flex items-center justify-start gap-2 p-1">
          <label>Url:</label>
          <input type="text" name="src" defaultValue={image?.src} />
        </div>

        <div className="flex items-center justify-start gap-2 p-1">
          <label title="it seems when image could not download.">Text:</label>
          <input type="text" name="alt" defaultValue={image?.alt} />
        </div>

        <div className="flex items-center justify-start gap-4 w-full p-1">
          <div className="flex items-center justify-start gap-2  w-full">
            <label>Width:</label>
            <input type="number" name="width" defaultValue={image?.width} />
          </div>
          <div className="flex items-center justify-start gap-2  w-full">
            <label>Height:</label>
            <input type="number" name="height" defaultValue={image?.height} />
          </div>
        </div>
      </div>
    </fieldset>
  )
}

export default ImageInfo;