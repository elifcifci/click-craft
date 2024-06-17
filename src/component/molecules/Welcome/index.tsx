import Link from "next/link";

const Welcome = () => {
  return (
    <section className="bg-cover bg-center bg-fixed w-[100vw] h-[100vh] bg-welcome relative overflow-hidden">
      <div className="absolute t-0 w-full h-[100%] flex flex-col lg:flex-row-reverse gap-[20px] lg:gap-[40px] items-center justify-center lg:justify-between lg:px-[100px] bg-black-darker/[.8]">
        <h1 className="flex flex-col text-white items-center lg:items-end gap-[10px] tracking-wider text-3xl lg:text-6xl">
          <span className="font-extralight text-center">
            CRAFT YOUR WEBSITE
          </span>
          <span className="font-bold text-center lg:text-4xl">NO CODING REQUIRED</span>
        </h1>
      </div>
    </section>
  );
};

export default Welcome;
