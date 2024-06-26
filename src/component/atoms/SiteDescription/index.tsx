"use client";

import useDimensionsWindow from "@/hook/useWindowDimensions";
import { ISiteDescriptionInterfaces } from "@/interfaces/siteDescriptionInterfaces";
import Image from "next/image";
import React from "react";

const SiteDescription = ({ item, index }: ISiteDescriptionInterfaces) => {
  const elementRef = React.useRef(null);
  const { width } = useDimensionsWindow();

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(
            index % 2 === 0 ? "animate-fade-in-right" : "animate-fade-in-left"
          );
        }
      });
    });

    if (elementRef.current && width >= 1024) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [elementRef]);

  return (
    <li
      className={`md:flex w-[100vw] ${
        index % 2 === 0 ? "flex-row-reverse" : ""
      } bg-white text-black-default`}
    >
      <div className="flex flex-col justify-center items-center p-10 md:w-[50%]">
        <div
          ref={elementRef}
          className="delay-1000 lg:opacity-0 relative max-w-[500px]"
        >
          <h2
            className={`leading-7 font-semibold ${
              index % 2 === 0
                ? "md:border-r-2 md:pr-6 md:text-right"
                : "md:border-l-2 md:pl-6 md:text-left"
            } py-2 text-3xl md:text-4xl border-black-lighter flex flex-col`}
          >
            <span>{item.title[0].toLocaleUpperCase()}</span>
            <span>{item.title[1].toLocaleUpperCase()}</span>
          </h2>
          <p
            className={`md:my-4 md:${
              index % 2 === 0 ? "text-right" : "text-left"
            } md:${index % 2 === 0 ? "pr-6" : "pl-6"}`}
          >
            {item.description}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:max-h-[380px]">
        <Image
          loading="lazy"
          width={740}
          height={493}
          src={item.image}
          alt={item.alt}
          className="w-full h-[100%] object-cover"
        />
      </div>
    </li>
  );
};

export default SiteDescription;
