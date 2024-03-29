import OurServicesItem from "@/component/atoms/OurServicesItem";
import { ourServices } from "@/constants/ourServices";

const OurServices = () => {
  return (
    <ul className="bg-white w-[100vw]  grid  md:grid-cols-3 md:h-[40vh] gap-6 p-10">
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
