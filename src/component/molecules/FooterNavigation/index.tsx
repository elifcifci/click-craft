import FooterItem from "@/component/atoms/FooterItem";
import { footerConstants } from "@/constants/footerConstants";

const FooterNavigation = () => {
  return (
    <section className="md:w-[60%] lg:w-[50%] grid grid-cols-2 s:grid-cols-3 gap-6 text-white">
      {footerConstants.map((item) => {
        return (
          <FooterItem key={item.key} title={item.title} list={item.list} />
        );
      })}
    </section>
  );
};

export default FooterNavigation;
