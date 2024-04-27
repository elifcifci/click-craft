import { toggleUserAction } from "@/app/redux/features/selectedComponent/selectedComponentSlice"
import Card1 from "@/component/molecules/CraftMenuItems/Card1"
import Card2 from "@/component/molecules/CraftMenuItems/Card2"
import Card3 from "@/component/molecules/CraftMenuItems/Card3"
import Card4 from "@/component/molecules/CraftMenuItems/Card4"
import { useDispatch } from "react-redux"

const CraftPreviews = ({ dragStart, dragEnter }: { dragStart: (e: React.DragEvent<HTMLLIElement>) => void, dragEnter: (e: React.DragEvent<HTMLLIElement>) => void }) => {
 const dispatch = useDispatch();

  const addLocalStorage = (card: string) => {
    const selectedComponents = localStorage.getItem("selectedComponents")
    const data = { id: `${card}/${Math.floor(Math.random() * 1000)}`, component: card }
   
    if (selectedComponents) {
      const parsedData = JSON.parse(selectedComponents)
      parsedData.push(data)
      localStorage.setItem("selectedComponents", JSON.stringify(parsedData))
    }
    else {
      localStorage.setItem("selectedComponents", JSON.stringify([data]))
    }

    dispatch(toggleUserAction());
  }

  const cards = [<Card1 />, <Card2 />, <Card3 />, <Card4 />]

  return (
    <div>
      <h2>Cards</h2>
      <ul className="flex flex-col gap-2">
        {
          cards.map((item, index) => {
            return <li
              key={`Card${index + 1}`}
              id={`Card${index + 1}`}
              className="cursor-grab active:cursor-grabbing"
              draggable
              onDragStart={(e) => dragStart(e)}
              onDragEnter={(e) => dragEnter(e)}
              onClick={() => addLocalStorage(`Card${index + 1}`)}
              onDragEnd={() => addLocalStorage(`Card${index + 1}`)}>
              {item}
            </li>
          })
        }
      </ul>
    </div>

  )
}

export default CraftPreviews;