"use client";

import React from "react";
import StatisticCounter from "@/component/atoms/StatisticCounter";
import { statisticsConstants } from "@/constants/statisticsConstants";

const Statistics = () => {
  const elementRef = React.useRef<HTMLUListElement>(null);

  return (
      <ul ref={elementRef} className="relative z-1 flex justify-between w-[100vw] p-2 md:px-20">
        {statisticsConstants.map((statistic) => {
          return (
            <StatisticCounter
              key={statistic.id}
              type={statistic.type}
              limit={statistic.limit}
              elementRef={elementRef}
            />
          );
        })}
      </ul>
  );
};

export default Statistics;
