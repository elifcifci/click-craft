import { IImageDataInterface } from "@/interfaces/exampleDataInterface";

const ImageInfo = ({ image }: { image: IImageDataInterface }) => {
  return (
    <div className="[&_input]:rounded flex flex-col items-center justify-start gap-2">
      <p className="text-gray-lighter font-medium text-sm">Image Info</p>
      <div className="flex flex-col gap-1 [&_label]:text-gray-lighter [&_label]:w-[48px]	">

        <div className="flex items-center justify-start gap-2">
          <label>Link:</label>
          <input type="text" name="src" defaultValue={image?.src} />
        </div>

        <div className="flex items-center justify-start gap-2">
          <label title="it seems when image could not download.">Text:</label>
          <input type="text" name="alt" defaultValue={image?.alt} />
        </div>

        <div className="flex items-center justify-start gap-2">
          <div className="flex items-center justify-start gap-2">
            <label>Width:</label>
            <input type="number" name="width" defaultValue={image?.width} />
          </div>
          <div className="flex items-center justify-start gap-2">
            <label>Height:</label>
            <input type="number" name="height" defaultValue={image?.height} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default ImageInfo;