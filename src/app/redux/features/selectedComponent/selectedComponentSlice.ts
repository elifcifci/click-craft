import { createSlice } from "@reduxjs/toolkit";

interface State {
  isUserActionToggled: boolean,
  componentToBeEdit: { id: string, type: string, hasImage: boolean, isStylesChangable: boolean, hasText: boolean, hasLink: boolean, innerSelection: string }
}

const initialState: State = {
  isUserActionToggled: false,
  componentToBeEdit: { id: "", type: "", hasImage: true, isStylesChangable: false, hasText: true, hasLink: false, innerSelection: "" }
}

export const selectedComponentSlice = createSlice({
  name: "selectedComponent",
  initialState,
  reducers: {
    componentToEdit: (state, actions) => {
      state.componentToBeEdit.id = actions.payload.id
      state.componentToBeEdit.type = actions.payload.type
      state.componentToBeEdit.hasImage = actions.payload.hasImage
      state.componentToBeEdit.hasText = actions.payload.hasText
      state.componentToBeEdit.hasLink = actions.payload.hasLink
      state.componentToBeEdit.isStylesChangable = actions.payload.isStylesChangable
      state.componentToBeEdit.innerSelection = `inner-${actions.payload?.innerSelection}` ?? ""
    },
    toggleUserAction: (state) => {
      state.isUserActionToggled = !state.isUserActionToggled
    }
  }
})

export const { componentToEdit, toggleUserAction } = selectedComponentSlice.actions;
export default selectedComponentSlice.reducer;