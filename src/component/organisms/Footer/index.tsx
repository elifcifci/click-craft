import FooterClickCraft from "@/component/molecules/FooterClickCraft";
import FooterNavigation from "@/component/molecules/FooterNavigation";

const Footer = () => {
  return (
    <footer id="footer" className="w-full h-full bg-gradient-to-r from-black-darker to-black-default p-4 md:p-10 flex flex-col md:flex-row gap-6">
      <FooterClickCraft />
      <FooterNavigation />
    </footer>
  );
};

export default Footer;
