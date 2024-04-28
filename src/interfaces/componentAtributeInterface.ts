export interface componentAttributeInterface {
    [key: string]: {
      image: {
        src: string
        alt: string;
        width: number;
        height: number;
      };
      info: {
        title: string;
        text: string;
      };
    };
  }