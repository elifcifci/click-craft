import FooterClickCraft from "@/component/molecules/FooterClickCraft";
import { footerLegalInfoConstants } from "@/constants/footerConstants";

const FooterLegalInfo = () => {
  return (
    <section className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4 border-t border-black-lighter pt-4">
      <FooterClickCraft/>
      <ul className="flex  flex-wrap	gap-2">
        {footerLegalInfoConstants.map((item) => (
          <li key={`footer-legal-info-${item.toLocaleLowerCase()}`}>
            <p>{item}</p>
          </li>
        ))}
      </ul>
      <p>© 2024, Lifu Group, Inc. All Rights Reserved.</p>
    </section>
  );
};

export default FooterLegalInfo;
