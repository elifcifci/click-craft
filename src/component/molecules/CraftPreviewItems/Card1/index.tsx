'use client';

import Image from "next/image"
import ManagePreview from "../../ManagePreview"
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

const Card1 = ({ id }: { id: string }) => {
  const [content, setContent] = React.useState({ image: { src: "", alt: "", width: 200, height: 100 }, info: { title: "", text: "" } })
  const isUserActionToggled = useSelector((state: RootState) => state.selectedComponentSlice.isUserActionToggled);

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

  return (
    <section id={id} className="w-full border-black-darker border-solid rounded-sm p-1">
      {/* Manage */}
      <ManagePreview id={id} />

      {/* Content */}
      <div className="border flex items-center gap-2 text-black-darker">
        <div>
          <Image src={content.image?.src ? content.image?.src : "https://picsum.photos/200/100"}
            alt={content.image?.alt ? content.image?.alt : "Image"}
            width={content.image?.width ? content.image?.width : 200}
            height={content.image?.height ? content.image?.height : 100} />
        </div>

        <div className="w-full">
          <h2>{content.info?.title ? content.info?.title : "Lorem, ipsum dolor."}</h2>
          <p>{content.info?.text ? content.info?.text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptates!"}</p>
        </div>
      </div>
    </section>
  )
}

export default Card1