import { createSlice } from "@reduxjs/toolkit"

interface State {
  headerLinks: { [key: string]: { id: number, link: string, text: string } }
}

const initialState: State = {
  headerLinks: { link1: { id: 1, link: "/", text: "Link 1" }, link2: { id: 2, link: "/", text: "Link 2" } }
}

export const headerLinksSlice = createSlice({
  name: "headerLinks",
  initialState,
  reducers: {
    updateHeaderLinks: (state, actions) => {
      const updatedLinks = { ...state.headerLinks } as { [key: string]: { id: number, link: string; text: string; } }
      const { linkKey, name, value }: { linkKey: string, name: "link" | "text", value: string } = actions.payload; // Destructure payload
      updatedLinks[linkKey][name] = value
      state.headerLinks = updatedLinks
    },
    addLink: (state) => {
      const temp = { ...state.headerLinks }
      const linksArray = Object.values(temp)
      const lastId = linksArray.length > 0 ? Math.max(...linksArray.map(link => link.id)) : 0; // Find the highest ID
      temp[`link${lastId + 1}`] = { id: lastId + 1, link: "", text: "" };
      state.headerLinks = temp
    },
    removeLink: (state, actions) => {
      const updatedLinks = { ...state.headerLinks } as { [key: string]: { id: number, link: string; text: string; } }
      // Find the key of the link object to be deleted
      const keyToDelete = Object.keys(updatedLinks).find(key => updatedLinks[key].id === actions.payload);

      if (keyToDelete) {
        delete updatedLinks[keyToDelete];
      }

      // delete updatedLinks[deletedItem]
      state.headerLinks = updatedLinks
    }
  }
})

export const { addLink, removeLink, updateHeaderLinks } = headerLinksSlice.actions;
export default headerLinksSlice.reducer;