import { addComponent } from "@/app/redux/features/selectedComponent/selectedComponentSlice";
import { useDispatch } from "react-redux";
import Card1 from "@/component/molecules/CraftMenuItems/Card1"
import Card2 from "@/component/molecules/CraftMenuItems/Card2"
import Card3 from "@/component/molecules/CraftMenuItems/Card3"
import Card4 from "@/component/molecules/CraftMenuItems/Card4"

const CraftPreviews = ({ dragStart, dragEnter }: { dragStart: (e: React.DragEvent<HTMLLIElement>) => void, dragEnter: (e: React.DragEvent<HTMLLIElement>) => void }) => {
  const dispatch = useDispatch();

  const updateState = (card: string) => {
    dispatch(addComponent(card))
  }

  const cards = [<Card1 />, <Card2 />, <Card3 />, <Card4 />]

  return (
    <div>
      <h2>Cards</h2>
      <ul className="flex flex-col gap-2">
        {
          cards.map((item, index) => {
            return <li
              id={`Card${index + 1}`}
              key={`Card${index + 1}`}
              className="cursor-grab active:cursor-grabbing"
              draggable
              onDragStart={(e) => dragStart(e)}
              onDragEnter={(e) => dragEnter(e)}
              onClick={() => updateState(`Card${index + 1}`)}
              onDragEnd={() => updateState(`Card${index + 1}`)}>
              {item}
            </li>
          })
        }
      </ul>
    </div>

  )
}

export default CraftPreviews;