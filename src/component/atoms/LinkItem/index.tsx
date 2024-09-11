const LinkItem = ({ label, name, defaultValue, onChange }: { label: string, name: "link" | "text", defaultValue: string, onChange: (e:React.ChangeEvent<HTMLInputElement>) => void }) => {

  return (
    <div className="flex items-center justify-start gap-2 w-full">
      <label>{label}:</label>
      <input type="text" name={name} defaultValue={defaultValue} className="!px-2"
        onChange={(e) => onChange(e)} />
    </div>
  )
}
export default LinkItem; 