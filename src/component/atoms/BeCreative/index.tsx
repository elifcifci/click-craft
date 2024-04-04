import Link from "next/link";
import React from "react";

const BeCreative = () => {
  return (
    <section className="bg-cover bg-top bg-fixed w-[100vw] h-[100vh] bg-beCreative relative overflow-hidden animate-fade-in [animation-timeline:scroll()] max-h-[200px] h-[30vh] w-full bg-black-default hover:bg-black-darker transition-all flex justify-center items-center font-semibold text-xl"
    >
      <Link
        href={"/no-code"}
        className="absolute t-0 w-full h-[100%] flex flex-col gap-[20px] text-center items-center justify-center bg-black-darker/[.8] transition-all flex justify-center items-center font-semibold text-xl"
      >
        BE CREATIVE WITH CLICK CRAFT
      </Link>
    </section>
  );
};

export default BeCreative;
