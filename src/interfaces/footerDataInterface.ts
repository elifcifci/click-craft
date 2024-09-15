
export interface IItem {
  linkId: string, link: string, text: string
}

export interface FooterLink {
  listId: string;
  content: {
    title: string;
    linkList: IItem[];
  }
}

export interface IState {
  footerLinks: FooterLink[];
}
