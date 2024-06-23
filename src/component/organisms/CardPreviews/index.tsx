import { disableDropping } from "@/app/redux/features/isDroppable/isDroppableSlice"
import { toggleUserAction } from "@/app/redux/features/selectedComponent/selectedComponentSlice"
import { RootState } from "@/app/redux/store"
import Card1 from "@/component/molecules/CraftMenuItems/Card1"
import Card2 from "@/component/molecules/CraftMenuItems/Card2"
import Card3 from "@/component/molecules/CraftMenuItems/Card3"
import Card4 from "@/component/molecules/CraftMenuItems/Card4"
import Footer1 from "@/component/molecules/CraftMenuItems/Footer1"
import Header1 from "@/component/molecules/CraftMenuItems/Header1"
import { exampleData } from "@/constants/exampleData"
import React from "react"
import { useDispatch, useSelector } from "react-redux"

const CraftPreviews = () => {
  const dispatch = useDispatch();
  const isDroppable = useSelector((state: RootState) => state.isDroppableSlice.isDroppable);

  const addLocalStorage = (card: string) => {
    const selectedComponents = localStorage.getItem("selectedComponents")

    if (selectedComponents) {
      const parsedData = JSON.parse(selectedComponents)
      const lastId = parsedData?.[parsedData?.length - 1]?.id
      const lastIdInteger = lastId ? parseInt(lastId?.split("/")[1]) : null
      const componentId = lastId ? `${card}/${lastIdInteger !== null ? lastIdInteger + 1 : 0}` : `${card}/0`
      parsedData.push({ id: componentId, component: card })
      localStorage.setItem("selectedComponents", JSON.stringify(parsedData))
      localStorage.setItem(`${componentId}`, JSON.stringify(exampleData[card]))
    }
    else {
      localStorage.setItem("selectedComponents", JSON.stringify([{ id: `${card}/0`, component: card }]))
      localStorage.setItem(`${card}/0`, JSON.stringify(exampleData[card]))
    }

    dispatch(toggleUserAction());
  }

  const cards = [<Card1 key="card1" />, <Card2 key="card2" />, <Card3 key="card3" />, <Card4 key="card4" />]
  const headers = [<Header1 key="header1" />]
  const footers = [<Footer1 key="footer1" />]

  return (
    <div className="text-white flex flex-col gap-4">
      {/* Headers */}
      <ul className="flex flex-col gap-2">
        <h2>Headers</h2>
        {
          headers.map((item, index) => {
            return <li
              key={`Header${index + 1}`}
              id={`Header${index + 1}`}
              className="cursor-grab active:cursor-grabbing p-1"
              draggable
              onDragEnd={(e) => {
                isDroppable && addLocalStorage(e.currentTarget.id)
                dispatch(disableDropping())
              }}>
              {item}
            </li>
          })
        }
      </ul>

      {/* Cards */}
      <ul className="flex flex-col gap-2">
        <h2>Cards</h2>
        {
          cards.map((item, index) => {
            return <li
              key={`Card${index + 1}`}
              id={`Card${index + 1}`}
              className="cursor-grab active:cursor-grabbing p-1"
              draggable
              onDragEnd={() => {
                isDroppable && addLocalStorage(`Card${index + 1}`)
                dispatch(disableDropping())
              }}>
              {item}
            </li>
          })
        }
      </ul>

      {/* Footers */}
      <ul className="flex flex-col gap-2">
        <h2>Footers</h2>
        {
          footers.map((item, index) => {
            return <li
              key={`Footer${index + 1}`}
              id={`Footer${index + 1}`}
              className="cursor-grab active:cursor-grabbing p-1"
              draggable
              onDragEnd={(e) => {
                isDroppable && addLocalStorage(e.currentTarget.id)
                dispatch(disableDropping())
              }}>
              {item}
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default CraftPreviews;