import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: "rotate(45deg)"
        }}
      >
        <svg
          className="fill-current rotate-45 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          width={18}
          height={22}
          fill="#3b3a37"
        >
          <path d="M0 192H176V0H160C71.6 0 0 71.6 0 160v32zm0 32V352c0 88.4 71.6 160 160 160h64c88.4 0 160-71.6 160-160V224H192 0zm384-32V160C384 71.6 312.4 0 224 0H208V192H384z" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
