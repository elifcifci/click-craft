const ImageInfo = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-2">
      <p className="text-gray-lighter font-medium text-sm">Image Info</p>
      <div className="flex flex-col gap-1 [&_label]:text-gray-lighter [&_label]:w-[48px]	">

        <div className="flex items-center justify-start gap-2">
          <label>Link:</label>
          <input type="text" name="src" />
        </div>

        <div className="flex items-center justify-start gap-2">
          <label title="it seems when image could not download.">Text:</label>
          <input type="text" name="alt" />
        </div>

        <div className="flex items-center justify-start gap-2">
          <div className="flex items-center justify-start gap-2">
            <label>Width:</label>
            <input type="number" name="width" />
          </div>
          <div className="flex items-center justify-start gap-2">
            <label>Height:</label>
            <input type="number" name="height" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default ImageInfo;