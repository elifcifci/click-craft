import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPage: "",
};

export const selectedPageSlice = createSlice({
  name: "selectedPage",
  initialState,
  reducers: {
    selectPage: (state, actions) => {
      state.selectedPage = actions.payload
    },
  },
});

export const {selectPage} = selectedPageSlice.actions
export default selectedPageSlice.reducer;