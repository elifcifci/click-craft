'use client';

import WhatWeDoItem from "@/component/atoms/WhatWeDoItem";
import { whatWeDoConstants } from "@/constants/whatWeDoConstants";
import React from "react";

const WhatWeDo = () => {

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    });
  
    if(document) {
      const itemElements = document.querySelectorAll('.what-we-do-item');
      itemElements.forEach((item) => observer.observe(item));
    }
  
    return () => observer.disconnect();
  }, []);
  
  return (
    <ul id="what-we-do" className="bg-white w-[100vw] grid sm:grid-cols-2 md:grid-cols-3 md:h-[100%] md:max-h-[600px] gap-6 md:gap-10 p-10">
      <WhatWeDoItem />
      {whatWeDoConstants.map((items, index) => {
        return <WhatWeDoItem key={items.id} items={items} index={index}/>;
      })}
    </ul>
  );
};

export default WhatWeDo;
