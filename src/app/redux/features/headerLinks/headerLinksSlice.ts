import { createSlice } from "@reduxjs/toolkit"

interface State {
  headerLinks: { [key: string]: { link: string, text: string } }
}

const initialState: State = {
  headerLinks: { link1: { link: "", text: "" } }
}

export const headerLinksSlice = createSlice({
  name: "headerLinks",
  initialState,
  reducers: {
    updateHeaderLinks: (state, actions) => {
      const updatedLinks = { ...state.headerLinks } as { [key: string]: { link: string; text: string; } }
      const { linkKey, name, value }: { linkKey: string, name: "link" | "text", value: string } = actions.payload; // Destructure payload
      updatedLinks[linkKey][name] = value
      state.headerLinks = updatedLinks
    },
    getHeaderLinks: (state, actions) => {
      state.headerLinks = actions.payload
    },
    addLink: (state) => {
      const linksAmount = Object.keys(state.headerLinks).length;
      const temp = state.headerLinks;
      temp[`link${linksAmount + 1}`] = { link: "", text: "" };
      state.headerLinks = temp
    },
    removeLink: () => {

    }
  }
})

export const { addLink, removeLink, getHeaderLinks, updateHeaderLinks } = headerLinksSlice.actions;
export default headerLinksSlice.reducer;