import Logo from "@/component/atoms/Logo";
import Link from "next/link";

const FooterClickCraft = () => {
  return (
    <section className="hidden xl:flex items-center gap-10">
      <Logo />
      <address>
        Written by <a href="mailto:eliffviftci@gmail.com">Elif Çiftçi</a>.<br />
        Visit me at:
        <br />
        <Link  href={"https://elifciftci.netlify.app/"}>https://elifciftci.netlify.app/</Link>
      </address>
    </section>
  );
};

export default FooterClickCraft;
