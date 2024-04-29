import { createSlice } from "@reduxjs/toolkit";

interface State {
  isUserActionToggled: boolean,
  componentToBeEdit: { id: string, type: string, hasImage: boolean, innerSelection: string }
}

const initialState: State = {
  isUserActionToggled: false,
  componentToBeEdit: { id: "", type: "" , hasImage: true, innerSelection: ""}
}

export const selectedComponentSlice = createSlice({
  name: "selectedComponent",
  initialState,
  reducers: {
    componentToEdit: (state, actions) => {
      state.componentToBeEdit.id = actions.payload.id
      state.componentToBeEdit.type = actions.payload.type
      state.componentToBeEdit.hasImage = actions.payload.hasImage
      state.componentToBeEdit.innerSelection = `innerCard-${actions.payload?.innerSelection}` ?? ""
    },
    toggleUserAction: (state) => {
      state.isUserActionToggled = !state.isUserActionToggled
    }
  }
})

export const { componentToEdit, toggleUserAction } = selectedComponentSlice.actions;
export default selectedComponentSlice.reducer;