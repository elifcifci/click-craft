export interface IImageDataInterface {
  src: string;
  alt: string;
  width: number | undefined;
  height: number | undefined;
}

export interface IInfoDataInterface {
  title: string;
  text: string;
}

export interface ILinkDataInterface {
  [innerLinkName: string]: {
    text: string;
    link: string;
  }
}

export interface IStyleDataInterface {
  backgroundType: string;
  backgroundColor1: string;
  backgroundColor2: string;
  textColor: string;
  fontWeight: string;
  textFontWeight?: string | null;
  borderType: string;
  borderColor: string;
  borderRadius: string;
  borderWidth: string
}

export interface IExampleDataInterface {
  [cardName: string]: {
    [innerCardName: string]: {
      image?: IImageDataInterface;
      info?: IInfoDataInterface;
      styles?: IStyleDataInterface;
      links?: ILinkDataInterface
    };
  };
}