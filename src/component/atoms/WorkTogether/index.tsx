import Link from "next/link";

const WorkTogether = () => {
  return (
    <Link
      href={"/no-code"}
      className="h-[10vh] w-[100%] bg-black-default hover:bg-black-dark transition-all flex justify-center items-center font-semibold text-xl"
    >
      LET&apos;S WORK TOGETHER
    </Link>
  );
};

export default WorkTogether;
