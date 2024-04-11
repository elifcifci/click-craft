"use client";

import Image from "next/image";
import React from "react";

const FaqItem = ({
  item,
}: {
  item: { id: string; question: string; answer: string };
}) => {
  const [isOpened, setIsOpened] = React.useState(false);

  return (
    <li
      className="text-black-default py-2 cursor-pointer"
      onClick={() => setIsOpened(!isOpened)}
    >
      <div className="flex justify-between">
        <h3 className="font-bold">{item.question}</h3>
        <Image
          id={`icon-${item.id}`}
          src="/image/ArrowDown.svg"
          alt="Arrow Down"
          className={`transform-all ${
            isOpened ? "animate-rotate-up" : "animate-rotate-origin"
          }`}
          width={16}
          height={8}
        />
      </div>
      <p
        className={`transform-all ${
          isOpened ? "animate-increase-height" : "animate-decrease-height"
        }`}
        id={`answer-${item.id}`}
      >
        {item.answer}
      </p>
    </li>
  );
};

export default FaqItem;
