"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

const Navigation = () => {
  const isOpenedMenu = useSelector(
    (state: RootState) => state.toggleMenuSlice.isOpenedMenu
  );

  const navigationConstant = [
    { name: "HOME", link: "/" },
    { name: "CRAFT", link: "no-code" },
    { name: "ABOUT US", link: "about-page" },
    { name: "CONTACT", link: "contact-page" },
  ];
  return (
    <nav
      className={`transition-all absolute top-[80px] right-0 md:static ${
        isOpenedMenu ? "block" : "hidden"
      } md:block`}
    >
      <ul className="w-[100%] items-center justify-between gap-4 p-2 md:flex">
        {navigationConstant.map((item) => {
          return (
            <li className="text-right font-thin p-1 cursor-pointer transition-all border-b-2 border-gray-100 border-opacity-0 hover:border-opacity-100">
              <Link href={item.link}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
