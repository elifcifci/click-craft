import Logo from "@/component/atoms/Logo";

const FooterClickCraft = () => {
  return (
    <section className="md:w-[40%] lg:w-[50%] flex flex-col justify-center items-start gap-5">
      <Logo />
      <address className="text-white">
        Written by <a href="mailto:eliffciftci@gmail.com">Elif Çiftçi</a>.<br />
      </address>
    </section>
  );
};

export default FooterClickCraft;
