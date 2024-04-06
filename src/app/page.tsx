import BeCreative from "@/component/atoms/BeCreative";
import WorkTogether from "@/component/atoms/WorkTogether";
import OurServices from "@/component/molecules/OurServices";
import SiteDescriptions from "@/component/molecules/SiteDescriptions";
import Statistics from "@/component/molecules/Statistics";
import Welcome from "@/component/molecules/Welcome";
import Examples from "@/component/organisms/Examples";
import Slider from "@/component/organisms/Slider/inder";

export default function HomePage() {
  return (
    <div className="min-h-[100vh] bg-neutral-900 flex flex-col items-center selection:bg-blue-lighter selection:text-black-darker">
      <Welcome />
      <OurServices />
      <BeCreative />
      <SiteDescriptions />
      <WorkTogether />
      <Examples />
      <Statistics />
      <Slider />
    </div>
  );
}
