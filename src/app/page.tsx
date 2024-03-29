import WorkTogether from "@/component/atoms/WorkTogether";
import OurServices from "@/component/molecules/OurServices";

export default function HomePage() {
  return (
    <div className="min-h-[100vh] bg-neutral-900 flex flex-col items-center ">
      <WorkTogether />
      <OurServices />
    </div>
  );
}
