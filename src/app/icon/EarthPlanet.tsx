import { IIconInterface } from "@/interfaces/iconInterfaces";

const EarthPlanet = ({ className }: IIconInterface) => {
  return (
    <svg
      width="75"
      height="75"
      className={className}
      viewBox="0 0 75 75"
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlink"
    >
      <rect width="75" height="75" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_12_2" transform="scale(0.0104167)" />
        </pattern>
        <image
          id="image0_12_2"
          width="75"
          height="75"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default EarthPlanet;
