'use client';

import { useDispatch, useSelector } from "react-redux";
import { addData } from "@/app/redux/features/selectedComponent/selectedComponentSlice";
import Card1 from "@/component/molecules/CraftMenuItems/Card1"
import Card2 from "@/component/molecules/CraftMenuItems/Card2"
import Card3 from "@/component/molecules/CraftMenuItems/Card3"
import Card4 from "@/component/molecules/CraftMenuItems/Card4"

const CraftMenu = ({ dragStart, dragEnter }: { dragStart: (e: React.DragEvent<HTMLLIElement>) => void, dragEnter: (e: React.DragEvent<HTMLLIElement>) => void }) => {
  const dispatch = useDispatch();

  const updateState = (card: string) => {
    dispatch(addData(card))
  }
  const cards = [<Card1 />, <Card2 />, <Card3 />, <Card4 />]
  return (
    <section style={{ height: "calc(100vh - 80px)" }} className="w-[180px] bg-black-lighter p-6 absolute right-0 bottom-0">
      <div>
        <h2>Cards</h2>
        <ul className="flex flex-col gap-2">
          {
            cards.map((item, index) => {
              return <li
                id={`Card${index + 1}`}
                key={`Card${index + 1}`}
                className="cursor-grab active:cursor-grabbing"
                draggable
                onDragStart={(e) => dragStart(e)}
                onDragEnter={(e) => dragEnter(e)}
                onClick={() => updateState(`Card${index + 1}`)}
                onDragEnd={() => updateState(`Card${index + 1}`)}>
                {item}
              </li>
            })
          }
        </ul>
      </div>
    </section>
  )
}

export default CraftMenu