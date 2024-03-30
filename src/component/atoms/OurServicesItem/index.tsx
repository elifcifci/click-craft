import Certificate from "@/app/icon/Certificate";
import Connect from "@/app/icon/Connect";
import Tools from "@/app/icon/Tools";
import EarthPlanetIcon from "@/app/icon/EarthPlanet";
import Wallpaper from "@/app/icon/Wallpaper";

const OurServicesItem = ({ items }: IOurServicesItemProps) => {
  const classes = "flex items-center md:mt-2 fill-current";
  let icon;

  if (items?.title === "development") {
    icon = <EarthPlanetIcon className={classes} />;
  } else if (items?.title === "production") {
    icon = <Connect className={classes} />;
  } else if (items?.title === "branding") {
    icon = <Certificate className={classes} />;
  } else if (items?.title === "web design") {
    icon = <Tools className={classes} />;
  } else {
    icon = <Wallpaper className={classes} />;
  }
  
  return (
    <>
      {items ? (
        <li
          id={items.title}
          key={items.title}
          className="animate-fade-in [animation-timeline:scroll()] [animation-range:0px_100px] text-black-default flex flex-col gap-2 "
        >
          <div className="flex  items-center">
            {icon}
            <div>
              <div className="font-semibold text-xl">
                {items.title.toUpperCase()}
              </div>
              <div className="font-extralight">
                {items.subTitle.toUpperCase()}
              </div>
            </div>
          </div>
          <p className="font-extralight">{items.description}</p>
        </li>
      ) : (
        <li className="animate-fade-in [animation-timeline:scroll()] [animation-range:0px_100px] flex items-start">
          <h2 className="text-4xl text-black-default border-l-2 py-2 pl-6 border-black-lighter">
            <span className="font-extralight">Our</span>{" "}
            <span className="font-semibold">Services</span>
          </h2>
        </li>
      )}
    </>
  );
};

export default OurServicesItem;
