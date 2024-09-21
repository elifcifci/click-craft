"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { selectItem, selectPage } from "@/app/redux/features/selectPage/selectPageSlice";
import Link from "next/link";
import React from "react";
import { scrollPageUtil } from "@/utils/scrollPageUtil";
import { usePathname, useRouter } from "next/navigation";

const FooterItem = ({
  title,
  list,
}: {
  title: string;
  list: { subtitle: string; link?: string; id?: string }[];
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [flag, setFlag] = React.useState(false);

  const dispatch = useDispatch();
  const selectedPage = useSelector(
    (state: RootState) => state.selectedPageSlice.selectedPage
  );

  const selectedItem = useSelector(
    (state: RootState) => state.selectedPageSlice.selectedItem
  );

  React.useEffect(() => {
    if (selectedPage !== "craft" && document) {
      const element = document.getElementById(selectedPage);
      if (element) scrollPageUtil(element);
    }
  }, [flag]);

    // scroll page on the id point
    React.useEffect(() => {
      if (selectedItem && document) {
        const element = document.getElementById(selectedItem);
        if (element) scrollPageUtil(element);
      }
    }, [selectedItem, pathname]);
  

  return (
    <ul className="flex flex-col gap-2">
      <p className="mb-1 font-bold">{title.toUpperCase()}</p>
      {list.map((item) => {
        return (
          <li
            onClick={() => {
              if (item.id) {
                dispatch(selectPage(item.id));
                setFlag(!flag);
              } else if (item.link) {
                dispatch(selectPage(item.link));
              }
            }}
            key={`footer-item-${item.subtitle}`}
            className="leading-2 cursor-pointer"
          >
            {item.link ? (
              <Link href={item.link}>{item.subtitle}</Link>
            ) : (
              <span onClick={() => {
                if (item?.id) {
                  router.push(`/#${item.id}`, { scroll: false });
                  dispatch(selectItem(item.id));
                  dispatch(selectPage(""));
                }
              }}>{item.subtitle}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default FooterItem;
