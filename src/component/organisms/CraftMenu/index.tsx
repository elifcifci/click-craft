'use client';

import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import Attributes from "../Attributes";
import CraftPreviews from "../CardPreviews";

const CraftMenu = () => {
  const isSwitchedMenu = useSelector((state: RootState) => state.switchMenuSlice.isSwitchedMenu)

  return (
    <section style={{ height: "calc(100vh - 80px)" }} className="w-[180px] md:w-[200px] bg-black-darker/[.6] p-6 absolute right-0 bottom-0 border-none">
      {isSwitchedMenu
        ? <Attributes />
        : <CraftPreviews />
      }
    </section>
  )
}

export default CraftMenu