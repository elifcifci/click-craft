import Link from "next/link";
import Statistics from "@/component/molecules/Statistics";

const WorkWithUs = () => {
  return (
    <section id="work-with-us" className="bg-cover bg-top bg-fixed w-[100vw] h-[100vh] bg-beCreative relative max-h-[240px] h-[30vh] w-full bg-black-default hover:bg-black-darker transition-all flex flex-col justify-around items-center font-semibold text-xl md:py-10">
      <div className="absolute t-0 w-full h-[100%] bg-black-darker/[.6]" />
      <Link
        href={"/craft"}
        className="relative z-1 flex flex-col gap-[20px] text-center items-center justify-center  transition-all font-semibold text-xl text-white"
      >
        WORK WITH CLICK CRAFT
      </Link>
      <Statistics />
    </section>
  );
};

export default WorkWithUs;
