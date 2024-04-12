"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { selectPage } from "@/app/redux/features/selectPage/selectPageSlice";
import Link from "next/link";
import React from "react";
import { scrollPageUtil } from "@/utils/scrollPageUtil";

const FooterItem = ({
  title,
  list,
}: {
  title: string;
  list: { subtitle: string; link?: string; id?: string }[];
}) => {
  const [flag, setFlag] = React.useState(false);

  const dispatch = useDispatch();
  const selectedPage = useSelector(
    (state: RootState) => state.selectedPageSlice.selectedPage
  );

  React.useEffect(() => {
    if (selectedPage !== "craft") {
      const element = document.getElementById(selectedPage);
      if (element) scrollPageUtil(element);
    }
  }, [flag]);

  return (
    <ul>
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
            className="leading-8 cursor-pointer"
          >
            {item.link ? (
              <Link href={item.link}>{item.subtitle}</Link>
            ) : (
              item.subtitle
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default FooterItem;
