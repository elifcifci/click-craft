import Logo from "@/component/atoms/Logo";
import Link from "next/link";

const FooterClickCraft = () => {
  return (
    <section className="w-[50%] flex flex-col justify-center items-start gap-5">
      <Logo />
      <address>
        Written by <a href="mailto:eliffciftci@gmail.com">Elif Çiftçi</a>.<br />
      </address>
    </section>
  );
};

export default FooterClickCraft;
