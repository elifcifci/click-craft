import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenedMenu: false,
};

export const switchMenuSlice = createSlice({
  name: "isOpenedMenu",
  initialState,
  reducers: {
    openMenu: (state) => {
      state.isOpenedMenu = true;
    },
    closeMenu: (state) => {
      state.isOpenedMenu = false;
    },
    switchMenu: (state) => {
      state.isOpenedMenu = !state.isOpenedMenu;
    },
  },
});

export const { openMenu, closeMenu, switchMenu } = switchMenuSlice.actions;
export default switchMenuSlice.reducer;