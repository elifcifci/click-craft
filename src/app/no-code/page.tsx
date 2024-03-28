import { Metadata } from "next";
import { inter } from "../fonts";

export const metadata: Metadata = {
  title: "Click and Craft",
  description: "Click items to craft your own website",
};

export default function NoCode() {
  return (
    <div
      className={`${inter.className} h-[100vh] flex justify-center items-center bg-zinc-900 mx-auto divide-y`}
    >
      <h1 className="font-thin text-center text-5xl font-semibold text-white items-center p-3">
        Coming Soon!
      </h1>
    </div>
  );
}
