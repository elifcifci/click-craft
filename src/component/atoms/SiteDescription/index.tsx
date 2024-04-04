import { ISiteDescriptionInterfaces } from "@/interfaces/siteDescriptionInterfaces";

const SiteDescription = ({ item, index }: ISiteDescriptionInterfaces) => {
  return (
    <li
      className={`md:flex w-[100vw] ${
        index % 2 === 0 ? "flex-row-reverse" : ""
      } bg-white text-black-default`}
    >
      <div className="flex flex-col justify-center items-center p-10 md:w-[50%]">
        <div className=" max-w-[400px]">
          <h2
            className={`leading-7 ${
              index % 2 === 0
                ? "md:border-r-2 md:pr-6 md:text-right"
                : "md:border-l-2 md:pl-6 md:text-left"
            } py-2 text-3xl md:text-4xl border-black-lighter flex flex-col`}
          >
            <span className="font-extralight">
              {item.title[0].toLocaleUpperCase()}
            </span>
            <span className="font-semibold">
              {item.title[1].toLocaleUpperCase()}
            </span>
          </h2>
          <p
            className={`md:m-4 md:${
              index % 2 === 0 ? "text-right" : "text-left"
            }`}
          >
            {item.description}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] max-h-[400px]">
        <img
          src={item.image}
          alt={item.alt}
          className="w-full h-[100%] grayscale object-cover"
        />
      </div>
    </li>
  );
};

export default SiteDescription;
