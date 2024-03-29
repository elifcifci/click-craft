import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenedMenu: false,
};

export const toggleMenuSlice = createSlice({
  name: "isOpenedMenu",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isOpenedMenu = !state.isOpenedMenu;
    },
  },
});

export const { toggleMenu } = toggleMenuSlice.actions;
export default toggleMenuSlice.reducer;