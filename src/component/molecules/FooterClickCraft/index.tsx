import Logo from "@/component/atoms/Logo";
import Link from "next/link";

const FooterClickCraft = () => {
  return (
    <section className="w-[50%] flex items-center gap-10">
      <Logo />
      <address>
        Written by <a href="mailto:eliffciftci@gmail.com">Elif Çiftçi</a>.<br />
        <Link  href={"https://elifciftci.netlify.app/"}>https://elifciftci.netlify.app/</Link>
      </address>
    </section>
  );
};

export default FooterClickCraft;
