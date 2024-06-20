import { twMerge } from "tailwind-merge";

const Loading = ({ className = "", innerClassName = "" }: { className?: string, innerClassName?: string }) => {
  return (
    <div className={twMerge(className)}>
      <div className={twMerge("animate-spining w-4 h-4 rounded-full border-blue-default border-4 border-t-transparent p-4", innerClassName)} />
    </div>
  )
}

export default Loading;
