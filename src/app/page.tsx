import BeCreative from "@/component/atoms/BeCreative";
import WorkTogether from "@/component/atoms/WorkTogether";
import OurServices from "@/component/molecules/OurServices";
import SiteDescriptions from "@/component/molecules/SiteDescriptions";
import Welcome from "@/component/molecules/Welcome";

export default function HomePage() {
  return (
    <div className="min-h-[100vh] bg-neutral-900 flex flex-col items-center ">
      <Welcome />
      <OurServices />
      <BeCreative />
      <SiteDescriptions />
      <WorkTogether />
    </div>
  );
}
