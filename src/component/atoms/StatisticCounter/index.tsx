"use client";

import React from "react";

const StatisticCounter = ({
  limit,
  type,
  index,
  length,
}: {
  limit: number;
  type: string;
  index: number;
  length: number;
}) => {
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    for (let i = 0; i <= limit; i++) {
      setTimeout(() => {
        setCounter(i);
      }, 1000);
    }
  }, []);

  return (
    <li
      className={`${
        length - 1 !== index ? "md:border-solid md:border-r-[1px] border-current" : ""
      } flex flex-col items-center text-black-default`}
    >
      <span className="text-5xl font-extralight">{counter}</span>
      <span className="text-sm">{type}</span>
    </li>
  );
};

export default StatisticCounter;
