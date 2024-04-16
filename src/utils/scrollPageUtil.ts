export const scrollPageUtil = (element: HTMLElement) => {
  if (typeof window !== "undefined") {
    const scrollPoint = element.offsetTop - 80;
    window.scrollTo({ top: scrollPoint, behavior: "smooth" });
  }
};