'use client';

import { RootState } from "@/app/redux/store";import React from "react";
import { useSelector } from "react-redux";

const CreatedBy = () => {
  const componentToBeEdit = useSelector((state: RootState) => state.selectedComponentSlice.componentToBeEdit);
  const [dataInComponent, setDataInComponent] = React.useState<{ createdBy: {text: string} }>();

  React.useEffect(() => {
    const storedData = localStorage.getItem(componentToBeEdit.id)
    let selectedComponent;

    if (storedData) {
      if (componentToBeEdit.isOuter) {
        selectedComponent = JSON.parse(storedData)["outer"]
      } else {
        selectedComponent = JSON.parse(storedData)[componentToBeEdit.innerSelection]
      }
      setDataInComponent(selectedComponent)
    }
  }, [componentToBeEdit])

  return (
    <fieldset className="[&_input]:rounded-lg [&_textarea]:rounded-lg [&_input]:px-[10px] flex flex-col justify-start gap-2 font-medium pb-3 border-b-2">
      <legend className="text-black-darker text-center text-sm mb-2">Created By</legend>
      <div className="flex flex-col [&_label]:text-black-darker [&_label]:w-[48px]">
        <div className="flex items-center justify-start gap-2 p-1">
          <label>Text:</label>
          <input name="createdBy" defaultValue={dataInComponent?.createdBy?.text} />
        </div>
      </div>
    </fieldset>
  )
}

export default CreatedBy