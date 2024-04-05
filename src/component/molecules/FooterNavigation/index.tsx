import FooterItem from "@/component/atoms/FooterItem";
import { footerConstants } from "@/constants/footerConstants";

const FooterNavigation = () => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10">
      {footerConstants.map((item) => {
        return (
          <FooterItem key={item.key} title={item.title} list={item.list} />
        );
      })}
    </section>
  );
};

export default FooterNavigation;
