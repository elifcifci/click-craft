import { IExampleItem } from "@/interfaces/exampleInterfaces";

const ExampleItem = ({ item }: IExampleItem) => {
  return (
    <li className="overflow-hidden group relative">
      <div className="absolute z-[1] transition-all hover:bg-black-darker/[.8] w-full h-full" />
      <div className="absolute top-[16px] left-[16px] z-[2] invisible group-hover:visible transition-all">
        <h2>{item.title}</h2>
        <p className="font-extralight text-sm mt-2">{item.subTitle}</p>
      </div>
      <img
        src={item.image.src}
        alt={item.image.alt}
        className="object-center object-cover grayscale group-hover:grayscale-0 group-hover:scale-125 transition-all w-full h-full"
      />
    </li>
  );
};

export default ExampleItem;
