import OurServicesItem from "@/component/atoms/OurServicesItem";
import { ourServices } from "@/constants/ourServices";

const OurServices = () => {
  return (
    <ul className="bg-white w-[100vw] grid sm:grid-cols-2 md:grid-cols-3 md:h-[100%] md:max-h-[500px] gap-6 p-10">
      <OurServicesItem />
      {ourServices.map((items) => {
        return (
          <OurServicesItem key={`our-services-${items.title}`} items={items} />
        );
      })}
    </ul>
  );
};

export default OurServices;
