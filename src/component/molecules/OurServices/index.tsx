import OurServicesItem from "@/component/atoms/OurServicesItem";
import { ourServicesConstants } from "@/constants/ourServicesConstants";

const OurServices = () => {
  return (
    <ul className="bg-white w-[100vw] grid sm:grid-cols-2 md:grid-cols-3 md:h-[100%] md:max-h-[500px] gap-6 md:gap-10 p-10">
      <OurServicesItem />
      {ourServicesConstants.map((items) => {
        return <OurServicesItem key={items.id} items={items} />;
      })}
    </ul>
  );
};

export default OurServices;
