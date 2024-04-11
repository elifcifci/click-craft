import { INewsletterItem } from "@/interfaces/newsletterInterfaces";

const NewsItem = ({ item }: INewsletterItem) => {
  return (
    <li className="overflow-hidden group relative">
      <div className="absolute z-[1] transition-all bg-black-darker/[.7] w-full h-full" />
      <h2 className="absolute top-[16px] left-[16px] z-[2] transition-all">
        {item.title}
      </h2>
      <img
        loading="lazy"
        src={item.image.src}
        alt={item.image.alt}
        className="object-center object-cover group-hover:scale-125 transition-all w-full h-full"
      />
    </li>
  );
};

export default NewsItem;
