const FooterItem = ({ title, list }: { title: string; list: string[] }) => {
  return (
    <ul className="text-center">
      <p className="mb-2 border-b-[1px] pb-2 border-black-lighter">
        {title.toUpperCase()}
      </p>
      {list.map((item) => {
        return (
          <li
            key={`footer-item-${item.toLocaleLowerCase()}`}
            className="leading-8 cursor-pointer"
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default FooterItem;
