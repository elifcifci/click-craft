'use client';

import Image from "next/image"
import ManagePreview from "../../ManagePreview"
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { useDispatch } from "react-redux"
import { openMenu } from "@/app/redux/features/switchMenu/switchMenuSlice"
import { componentToEdit } from "@/app/redux/features/selectedComponent/selectedComponentSlice";
import { exampleData } from "@/constants/exampleData";

const Card1 = ({ id, type = "left" }: { id: string, type?: "right" | "left" }) => {
  const dispatch = useDispatch();
  const [content, setContent] = React.useState(exampleData["Card1"])
  const isUserActionToggled = useSelector((state: RootState) => state.selectedComponentSlice.isUserActionToggled);
  const componentToBeEdit = useSelector((state: RootState) => state.selectedComponentSlice.componentToBeEdit);

  React.useEffect(() => {
    const storedData = localStorage.getItem(id);

    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setContent(parsedData);
      }
      catch (error) {
        console.error("Error parsing localStorage data:", error);
      }
    }
  }, [isUserActionToggled])

  const selectEditableComponent = () => {
    dispatch(openMenu())
    // if there is no inner cards in main card innerSelection should be "0".
    dispatch(componentToEdit({ id: id, type: id.split("/")[0], hasImage: id.split("/")[0] !== "Card4", innerSelection: 0 }))
  }

  return (
    <section id={id} className="relative w-full p-1">
      {/* Manage */}
      {componentToBeEdit.id === id && <ManagePreview id={id}/>}

      {/* Content */}
      <div onClick={selectEditableComponent} style={{ flexDirection: `${type === "right" ? "row-reverse" : "row"}` }}
        className={`${componentToBeEdit.id === id ? "border-2 border-blue-default border-dashed" : ""} p-2 cursor-pointer flex items-center gap-2 text-black-darker`}>
        <div className="w-[50%]">
          <Image src={content["innerCard-0"].image?.src ? content["innerCard-0"].image?.src : "https://picsum.photos/200/100"}
            alt={content["innerCard-0"].image?.alt ? content["innerCard-0"].image?.alt : "Image"}
            className="w-full object-cover rounded"
            width={content["innerCard-0"].image?.width ? content["innerCard-0"].image?.width : 200}
            height={content["innerCard-0"].image?.height ? content["innerCard-0"].image?.height : 100} />
        </div>

        <div style={{ textAlign: `${type === "right" ? "right" : "left"}` }} className="w-[50%]">
          <h2 className="font-semibold mb-2">{content["innerCard-0"].info?.title ? content["innerCard-0"].info?.title : "Lorem, ipsum dolor."}</h2>
          <p>{content["innerCard-0"].info?.text ? content["innerCard-0"].info?.text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptates!"}</p>
        </div>
      </div>
    </section>
  )
}

export default Card1