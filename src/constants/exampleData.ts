import { IExampleDataInterface } from "@/interfaces/exampleDataInterface"

const cardStyles = {
  backgroundType: "0", backgroundColor1: "#75c2f6", backgroundColor2: "#1d5d9b", borderType: "none",
  borderColor: "#75c2f6", borderRadius: "0px", borderWidth: "0px", textColor: "#000000", fontWeight: "600",
  textFontWeight: "400"
};

export const exampleData: IExampleDataInterface = {
  "Card1": {
    "inner-0": {
      image: { src: "", alt: "", width: 200, height: 100 }, info: { title: "", text: "" }, styles: cardStyles
    }
  },
  "Card2": {
    "inner-0": {
      image: { src: "", alt: "", width: 200, height: 100 }, info: { title: "", text: "" }, styles: cardStyles
    }
  },
  "Card3": {
    "inner-0": { image: { src: "", alt: "", width: 200, height: 100 }, info: { title: "", text: "" }, styles: cardStyles },
    "inner-1": { image: { src: "", alt: "", width: 200, height: 100 }, info: { title: "", text: "" }, styles: cardStyles },
    "inner-2": { image: { src: "", alt: "", width: 200, height: 100 }, info: { title: "", text: "" }, styles: cardStyles }
  },
  "Card4": {
    "inner-0": { info: { title: "", text: "" }, styles: cardStyles },
    "inner-1": { info: { title: "", text: "" }, styles: cardStyles },
    "inner-2": { info: { title: "", text: "" }, styles: cardStyles }
  },
  "Header1": {
    "inner-0": {
      image: { src: "", alt: "Logo", width: 40, height: 40 },
      links: { link1: { text: "Link 1", link: "/" }, link2: { text: "Link 2", link: "/" } },
      styles: {
        backgroundType: "2", backgroundColor1: "#75c2f6", backgroundColor2: "#1d5d9b", borderType: "none",
        borderColor: "#75c2f6", borderRadius: "0px", borderWidth: "0px", textColor: "#ffffff", fontWeight: "400"
      }
    }
  }
}