"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { selectPage } from "@/app/redux/features/selectPage/selectPageSlice";
import Link from "next/link";
import React from "react";

const FooterItem = ({
  title,
  list,
}: {
  title: string;
  list: { subtitle: string; link?: string; id?: string }[];
}) => {
  const dispatch = useDispatch();
  const selectedPage = useSelector(
    (state: RootState) => state.selectedPageSlice.selectedPage
  );
  React.useEffect(() => {
    const element = document.getElementById(selectedPage);

    if (element) {
      const scrollPoint = (element.offsetTop - 80);
      window.scrollTo({ top: scrollPoint, behavior: "smooth" });
    }
  }, [selectedPage]);

  return (
    <ul className="text-center">
      <p className="mb-1 font-bold">{title.toUpperCase()}</p>
      {list.map((item) => {
        return (
          <li
            onClick={() => {
              if (item.id) {
                dispatch(selectPage(item.id));
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
