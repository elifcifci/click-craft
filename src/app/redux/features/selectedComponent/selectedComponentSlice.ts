import { createSlice } from "@reduxjs/toolkit";

interface State {
  isUserActionToggled: boolean,
  componentToBeEdit: string
}

const initialState: State = {
  isUserActionToggled: false,
  componentToBeEdit: ""
}

export const selectedComponentSlice = createSlice({
  name: "selectedComponent",
  initialState,
  reducers: {
    componentToEdit: (state, actions) => {
      state.componentToBeEdit = actions.payload
    },
    toggleUserAction: (state) => {
      state.isUserActionToggled = !state.isUserActionToggled
    }
  }
})

export const { componentToEdit, toggleUserAction } = selectedComponentSlice.actions;
export default selectedComponentSlice.reducer;