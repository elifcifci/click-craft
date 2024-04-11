"use client";

import React from "react";

const StatisticCounter = ({
  limit,
  type,
  elementRef,
}: {
  limit: number;
  type: string;
  elementRef: React.RefObject<HTMLElement>;
}) => {
  const [count, setCount] = React.useState(0);
  const duration = 1500;

  React.useEffect(() => {
    let startValue = 0;
    let intervalId: any;

    const observer = new IntersectionObserver((entries) => {
      if (startValue < limit) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intervalId = setInterval(() => {
              startValue += 1;
              setCount(startValue);
              if (startValue >= limit) {
                clearInterval(intervalId);
              }
            }, duration / limit);
          } else if (intervalId) {
            // Clear interval when element leaves the viewport
            clearInterval(intervalId);
          }
        });
      }
    });

    // start observe
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
      if (intervalId) {
        // Clear interval on cleanup
        clearInterval(intervalId);
      }
    };
  }, [elementRef]);

  return (
    <li className="flex flex-col items-center w-full text-gray-lighter">
      <span className="text-5xl font-extralight">{count}</span>
      <span className="text-sm">{type}</span>
    </li>
  );
};

export default StatisticCounter;
