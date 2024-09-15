import { twMerge } from "tailwind-merge";

const LinkItem = ({ className, label, name, defaultValue, onChange }: { className?: string, label: string, name: "link" | "text", defaultValue: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {

  return (
    <div className={twMerge("flex items-center justify-start gap-2 w-full", className)}>
      <label>{label}:</label>
      <input type="text" name={name} defaultValue={defaultValue} className="!px-2"
        onChange={(e) => onChange(e)} />
    </div>
  )
}

export default LinkItem; 