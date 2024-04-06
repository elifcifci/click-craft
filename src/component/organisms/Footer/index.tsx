import FooterLegalInfo from "@/component/atoms/FooterLegalInfo.tsx";
import FooterNavigation from "@/component/molecules/FooterNavigation";

const Footer = () => {
  return (
    <footer className="bg-black-default p-8 md:pb-4 sm:p-20 flex flex-col gap-8 md:gap-12">
      <FooterNavigation />
      <FooterLegalInfo />
    </footer>
  );
};

export default Footer;
