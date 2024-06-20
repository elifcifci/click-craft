'use client';

import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import Attributes from "../Attributes";
import CraftPreviews from "../CardPreviews";

const CraftMenu = () => {
  const isOpenedMenu = useSelector((state: RootState) => state.switchMenuSlice.isOpenedMenu)

  return (
    <>
      <section style={{ height: "calc(100vh - 80px)" }} className="w-[180px] md:w-[200px] bg py-6 px-2 lg:p-6 absolute left-0 bottom-0 border-none">
        <CraftPreviews />
      </section>
      {isOpenedMenu && <Attributes />}
    </>
  )
}

export default CraftMenu