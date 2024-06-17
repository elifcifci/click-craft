import Logo from "@/component/atoms/Logo";
import Image from "next/image";

const Promotion = () => {
  return (
    <div style={{ height: "calc(100vh - 80px)" }} className="flex items-center">

      <div className="mb-5 p-2 border-2 border-blue-default border-dashed flex flex-col items-center">
        <div className=" flex flex-col items-center ">
          <Logo stroke="#1d5d9b" fill="#75c2f6"/>
          <p className="font-mono text-black-default">All your data is saved locally in your browser. </p>
        </div>
        <div>
          <p className="promotionText font-bold text-4xl">Drag components, craft your website!</p>
          <Image className="rotate-12" src="/assets/arrow.svg" alt="Arrow" width={100} height={60} />
        </div>
      </div>
    </div>
  )
}

export default Promotion;