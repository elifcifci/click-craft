import Link from "next/link";

const WorkTogether = () => {
  return (
    <Link
      data-testid="work-together"
      href={"/no-code"}
      className="animate-fade-in [animation-timeline:scroll()] [animation-range:0px_100px] max-h-[150px] h-[30vh] w-[100%] bg-black-default hover:bg-black-darker transition-all flex justify-center items-center font-semibold text-xl"
    >
      LET&apos;S WORK TOGETHER
    </Link>
  );
};

export default WorkTogether;
