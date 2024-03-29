"use client";
import { toggleMenu } from "@/app/redux/features/toggleMenu/toggleMenuSlice";
import { RootState } from "@/app/redux/store";
import { useDispatch, useSelector } from "react-redux";

const HamburgerMenuIcon = () => {
  const dispatch = useDispatch();
  const isOpenedMenu = useSelector(
    (state: RootState) => state.toggleMenuSlice.isOpenedMenu
  );

  return (
    <div
      className="flex flex-col gap-1 md:hidden"
      onClick={() => dispatch(toggleMenu())}
    >
      <span
        className={`relative top-0 bg-zinc-100 w-5 h-[2px] rounded-md transition-all ${
          isOpenedMenu ? "rotate-45 top-[5px]" : ""
        }`}
      />
      <span
        className={`bg-zinc-100 w-5 h-[2px] rounded-md transition-all ${
          isOpenedMenu ? "opacity-0" : ""
        }`}
      />
      <span
        className={`relative top-0 bg-zinc-100 w-5 h-[2px] rounded-md transition-all ${
          isOpenedMenu ? "-rotate-45 top-[-6px]" : ""
        }`}
      />
    </div>
  );
};

export default HamburgerMenuIcon;
