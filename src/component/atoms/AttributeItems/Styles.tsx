'use client';

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { IStyleDataInterface } from "@/interfaces/exampleDataInterface";
import { exampleData } from "@/constants/exampleData";

const Styles = () => {
  const componentToBeEdit = useSelector((state: RootState) => state.selectedComponentSlice.componentToBeEdit);
  const componentType = componentToBeEdit.type
  const isOuter = componentToBeEdit.isOuter
  const isHeader = componentType.includes("Header")

  const [selections, setSelections] = React.useState<IStyleDataInterface>({
    backgroundType: isHeader ? "2" : "0",
    backgroundColor1: isHeader ? "#75c2f6" : "#ffffff",
    backgroundColor2: isHeader ? "#1d5d9b" : "#ffffff",
    fontWeight: isOuter ? exampleData?.[componentType]?.["outer"]?.styles?.fontWeight ?? "400" : exampleData?.[componentType]?.["inner"]?.["inner-0"].styles?.fontWeight ?? "400",
    textFontWeight: "400",
    textColor: isOuter? exampleData?.[componentType]?.["outer"]?.styles?.textColor ?? "#000000" : exampleData[componentType]?.["inner"]?.["inner-0"].styles?.textColor ?? "#000000",
    borderType: "none",
    borderColor: "#75c2f6",
    borderRadius: "0",
    borderWidth: "0"
  });

  React.useEffect(() => {
    const storedData = localStorage.getItem(componentToBeEdit.id)
    if (storedData) {
      const parsedData = JSON.parse(storedData)
      let selectedComponent = isOuter ? parsedData?.["outer"] : parsedData?.["inner"]?.[componentToBeEdit.innerSelection]
      setSelections(selectedComponent.styles)
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-start pb-3 border-b-2">
      <p className="font-medium text-sm mb-2">Styles</p>
      <div className="flex flex-col gap-4 w-full [&_input]:cursor-pointer">

        {/* Font Weight */}
        <fieldset className="flex flex-col justify-center items-center gap-2 lg:gap-4 lg:flex-row">
          <p>Title Font Weight:</p>
          <div className="flex items-center justify-start gap-2 [&_div]:flex [&_div]:gap-1 [&_label]:cursor-pointer [&_input]:cursor-pointer">
            <div>
              <input
                key={`fontWeight-1-${selections?.fontWeight}`}
                type="radio"
                id="400"
                name="fontWeight"
                value="400"
                onChange={() => setSelections({ ...selections, fontWeight: "400" })}
                checked={selections?.fontWeight === "400"} />
              <label htmlFor="400">Thin</label>
            </div>
            <div >
              <input
                key={`fontWeight-2-${selections?.fontWeight}`}
                type="radio"
                id="600"
                name="fontWeight"
                value="600"
                onChange={() => setSelections({ ...selections, fontWeight: "600" })}
                checked={selections?.fontWeight === "600"} />
              <label htmlFor="600">Normal</label>
            </div>
            <div>
              <input
                key={`fontWeight-3-${selections?.fontWeight}`}
                type="radio" id="800"
                name="fontWeight"
                value="800"
                onChange={() => setSelections({ ...selections, fontWeight: "800" })}
                checked={selections?.fontWeight === "800"} />
              <label htmlFor="800">Bold</label>
            </div>
          </div>
        </fieldset>

        {/* Text Font Weight */}
        {!isHeader && <fieldset className="flex flex-col justify-center items-center gap-2 lg:gap-4 lg:flex-row">
          <p>Text Font Weight:</p>
          <div className="flex items-center justify-start gap-2 [&_div]:flex [&_div]:gap-1 [&_label]:cursor-pointer [&_input]:cursor-pointer">
            <div>
              <input
                key={`textFontWeight-1-${selections?.textFontWeight}`}
                type="radio"
                id="textFontWeight-400"
                name="textFontWeight"
                value="400"
                onChange={() => setSelections({ ...selections, textFontWeight: "400" })}
                checked={selections?.textFontWeight === "400"} />
              <label htmlFor="textFontWeight-400">Thin</label>
            </div>
            <div >
              <input
                key={`textFontWeight-2-${selections?.textFontWeight}`}
                type="radio"
                id="textFontWeight-600"
                name="textFontWeight"
                value="600"
                onChange={() => setSelections({ ...selections, textFontWeight: "600" })}
                checked={selections?.textFontWeight === "600"} />
              <label htmlFor="textFontWeight-600">Normal</label>
            </div>
            <div>
              <input
                key={`textFontWeight-3-${selections?.textFontWeight}`}
                type="radio"
                id="textFontWeight-800"
                name="textFontWeight"
                value="800"
                onChange={() => setSelections({ ...selections, textFontWeight: "800" })}
                checked={selections?.textFontWeight === "800"} />
              <label htmlFor="textFontWeight-800">Bold</label>
            </div>
          </div>
        </fieldset>}

        {/* Background Type */}
        <fieldset className="flex flex-col justify-center items-center gap-2 lg:gap-4 lg:flex-row">
          <p>Background Type:</p>
          <div className="flex items-center justify-start gap-2 [&_div]:flex [&_div]:gap-1 [&_label]:cursor-pointer [&_input]:cursor-pointer">
            <div onClick={() => setSelections({ ...selections, backgroundType: "2" })}>
              <input type="radio" id="multiple" name="backgroundType" value="2" checked={selections?.backgroundType === "2"} />
              <label htmlFor="multiple">Multiple Colors</label>
            </div>
            <div onClick={() => setSelections({ ...selections, backgroundType: "1" })}>
              <input type="radio" id="single" name="backgroundType" value="1" checked={selections?.backgroundType === "1"} />
              <label htmlFor="single">Single Color</label>
            </div>
            <div onClick={() => setSelections({ ...selections, backgroundType: "0" })}>
              <input type="radio" id="none" name="backgroundType" value="0" checked={selections?.backgroundType === "0"} />
              <label htmlFor="none">No Color</label>
            </div>
          </div>
        </fieldset>

        {/* Border Type*/}
        <fieldset className="flex flex-col justify-center items-center gap-2 lg:gap-4 lg:flex-row">
          <p>Border Type:</p>
          <div className="flex items-center justify-start gap-2 [&_div]:flex [&_div]:gap-1 [&_label]:cursor-pointer [&_input]:cursor-pointer">
            <div onClick={() => setSelections({ ...selections, borderType: "solid" })}>
              <input type="radio" id="solid" name="borderType" value="solid" checked={selections?.borderType === "solid"} />
              <label htmlFor="solid">Solid</label>
            </div>
            <div onClick={() => setSelections({ ...selections, borderType: "dashed" })}>
              <input type="radio" id="dashed" name="borderType" value="dashed" checked={selections?.borderType === "dashed"} />
              <label htmlFor="dashed">Dashed</label>
            </div>
            <div onClick={() => setSelections({ ...selections, borderType: "double" })}>
              <input type="radio" id="double" name="borderType" value="double" checked={selections?.borderType === "double"} />
              <label htmlFor="double">Double</label>
            </div>
            <div onClick={() => setSelections({ ...selections, borderType: "dotted" })}>
              <input type="radio" id="dotted" name="borderType" value="dotted" checked={selections?.borderType === "dotted"} />
              <label htmlFor="dotted">Dotted</label>
            </div>
            <div onClick={() => setSelections({ ...selections, borderType: "none" })}>
              <input type="radio" id="border-none" name="borderType" value="none" checked={selections?.borderType === "none"} />
              <label htmlFor="border-none">No Border</label>
            </div>
          </div>
        </fieldset>

        {/* Border Radius & Width */}
        {selections?.borderType !== "none" && <fieldset className="flex flex-col justify-center items-center gap-2 lg:gap-4 lg:flex-row">
          <div>
            <p>Border Radius: {selections?.borderRadius}px</p>
            <div className="flex items-center justify-start gap-2 [&_div]:flex [&_div]:gap-1 [&_label]:cursor-pointer [&_input]:cursor-pointer">
              <input type="range" id="borderRadius" name="borderRadius" min="0" max="20"
                value={selections?.borderRadius}
                onChange={(e) => setSelections({ ...selections, borderRadius: e.currentTarget.value })} />
            </div>
          </div>

          <div>
            <p>Border Width: {selections?.borderWidth}px</p>
            <div className="flex items-center justify-start gap-2 [&_div]:flex [&_div]:gap-1 [&_label]:cursor-pointer [&_input]:cursor-pointer">
              <input type="range" id="borderWidth" name="borderWidth" min="0" max="6"
                value={selections?.borderWidth}
                onChange={(e) => setSelections({ ...selections, borderWidth: e.currentTarget.value })} />
            </div>
          </div>
        </fieldset>
        }

        {/* Background & Border & Text Color*/}
        <fieldset className="flex flex-col items-center justify-start gap-1">
          <div className="flex flex-col [&_input]:min-w-[24px] [&_input]:h-[20px] [&_input]:border-0 gap-2 lg:flex-row">
            {selections?.backgroundType !== "0" && <div className="flex items-center justify-start gap-2">
              <label htmlFor="backgroundColor1">Background-1:</label>
              <input
                id="backgroundColor1"
                type="color"
                name="backgroundColor1"
                value={selections?.backgroundColor1}
                onChange={(e) => setSelections({ ...selections, backgroundColor1: e.target.value })}
              />
            </div>}

            {selections?.backgroundType === "2" && <div className="flex items-center justify-start gap-2">
              <label htmlFor="backgroundColor2">Background-2:</label>
              <input
                id="backgroundColor2"
                type="color"
                name="backgroundColor2"
                value={selections?.backgroundColor2}
                onChange={(e) => setSelections({ ...selections, backgroundColor2: e.target.value })} />
            </div>}

            <div className="flex items-center justify-start gap-2">
              <label htmlFor="textColor">Text:</label>
              <input
                id="textColor"
                type="color"
                name="textColor"
                onChange={(e) => setSelections({ ...selections, textColor: e.target.value })}
                value={selections?.textColor} />
            </div>

            {selections?.borderType !== "none" && <div className="flex items-center justify-start gap-2">
              <label htmlFor="borderColor">Border:</label>
              <input
                id="borderColor"
                type="color"
                name="borderColor"
                onChange={(e) => setSelections({ ...selections, borderColor: e.target.value })}
                value={selections?.borderColor} />
            </div>}
          </div>
        </fieldset>
      </div>
    </div>
  )
}

export default Styles;