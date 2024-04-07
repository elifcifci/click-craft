'use client';

import OurServicesItem from "@/component/atoms/OurServicesItem";
import { ourServicesConstants } from "@/constants/ourServicesConstants";
import React from "react";

const OurServices = () => {

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    });
  
    const itemElements = document.querySelectorAll('.our-services-item');
    itemElements.forEach((item) => observer.observe(item));
  
    return () => observer.disconnect();
  }, []);
  
  return (
    <ul id="our-services" className="bg-white w-[100vw] grid sm:grid-cols-2 md:grid-cols-3 md:h-[100%] md:max-h-[500px] gap-6 md:gap-10 p-10">
      <OurServicesItem />
      {ourServicesConstants.map((items, index) => {
        return <OurServicesItem key={items.id} items={items} index={index}/>;
      })}
    </ul>
  );
};

export default OurServices;
