'use client';

import Image from "next/image"
import ManagePreview from "../../ManagePreview"
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { useDispatch } from "react-redux"
import { openMenu } from "@/app/redux/features/switchMenu/switchMenuSlice"
import { componentToEdit } from "@/app/redux/features/selectedComponent/selectedComponentSlice";

const Card1 = ({ id, type = "left" }: { id: string, type?: "right" | "left" }) => {
  const dispatch = useDispatch();
  const [content, setContent] = React.useState({ image: { src: "", alt: "", width: 200, height: 100 }, info: { title: "", text: "" } })
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
    dispatch(componentToEdit({ id: id, type: id.split("/")[0], hasImage: id.split("/")[0] !== "Card4" }))
  }


  return (
    <section id={id} className="relative w-full p-1">
      {/* Manage */}
      {componentToBeEdit.id === id && <ManagePreview id={id}/>}

      {/* Content */}
      <div onClick={selectEditableComponent} style={{ flexDirection: `${type === "right" ? "row-reverse" : "row"}` }}
        className={`${componentToBeEdit.id === id ? "border-2 border-blue-default border-dashed" : ""} p-2 cursor-pointer flex items-center gap-2 text-black-darker`}>
        <div className="w-full">
          <Image src={content.image?.src ? content.image?.src : "https://picsum.photos/200/100"}
            alt={content.image?.alt ? content.image?.alt : "Image"}
            className="w-full object-cover rounded"
            width={content.image?.width ? content.image?.width : 200}
            height={content.image?.height ? content.image?.height : 100} />
        </div>

        <div style={{ textAlign: `${type === "right" ? "right" : "left"}` }} className="w-full">
          <h2 className="font-semibold mb-2">{content.info?.title ? content.info?.title : "Lorem, ipsum dolor."}</h2>
          <p>{content.info?.text ? content.info?.text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptates!"}</p>
        </div>
      </div>
    </section>
  )
}

export default Card1