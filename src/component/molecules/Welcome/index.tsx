import Link from "next/link";

const Welcome = () => {
  return (
    <section className="bg-cover bg-center bg-fixed w-[100vw] h-[100vh] bg-welcome selection:bg-blue-lighter selection:text-black-darker relative overflow-hidden">
      <div className="absolute t-0 w-full h-[100%] flex flex-col gap-[20px] items-center justify-center bg-black-darker/[.8]">
        <h1 className="animate-fade-in [animation-timeline:scroll()] [animation-range:0px_100px] flex flex-col items-center gap-[10px] tracking-widest text-3xl md:text-6xl">
          <span className="font-extralight text-center">
            CRAFT YOUR WEBSITE
          </span>
          <span className="font-bold">IN MINUTES</span>
        </h1>
        <ul className="flex gap-[10px] font-thin text-lg tracking-wider">
          <li className="flex gap-[10px]">
            <p>ONEPAGE</p>
            <span>/</span>
          </li>
          <li className="flex gap-[10px]">
            <p>PORTFOLIO</p>
            <span>/</span>
          </li>
          <li>
            <p>BLOG</p>
          </li>
        </ul>
        <div className="text-xs	md:text-base rounded-sm mt-[30px] bg-blue-darker hover:bg-blue-lighter text-gray-lighter hover:text-black-darker transition-all px-4 py-2">
          <Link href={"/no-code"} className="">
            <button>GET STARTED</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
