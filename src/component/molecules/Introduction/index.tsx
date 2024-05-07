import Logo from "@/component/atoms/Logo";
import Image from "next/image";

const Introduction = () => {
  return (
    <div style={{ height: "calc(100vh - 80px)" }} className="flex items-center">

      <div className="flex flex-col items-center [&_p]:text-center">
        <div className="flex flex-col items-center">
          <Logo isGradient fill="#75c2f6" />
          <p className="text-black-lighter text-2xl">All your data is saved locally in your browser. </p>
        </div>
        <div className="flex flex-col items-center mt-12 p-2 rounded border-2 border-blue-default border-dashed">
          <p className="text-black-default font-bold text-xl">Drag components, craft your website!</p>
          <Image className="rotate-12  opacity-80 " src="/assets/arrow.svg" alt="Arrow" width={100} height={60} />
        </div>
      </div>
    </div>
  )
}

export default Introduction;