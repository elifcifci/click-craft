"use client";
import Link from "next/link";
import React from "react";
import { selectPage } from "@/app/redux/features/selectPage/selectPageSlice";
import { RootState } from "@/app/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import { navigationConstant } from "@/constants/headerNavigationConstants";
import { scrollPageUtil } from "@/utils/scrollPageUtil";

const Navigation = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const [flag, setFlag] = React.useState(false);

  const selectedPage = useSelector(
    (state: RootState) => state.selectedPageSlice.selectedPage
  );
  const isOpenedMenu = useSelector(
    (state: RootState) => state.toggleMenuSlice.isOpenedMenu
  );

  React.useEffect(() => {
    if (selectedPage !== "craft") {
      const element = document.getElementById(selectedPage)
      if (element) scrollPageUtil(element);
    }
    
    else if (pathname === "/#what-we-do") {
      const element = document.getElementById(selectedPage);
      if (element) scrollPageUtil(element);
    }
  }, [selectedPage, flag, pathname]);

  const handleClick = () => {
    if (selectedPage === "what-we-do") {
      router.push(`/#what-we-do`, { scroll: false });
    }
  };

  return (
    <nav
      className={`transition-all absolute top-[80px] right-[10px] md:static ${
        isOpenedMenu ? "block" : "hidden"
      } md:block`}
    >
      <ul className="w-full items-center justify-between gap-4 p-2 md:flex md:p-2">
        {navigationConstant.map((item) => {
          return (
            <li
              key={`navigation-${item.name}`}
              onClick={() => {
                if (item.id) {
                  setFlag(!flag);
                  dispatch(selectPage(item.id));
                  handleClick();
                }
              }}
              className="text-right font-thin p-1 cursor-pointer transition-all border-b-2 border-gray-100 border-opacity-0 hover:border-opacity-100"
            >
              {item.link ? (
                <Link href={item.link}>{item.name}</Link>
              ) : (
                <span>{item.name}</span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
