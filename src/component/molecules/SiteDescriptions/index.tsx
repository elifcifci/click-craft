import SiteDescription from "@/component/atoms/SiteDescription";
import { siteDescriptions } from "@/constants/siteDescriptions";

const SiteDescriptions = () => {
  return (
    <section className="border-solid">
      <ul  className="w-100%">
        {siteDescriptions.map((item, index) => {
          return <SiteDescription item={item} index={index} />;
        })}
      </ul>
    </section>
  );
};

export default SiteDescriptions;
