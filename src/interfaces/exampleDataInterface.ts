import { FooterLink } from "./footerDataInterface";

export interface IImageDataInterface {
  src: string;
  alt: string;
  width: number | undefined;
  height: number | undefined;
}

interface Link {
  id?: number;
  text: string;
  link: string;
}

export interface ILinkDataInterface {
  [key: string]: Link;
}

interface Links2 {
  [key: string]: Link[];
}

export interface IStyleDataInterface {
  backgroundType?: string;
  backgroundColor1?: string;
  backgroundColor2?: string;
  borderType?: string;
  borderColor?: string;
  borderRadius?: string;
  borderWidth?: string;
  textColor?: string;
  fontWeight?: string;
  textFontWeight?: string;
}

export interface IInfoDataInterface {
  title: string, text: string
}

interface InnerItem {
  info?: IInfoDataInterface
  image?: IImageDataInterface | null;
  links?: ILinkDataInterface | null;
  listTitles?: { id: number; text: string }[] | null;
  listItem?: Links2 | null
  styles?: IStyleDataInterface;
}

interface Inner {
  [key: string]: InnerItem
}

export interface Outer {
  image?: IImageDataInterface;
  links?: ILinkDataInterface | null;
  createdBy?: { text: string };
  styles?: IStyleDataInterface;
  info?: { title: string, text: string },
}

export interface IExampleDataInterface {
  [key: string]: {
    outer?: Outer;
    inner?: Inner;
    footerList?: FooterLink[];
  }
}

export interface IDataItems {
  [key: string]: {
    innerHas: string[],
    outerHas: string[],
    outerStylesHas: string[],
    innerStylesHas: string[],
  }
}