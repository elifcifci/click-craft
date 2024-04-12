export const scrollPageUtil = (element: HTMLElement) => {
  const scrollPoint = element.offsetTop - 80;
  window.scrollTo({ top: scrollPoint, behavior: "smooth" });
};
