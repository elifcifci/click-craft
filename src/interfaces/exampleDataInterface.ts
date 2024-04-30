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

export interface IExampleDataInterface {
  [cardName: string]: {
    [innerCardName: string]: {
      image?: IImageDataInterface;
      info: IInfoDataInterface;
    };
  };
}