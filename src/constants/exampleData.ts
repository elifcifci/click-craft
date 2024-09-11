import { IDataItems, IExampleDataInterface } from "@/interfaces/exampleDataInterface"

const cardStyles = {
  backgroundType: "0", backgroundColor1: "#75c2f6", backgroundColor2: "#1d5d9b", borderType: "none",
  borderColor: "#75c2f6", borderRadius: "0px", borderWidth: "0px", textColor: "#000000", fontWeight: "600",
  textFontWeight: "400"
};

export const exampleData: IExampleDataInterface = {
  "Card1": {
    "outer": {
      styles: cardStyles,
      image: { src: "", alt: "", width: 200, height: 100 },
      info: { title: "", text: "" },
    }
  },
  "Card2": {
    "outer": {
      styles: cardStyles,
      image: { src: "", alt: "", width: 200, height: 100 },
      info: { title: "", text: "" },
    },
  },
  "Card3": {
    "inner": {
      "inner-0": { image: { src: "", alt: "", width: 200, height: 100 }, info: { title: "", text: "" }, styles: cardStyles },
      "inner-1": { image: { src: "", alt: "", width: 200, height: 100 }, info: { title: "", text: "" }, styles: cardStyles },
      "inner-2": { image: { src: "", alt: "", width: 200, height: 100 }, info: { title: "", text: "" }, styles: cardStyles }
    }
  },
  "Card4": {
    "inner": {
      "inner-0": { info: { title: "", text: "" }, styles: cardStyles },
      "inner-1": { info: { title: "", text: "" }, styles: cardStyles },
      "inner-2": { info: { title: "", text: "" }, styles: cardStyles }
    }
  },
  "Header1": {
    "outer": {
      styles: {
        backgroundType: "2", backgroundColor1: "#75c2f6", backgroundColor2: "#1d5d9b", borderType: "none",
        borderColor: "#75c2f6", borderRadius: "0px", borderWidth: "0px", textColor: "#ffffff", fontWeight: "400"
      },
      image: { src: "", alt: "Logo", width: 40, height: 40 },
      links: { link1: { text: "Link 1", link: "/" }, link2: { text: "Link 2", link: "/" } }
    },
  },
  "Footer1": {
    "outer": {
      image: { src: "", alt: "Logo", width: 40, height: 40 },
      createdBy: {text: "Jane Doe"},
      styles: {
        backgroundType: "2", backgroundColor1: "#75c2f6", backgroundColor2: "#1d5d9b", borderType: "none",
        borderColor: "", borderRadius: "0px", borderWidth: "0px", textColor: "#ffffff", fontWeight: "400"
      }
    },
    "inner": {
      "inner-0": {
        listItem: { 0: [{ id: 0, text: "Link 1", link: "/" }, { id: 1, text: "Link 2", link: "/" }], 1: [{ id: 0, text: "Link 1", link: "/" }, { id: 1, text: "Link 2", link: "/" }] },
        listTitles: [{ id: 0, text: "Lorem Ipsum" }, { id: 1, text: "Lorem Ipsum" }],
        styles: {
         textColor: "#ffffff", fontWeight: "400"
        }
      },
    }
  }
}

export const dataItems: IDataItems = {
  "Card1": {
    "outerHas": ["styles", "image", "info"],
    "innerHas": [],
    "outerStylesHas": ["fontWeight", "textFontWeight", "backgroundType", "borderType", "borderRadius", "borderWidth", "textColor"],
    "innerStylesHas": [],
  },
  "Card2": {
    "outerHas": ["styles", "image", "info"],
    "innerHas": [],
    "outerStylesHas": ["fontWeight", "textFontWeight", "backgroundType", "borderType", "borderRadius", "borderWidth", "textColor"],
    "innerStylesHas": [],
  },
  "Card3": {
    "outerHas": ["styles"],
    "innerHas": ["image", "info", "styles"],
    "outerStylesHas": ["backgroundType", "borderType", "borderRadius", "borderWidth"],
    "innerStylesHas": ["fontWeight", "textFontWeight", "backgroundType", "borderType", "borderRadius", "borderWidth", "textColor"],
  },
  "Card4": {
    "outerHas": ["styles"],
    "innerHas": ["image", "info", "styles"],
    "outerStylesHas": ["backgroundType", "borderType", "borderRadius", "borderWidth"],
    "innerStylesHas": ["fontWeight", "textFontWeight", "backgroundType", "borderType", "borderRadius", "borderWidth", "textColor"],
  },
  "Header1": {
    "outerHas": ["styles", "image", "links"],
    "innerHas": [],
    "outerStylesHas": ["fontWeight", "backgroundType", "borderType", "borderRadius", "borderWidth", "textColor"],
    "innerStylesHas": [],
  },
  "Footer1": {
    "outerHas": ["image", "createdBy", "styles"],
    "innerHas": ["listItem", "listTitles"],
    "outerStylesHas": ["fontWeight", "backgroundType", "borderType", "borderRadius", "borderWidth", "textColor"],
    "innerStylesHas": ["fontWeight", "textFontWeight", "textColor"],
  }
}