export interface IDummyDataInterface {
  [cardName: string]: {
    [innerCardName: string]: {
      image?: {
        src: string;
        alt: string;
        width: number;
        height: number;
      };
      info: {
        title: string;
        text: string;
      };
    };
  };
}