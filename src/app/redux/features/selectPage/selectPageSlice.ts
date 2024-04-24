import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPage: "",
  selectedItem: ""
};

export const selectedPageSlice = createSlice({
  name: "selectedPage",
  initialState,
  reducers: {
    selectPage: (state, actions) => {
      state.selectedPage = actions.payload
    },
    selectItem: (state, actions) => {
      state.selectedItem = actions.payload
    }
  },
});

export const { selectPage, selectItem } = selectedPageSlice.actions
export default selectedPageSlice.reducer;