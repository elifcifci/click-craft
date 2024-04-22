'use client';

import Card1 from "@/component/molecules/CraftMenuItems/Card1"
import Card2 from "@/component/molecules/CraftMenuItems/Card2"
import Card3 from "@/component/molecules/CraftMenuItems/Card3"
import Card4 from "@/component/molecules/CraftMenuItems/Card4"

const CraftMenu = ({ dragStart, dragEnter, setData }: { dragStart: (e: React.DragEvent<HTMLLIElement>) => void, dragEnter: (e: React.DragEvent<HTMLLIElement>) => void, setData: React.Dispatch<React.SetStateAction<string[]>> }) => {

  return (
    <section style={{ height: "calc(100vh - 80px)" }} className="w-[180px] bg-black-lighter p-6 absolute right-0 bottom-0">
      <div>
        <h2>Cards</h2>
        <ul className="flex flex-col gap-2">
          <li
            draggable
            onDragStart={(e) => dragStart(e)}
            onDragEnter={(e) => dragEnter(e)}
            onClick={() => { setData((prev) => [...prev, "Card1"]) }}
            onDragEnd={() => { setData((prev) => [...prev, "Card1"]) }}>
            <Card1 />
          </li>
          <li draggable onDragStart={(e) => dragStart(e)} onDragEnter={(e) => dragEnter(e)} onClick={() => { setData((prev) => [...prev, "Card2"]) }}><Card2 /></li>
          <li draggable onDragStart={(e) => dragStart(e)} onDragEnter={(e) => dragEnter(e)} onClick={() => { setData((prev) => [...prev, "Card3"]) }}><Card3 /></li>
          <li draggable onDragStart={(e) => dragStart(e)} onDragEnter={(e) => dragEnter(e)} onClick={() => { setData((prev) => [...prev, "Card4"]) }}><Card4 /></li>
        </ul>
      </div>
    </section>
  )
}

export default CraftMenu