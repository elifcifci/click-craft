'use client';

import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import CardAttributes from "../CardAttributes";
import CraftPreviews from "../CardPreviews";

const CraftMenu = ({ dragStart, dragEnter }: { dragStart: (e: React.DragEvent<HTMLLIElement>) => void, dragEnter: (e: React.DragEvent<HTMLLIElement>) => void }) => {
  const isSwitchedMenu = useSelector((state: RootState) => state.switchMenuSlice.isSwitchedMenu)

  return (
    <section style={{ height: "calc(100vh - 80px)" }} className="w-[180px] md:w-[200px] bg-gradient-to-t from-black-darker to-black-default p-6 absolute right-0 bottom-0">
      {isSwitchedMenu
        ? <CardAttributes />
        : <CraftPreviews dragStart={dragStart} dragEnter={dragEnter} />
      }
    </section>
  )
}

export default CraftMenu