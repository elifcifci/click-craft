import React from "react";

const getWindowDimensions = () => {
  if (typeof window !== "undefined") {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  }
  return { width: 0, height: 0 };
};

const useDimensionsWindow = () => {
  const [windowDimensions, setWindowDimensions] = React.useState(
    getWindowDimensions()
  );

  React.useEffect(() => {
    const handleResize = () => {
        setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

export default useDimensionsWindow;