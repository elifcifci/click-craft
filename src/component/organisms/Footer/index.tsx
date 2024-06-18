import FooterClickCraft from "@/component/molecules/FooterClickCraft";
import FooterNavigation from "@/component/molecules/FooterNavigation";

const Footer = () => {
  return (
    <footer id="footer" className="w-full h-full bg-gradient-to-r from-black-default to-black-darker p-4 pb-10 md:p-10 flex flex-col md:flex-row gap-6">
      <FooterClickCraft />
      <FooterNavigation />
    </footer>
  );
};

export default Footer;
