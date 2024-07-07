"use client";

import Image from "next/image";
import React from "react";
import { faqConstants } from "@/constants/faqConstants";

const FaqContent = () => {
  const [activeItem, setActiveItem] = React.useState<null | string>(null)

  return (
    <ol className="md:col-span-2 w-[90%] m-auto md:w-full">
      {faqConstants.map((item: { id: string; question: string; answer: string }) => (
        <li
          key={`${item.id}-${item.id === activeItem}`}
          className="text-black-default py-2 cursor-pointer"
          onClick={() => {
            if (item.id === activeItem) {
              setActiveItem(null)
            } else {
              setActiveItem(item.id);
            }
          }}
        >
          <div className="flex justify-between gap-1">
            <h3 className="font-bold">{item.question}</h3>
            <Image
              id={`icon-${item.id}`}
              src="/image/ArrowDown.svg"
              alt="Arrow Down"
              className={`transform-all ${activeItem === item.id ? "animate-rotate-up" : "animate-rotate-origin"
                }`}
              width={16}
              height={8}
            />
          </div>
          <p
            className={`transform-all ${activeItem === item.id ? "animate-increase-height" : "animate-decrease-height"
              }`}
            id={`answer-${item.id}`}
          >
            {item.answer}
          </p>
        </li>
      ))}
    </ol>


  );
};

export default FaqContent;
