"use client";
import Link from "next/link";
import React from "react";
import {
  selectItem,
  selectPage,
} from "@/app/redux/features/selectPage/selectPageSlice";
import { RootState } from "@/app/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { navigationConstant } from "@/constants/headerNavigationConstants";
import { scrollPageUtil } from "@/utils/scrollPageUtil";
import { closeMenu, toggleMenu } from "@/app/redux/features/toggleMenu/toggleMenuSlice";
import useDimensionsWindow from "@/hook/useWindowDimensions";
import { useRouter, usePathname } from "next/navigation";

const Navigation = () => {
  const dispatch = useDispatch();
  const { width } = useDimensionsWindow();
  const router = useRouter();
  const pathname = usePathname();

  const selectedPage = useSelector(
    (state: RootState) => state.selectedPageSlice.selectedPage
  );

  const selectedItem = useSelector(
    (state: RootState) => state.selectedPageSlice.selectedItem
  );

  const isOpenedMenu = useSelector(
    (state: RootState) => state.toggleMenuSlice.isOpenedMenu
  );

  // scroll page on the id point
  React.useEffect(() => {
    if (selectedItem && document) {
      const element = document.getElementById(selectedItem);
      if (element) scrollPageUtil(element);
    }
  }, [selectedItem, pathname]);

  //decide selected page on navbar
  React.useEffect(() => {
    if (pathname === "/#what-we-do") {
      dispatch(selectItem(pathname));
      dispatch(selectPage(""));
    } else {
      dispatch(selectItem(""));
      dispatch(selectPage(pathname));
    }
  }, []);

  const handleClick = (id: string) => {
    router.push(`/#what-we-do`, { scroll: false });
    dispatch(selectItem(id));
    dispatch(selectPage(""));
  };

  return (
    <nav
      className={`z-30 transition-all duration-700 absolute top-[80px] w-[100%] h-[100vh] md:h-[80px] md:right-[10px] md:static lg:max-w-[350px] ${
        width <= 768 && isOpenedMenu
          ? "bg-black-darker/[.96] right-[0]"
          : "bg-black-darker/[.9] right-[-375px] s:right-[-640px] sm:right-[-768px]"
      } lg:block md:bg-black-darker/[0] lg:right-[10px] lg:flex justify-end`}
    >
      <ul className="text-white relative top-[40%] right-[50%] translate-y-[-40%] translate-x-[50%] lg:translate-y-[unset] lg:translate-x-[unset] lg:static w-full lg:max-w-[350px] items-center justify-between gap-4 md:flex md:p-2 lg:pr-4">
        {navigationConstant.map((item) => {
          return (
            <li
              key={`navigation-${item.name}`}
              className="text-center md:text-right p-1 transition-all"
            >
              {item.link ? (
                <Link
                  href={item.link}
                  onClick={() => {
                    width <= 768 && dispatch(closeMenu());
                    dispatch(selectPage(item.link));
                    dispatch(selectItem(""));
                  }}
                  className={`transition-all ${
                    selectedPage === item.link ? "font-bold" : "font-thin"
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <span
                  onClick={() => {
                    width <= 768 && dispatch(toggleMenu());
                    if (item.id) {
                      handleClick(item.id);
                    }
                  }}
                  className={`cursor-pointer transition-all ${
                    selectedItem === item.id ? "font-bold" : "font-thin"
                  }`}
                >
                  {item.name}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
