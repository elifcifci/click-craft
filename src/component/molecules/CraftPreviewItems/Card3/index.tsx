'use client';

import Image from "next/image"
import ManagePreview from "../../ManagePreview"
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { useDispatch } from "react-redux"
import { openMenu } from "@/app/redux/features/switchMenu/switchMenuSlice"
import { componentToEdit } from "@/app/redux/features/selectedComponent/selectedComponentSlice";
import { componentAttributeInterface } from "@/interfaces/componentAtributeInterface";

const Card3 = ({ id, hasImage = false }: { id: string, hasImage?: boolean }) => {
  const dispatch = useDispatch();
  const isUserActionToggled = useSelector((state: RootState) => state.selectedComponentSlice.isUserActionToggled);
  const componentToBeEdit = useSelector((state: RootState) => state.selectedComponentSlice.componentToBeEdit);
  const dataExample = {
    "innerCard-0": { image: { src: "", alt: "", width: 200, height: 100 }, info: { title: "", text: "" } },
    "innerCard-1": { image: { src: "", alt: "", width: 200, height: 100 }, info: { title: "", text: "" } },
    "innerCard-2": { image: { src: "", alt: "", width: 200, height: 100 }, info: { title: "", text: "" } }
  }
  const [content, setContent] = React.useState<componentAttributeInterface>(dataExample)
  const [toggleRemoval, setToggleRemoval] = React.useState(false)

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

  const selectEditableComponent = (innerSelection: number) => {
    dispatch(openMenu())
    dispatch(componentToEdit({ id: id, type: id.split("/")[0], hasImage: hasImage, innerSelection: innerSelection }))
  }

  return (
    <section id={id} className={`${componentToBeEdit.id === id ? "border-2 border-blue-default border-dashed" : ""} relative w-full rounded-sm p-1`}>
     
      {/* Manage */}
      {componentToBeEdit.id === id && <ManagePreview id={id} />}

      {/* Content */}
      <div onClick={() => setToggleRemoval(!toggleRemoval)} className={`gap-2 p-2 flex flex-col md:grid md:grid-cols-3`}>
        {
          Object.keys(content).map((item, index) => {
            return (
              <div key={`card3-${index}`} onClick={() => selectEditableComponent(index)}
                className={`${(componentToBeEdit.id === id && componentToBeEdit?.innerSelection === `innerCard-${index}`) ? "relative border-2 border-blue-default border-dashed" : ""} cursor-pointer flex flex-col gap-2 items-center text-black-darker`}>

                {hasImage && <div className="w-full">
                  <Image src={content[item].image?.src ? content[item].image?.src : "https://picsum.photos/200/100"}
                    alt={content[item].image?.alt ? content[item].image?.alt : "Image"}
                    className="w-full object-cover rounded"
                    width={content[item].image?.width ? content[item].image?.width : 200}
                    height={content[item].image?.height ? content[item].image?.height : 100} />
                </div>}

                <div className="[&>p]:text-center p-2 w-full">
                  <h2 className="text-center font-semibold mb-2">{content[item].info?.title ? content[item].info?.title : "Lorem, ipsum dolor."}</h2>
                  <p>{content[(item)].info?.text ? content[item].info?.text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptates!"}</p>
                </div>
              </div>)
          })
        }
      </div>
    </section>
  )
}

export default Card3