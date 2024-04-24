import { createSlice } from "@reduxjs/toolkit";

interface State {
  selectedComponents: string[];
}

const initialState: State = {
  selectedComponents: []
}

export const selectedComponentSlice = createSlice({
  name: "selectedComponent",
  initialState,
  reducers: {
    addData: (state, actions) => {
      state.selectedComponents.push(actions.payload)
    }
  }
})

export const { addData } = selectedComponentSlice.actions;
export default selectedComponentSlice.reducer;