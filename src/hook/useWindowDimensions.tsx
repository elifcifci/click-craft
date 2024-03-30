const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

const useDimensionsWindow = () => {
  const [windowDimention, setWindowDimension] = React.useState(
    getWindowDimensions()
  );

  React.useEffect(() => {
    const handleResize = () => {
        setWindowDimension(getWindowDimensions())
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize )
  }, []);

  return windowDimention;
};
