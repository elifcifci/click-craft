import WorkTogether from "@/component/atoms/WorkTogether";
import OurServices from "@/component/molecules/OurServices";
import Welcome from "@/component/molecules/Welcome";

export default function HomePage() {
  return (
    <div className="min-h-[100vh] bg-neutral-900 flex flex-col items-center ">
      <Welcome/>
      <WorkTogether />
      <OurServices />
    </div>
  );
}
