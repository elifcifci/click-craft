import { updateHeaderLinks } from "@/app/redux/features/headerLinks/headerLinksSlice";
import { useDispatch } from "react-redux";

const HeaderInfoItem = ({ linkKey, label, name, defaultValue }: { linkKey: string, label: string, name: "link" | "text", defaultValue: string }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-start gap-2">
      <label>{label}:</label>
      <input type="text" name={name} defaultValue={defaultValue}
        onChange={(e) => dispatch(updateHeaderLinks({ linkKey, name, value: e.target.value }))} />
    </div>
  )
}
export default HeaderInfoItem; 