import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isDroppable: false
}

export const isDroppableSlice = createSlice({
  name: "isDraggable",
  initialState,
  reducers: {
    enableDropping: (state) => {
      state.isDroppable = true
    },
    disableDropping: (state) => {
      state.isDroppable = false
    },
  }
})

export const {enableDropping, disableDropping} = isDroppableSlice.actions;
export default isDroppableSlice.reducer;