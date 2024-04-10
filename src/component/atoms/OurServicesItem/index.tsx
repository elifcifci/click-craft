import Image from "next/image";

const OurServicesItem = ({ items, index }: IOurServicesItemProps) => {
  return (
    <>
      {items ? (
        <li
          id={items.title}
          key={items.title}
          style={{
            animationDelay: `${index ? index * 300 + 300 : 300}ms`,
          }}
          className="opacity-0 our-services-item text-black-default flex flex-col items-center sm:items-start gap-2"
        >
          <div className="flex items-center gap-2 sm:gap-4">
            <Image src={items.src} alt={items.alt} width={45} height={45} />
            <h3 className="font-semibold text-xl">
              {items.title.toUpperCase()}
            </h3>
          </div>
          <p className="font-extralight text-center sm:text-left">
            {items.description}
          </p>
        </li>
      ) : (
        <li
          style={{ animationDelay: `100ms` }}
          className="opacity-0 our-services-item flex items-start justify-center sm:justify-start"
        >
          <h2 className="text-3xl md:text-4xl text-black-default border-b-2 sm:border-b-0 sm:border-l-2 mb-4 sm:mb-0 py-2 sm:pl-6 pb-4 border-black-lighter">
            <span className="font-bold">What We Do</span>
          </h2>
        </li>
      )}
    </>
  );
};

export default OurServicesItem;
