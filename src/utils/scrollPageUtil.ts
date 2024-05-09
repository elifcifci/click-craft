export const scrollPageUtil = (element: HTMLElement) => {
  if (typeof window !== "undefined") {
    const scrollPoint = element.offsetTop - 80;
    window.scrollTo({ top: scrollPoint, behavior: "smooth" });
  }
};

export const scrollPreviewUtil = (element: HTMLElement) => {
  const container = document.getElementById("previewContainer")
  if (container && element) {
    const scrollPoint = element.offsetTop;
    
    // Scroll the container smoothly to the element's top position
    container.scrollTo({
      top: scrollPoint,
      behavior: 'smooth' // Ensures smooth scrolling animation
    });
  }
};