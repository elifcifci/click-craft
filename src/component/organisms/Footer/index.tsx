import FooterClickCraft from "@/component/molecules/FooterClickCraft";
import FooterNavigation from "@/component/molecules/FooterNavigation";

const Footer = () => {
  return (
    <footer id="footer" className="w-full h-full bg-gradient-to-r from-black-darker to-black-default p-8 md:p-10 flex flex-col md:flex-row gap-8 md:gap-12">
      <FooterClickCraft />
      <FooterNavigation />
    </footer>
  );
};

export default Footer;
