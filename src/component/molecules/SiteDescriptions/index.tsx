import SiteDescription from "@/component/atoms/SiteDescription";
import { siteDescriptionsConstants } from "@/constants/siteDescriptionsConstants";

const SiteDescriptions = () => {
  return (
    <section>
      <ul className="w-100%">
        {siteDescriptionsConstants.map((item, index) => {
          return <SiteDescription key={item.id} item={item} index={index} />;
        })}
      </ul>
    </section>
  );
};

export default SiteDescriptions;
