import Link from "next/link";

const FooterItem = ({
  title,
  list,
}: {
  title: string;
  list: { subtitle: string; link: string }[];
}) => {
  return (
    <ul className="text-center">
      <p className="mb-1 font-bold">{title.toUpperCase()}</p>
      {list.map((item) => {
        return (
          <li
            key={`footer-item-${item.subtitle}`}
            className="leading-8 cursor-pointer"
          >
            <Link href={item.link}>{item.subtitle}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default FooterItem;
