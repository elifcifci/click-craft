import { twMerge } from "tailwind-merge";

const Loading = ({ className }: { className: string }) => {
  return (
    <div className={twMerge(className)}>
      <div className="animate-spining w-4 h-4 rounded-full border-blue-default border-4 border-t-transparent p-4"/>
    </div>
  )
}

export default Loading;
