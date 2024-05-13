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
    closeMenu: (state) => {
      state.isOpenedMenu = false
    },
  },
});

export const { toggleMenu, closeMenu } = toggleMenuSlice.actions;
export default toggleMenuSlice.reducer;