export interface INewsletterItem {
  item: {
    id: string;
    title: string;
    image: {
      src: string;
      alt: string;
    };
  };
}
