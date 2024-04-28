'use client';

import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import Attributes from "../Attributes";
import CraftPreviews from "../CardPreviews";

const CraftMenu = ({ dragStart, dragEnter }: { dragStart: (e: React.DragEvent<HTMLLIElement>) => void, dragEnter: (e: React.DragEvent<HTMLLIElement>) => void }) => {
  const isSwitchedMenu = useSelector((state: RootState) => state.switchMenuSlice.isSwitchedMenu)

  return (
    <section style={{ height: "calc(100vh - 80px)" }} className="w-[180px] md:w-[200px]  bg-black-default to-black-default p-6 absolute right-0 bottom-0">
      {isSwitchedMenu
        ? <Attributes />
        : <CraftPreviews dragStart={dragStart} dragEnter={dragEnter} />
      }
    </section>
  )
}

export default CraftMenu