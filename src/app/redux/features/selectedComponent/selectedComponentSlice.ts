import { createSlice } from "@reduxjs/toolkit";

interface State {
  selectedComponents: { id: string, component: string }[];
}

const initialState: State = {
  selectedComponents: []
}

export const selectedComponentSlice = createSlice({
  name: "selectedComponent",
  initialState,
  reducers: {
    addComponent: (state, actions) => {
      console.log("actions", actions)
      state.selectedComponents.push({ id: `${actions.payload}/${state.selectedComponents.length}`, component: actions.payload })
    },
    removeComponent: (state, actions) => {
      state.selectedComponents = state.selectedComponents.filter(item => item.id !== actions.payload)
    }
  }
})

export const { addComponent, removeComponent } = selectedComponentSlice.actions;
export default selectedComponentSlice.reducer;