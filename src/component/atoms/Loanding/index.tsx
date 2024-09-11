import { twMerge } from "tailwind-merge";

const Loading = ({ className = "", innerClassName = "" }: { className?: string, innerClassName?: string }) => {
  return (
    <div className={twMerge(className)}>
      <div className={twMerge("animate-spining rounded-full border-blue-default border-4 border-t-transparent", innerClassName)} />
    </div>
  )
}

export default Loading;
