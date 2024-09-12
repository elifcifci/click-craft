import { createSlice } from "@reduxjs/toolkit";

interface IItem {
  linkId: string, link: string, text: string
}

interface FooterLink {
  listId: string;
  content: {
    title: string;
    linkList: IItem[];
  }
}

interface IState {
  footerLinks: FooterLink[];
}

const initialState: IState = {
  footerLinks: [
    { listId: "list-1", content: { title: "", linkList: [{ linkId: "list-1-1", link: "/", text: "Link 1" }, { linkId: "list-1-2", link: "/", text: "Link 2" }] } },
    { listId: "list-2", content: { title: "", linkList: [{ linkId: "list-2-1", link: "/", text: "Link 2" }, { linkId: "list-2-2", link: "/", text: "Link 2" }] } }
  ]
}

export const footerLinksSlice = createSlice({
  name: "footerLinks",
  initialState,
  reducers: {
    updateAllLinks: (state, actions) => {
      state.footerLinks = actions.payload
    },
    updateLink: (state, actions) => {
      const { listId, linkId, type, value }: { listId: string, linkId: string, type: "link" | "text" | "title", value: string } = actions.payload;
      const updatedLinks = { ...state.footerLinks } as FooterLink[];
      const targetList = updatedLinks.filter(link => link.listId === listId)?.[0];

      if (targetList) {
        if (type === "title") {
          targetList.content.title = value;
        } else {
          const targetLink = targetList.content.linkList.filter((item) => {
            item.linkId === linkId
          })
          if (targetLink?.[0]) {
            targetLink[0][type] = value
          }
        }
      }
      state.footerLinks = updatedLinks
    },
    addLink: (state, actions) => {
      const { listId, item }: { listId: string, item: { link: string, text: string } } = actions.payload;
      const temp = [...state.footerLinks];
      const targetList = temp.filter(link => link.listId === listId);
      const linkList = targetList?.[0].content.linkList;
      const lastIdOfLinkList = linkList.length > 0 ? Math.max(...linkList?.map(item => parseInt(item.linkId))) : 0; // Find the highest ID
      const itemToAdd = { linkId: `${listId}-${lastIdOfLinkList + 1}`, ...item }

      if (targetList && linkList) {
        linkList.push(itemToAdd)
      }

      state.footerLinks = temp;
    },
    removeLink: (state, actions) => {
      const { listId, linkId }: { listId: string, linkId: string } = actions.payload;
      const temp = [...state.footerLinks];
      const targetList = temp.filter(link => link.listId === listId);
      let linkList = targetList?.[0]?.content?.linkList;

      const indexWillDeleteObject = linkList.findIndex((item) => item.linkId === linkId)

      if (indexWillDeleteObject) {
        linkList = [...linkList.splice(0, indexWillDeleteObject), ...linkList.splice(indexWillDeleteObject, linkList.length)];
      }
    },
    addList: (state, actions) => {
      const temp = [...state.footerLinks]
      const lastId = temp.length > 0 ? Math.max(...temp?.map(item => parseInt(item.listId))) : 0; // Find the highest ID
      temp.push({ listId: `list-${lastId + 1}`, content: actions.payload })
      state.footerLinks = temp
    },
    removeList: (state, actions) => {
      let temp = [...state.footerLinks]
      const listId = actions.payload;
      const indexWillDeleteObject = state.footerLinks.findIndex((item) => item.listId === listId)

      if (listId && indexWillDeleteObject) {
        temp = [...temp.splice(0, indexWillDeleteObject), ...temp.splice(indexWillDeleteObject, temp.length)];
      }

      state.footerLinks = temp;
    }
  }
})

export const { updateAllLinks, addLink, removeLink, addList, removeList } = footerLinksSlice.actions;
export default footerLinksSlice.reducer;