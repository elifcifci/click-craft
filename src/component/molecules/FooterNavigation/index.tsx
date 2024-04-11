import FooterItem from "@/component/atoms/FooterItem";
import { footerConstants } from "@/constants/footerConstants";

const FooterNavigation = () => {
  return (
    <section className="w-[50%] grid md:grid-cols-3 gap-6 sm:gap-8">
      {footerConstants.map((item) => {
        return (
          <FooterItem key={item.key} title={item.title} list={item.list} />
        );
      })}
    </section>
  );
};

export default FooterNavigation;
