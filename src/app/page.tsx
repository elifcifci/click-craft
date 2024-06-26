import type { Metadata } from "next";
import WorkWithUs from "@/component/atoms/WorkWithUs";
import SiteDescriptions from "@/component/molecules/SiteDescriptions";
import Welcome from "@/component/molecules/Welcome";
import WhatWeDo from "@/component/molecules/WhatWeDo";
import Faq from "@/component/organisms/Faq";
import Newsletter from "@/component/organisms/Newsletter";
import Slider from "@/component/organisms/Slider/inder";

export const metadata: Metadata = {
  title: "Click and Craft",
  description: "Build Powerful Frontend Apps Without Code",
};

export default function HomePage() {
  return (
    <div className="min-h-[100vh] flex flex-col items-center selection:bg-blue-lighter selection:text-black-darker">
      <Welcome />
      <WhatWeDo />
      <SiteDescriptions />
      <WorkWithUs />
      <Slider />
      <Newsletter />
      <Faq />
    </div>
  );
}
