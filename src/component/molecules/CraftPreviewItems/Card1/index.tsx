import Image from "next/image"
import ManagePreview from "../../ManagePreview"

const Card1 = ({id, title, text, src }: {id: string, title?: string, text?: string, src?: string }) => {

  return (
    <section className="border-black-darker border-solid rounded-sm p-1">
      {/* Manage */}
      <ManagePreview id={id} />

      {/* Content */}
      <div className="border flex items-center gap-2 px-2 text-black-darker">
        <div>
          <Image src={src ?? "https://picsum.photos/200/100"} alt="Image" width={200} height={100} />
        </div>

        <div>
          <h2>{title ?? "Lorem, ipsum dolor."}</h2>
          <p>{text ?? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptates!"}</p>
        </div>
      </div>
    </section>
  )
}

export default Card1